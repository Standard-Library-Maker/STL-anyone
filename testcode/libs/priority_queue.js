// Priority Queue implemented by Jisoo
const PriorityQueue = function (value) {
    this.data = [];                                         // array index will be starts 0
    this.count = 0;
    if (value == "greater") {                               // based on Min_Heap
        this.mode = "min_heap";
    } else if (value == "less" || value == undefined) {     // DEFAULT : based on Max_Heap
        this.mode = "max_heap";
    } else {
        console.log("ERROR:input sort criteria (option:greater,less)");
    }
};

//priority_queue::empty()
PriorityQueue.prototype.empty = function () {
    return this.count === 0;
};

//priority_queue::size()
PriorityQueue.prototype.size = function () {
    return this.count;
};

//priority_queue::top()
PriorityQueue.prototype.top = function () {
    if (this.count > 0) {
        return this.data[0];
    } else {
        console.log("ERROR:priority queue is empty");
        return undefined;
    }
};

//priority_queue::push(value)
PriorityQueue.prototype.push = function (value) {
    if (value == undefined) {
        console.log("ERROR:push() required parameter")
    }

    this.data[this.count] = value;      // insert value into the last location
    if (this.count != 0) {              // need to compare value with parent
        let indexOfValue = this.count;
        let indexOfParent = Math.floor((indexOfValue - 1) / 2);
        if (this.mode == "max_heap") {  // mode : less(default)
            this.maxHeap(indexOfValue, indexOfParent);
        } else {                        // mode : greater
            this.minHeap(indexOfValue, indexOfParent);
        }
    }
    this.count++;
};

PriorityQueue.prototype.maxHeap = function (indexOfValue, indexOfParent) {
    while (indexOfValue > 0) {
        if (this.data[indexOfParent] < this.data[indexOfValue]) {
            this.swapData(indexOfValue, indexOfParent);
            indexOfValue = indexOfParent;
            indexOfParent = Math.floor((indexOfValue - 1) / 2);
        }
        else {
            break;
        }
    }
}

PriorityQueue.prototype.minHeap = function (indexOfValue, indexOfParent) {
    while (indexOfValue > 0) {
        if (this.data[indexOfParent] > this.data[indexOfValue]) {
            this.swapData(indexOfValue, indexOfParent);
            indexOfValue = indexOfParent;
            indexOfParent = Math.floor((indexOfValue - 1) / 2);
        }
        else {
            break;
        }
    }
}

//priority_queue::pop()
PriorityQueue.prototype.pop = function () {
    if (this.empty()) {
        console.log("ERROR:priority queue is empty");
    } else {
        let indexOfRoot = 0;
        let indexOfLeftChild = indexOfRoot * 2 + 1;
        let indexOfRightChild = indexOfRoot * 2 + 2;
        this.data[indexOfRoot] = this.data[this.count - 1];  // remove top data 
        this.count--;
        
        /* 수정 중
        while (indexOfRoot < this.count) {
            let indexOfChange = 0;
            if (indexOfRightChild < this.count) {
                if (this.data[indexOfLeftChild] < this.data[indexOfRightChild]) {
                    indexOfChange = indexOfRightChild;
                } else {
                    indexOfChange = indexOfLeftChild;
                }
            } else {
                indexOfChange = indexOfLeftChild;
            }
            if (this.data[indexOfChange] > this.data[indexOfRoot]) {
                this.swapData(indexOfChange, indexOfRoot);
                indexOfRoot = indexOfChange;
                this.testData();
                let indexOfLeftChild = indexOfRoot * 2 + 1;
                let indexOfRightChild = indexOfRoot * 2 + 2;
            }
            else {
                break;
            }
        }
        */
    }
};

//priority_queue::swap() (C++ 11 supports this method)
PriorityQueue.prototype.swap = function () {
};

//priority_queue::emplace (C++ 11 supports this method)
PriorityQueue.prototype.emplace = function () {
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
PriorityQueue.prototype.testData = function () {
    for (let i = 0; i < this.count; i++) {
        console.log(this.data[i])
    }
    console.log();
    console.log("test empty() // count:" + this.count);
    console.log("test size() // size:" + this.count);
    console.log("test top() // top:" + this.data[0]);
}

PriorityQueue.prototype.swapData = function (indexOfValue, indexOfParent) {
    var tmp = this.data[indexOfValue];
    this.data[indexOfValue] = this.data[indexOfParent];
    this.data[indexOfParent] = tmp;
}

module.exports = PriorityQueue;