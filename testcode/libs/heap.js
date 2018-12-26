const Heap = function(){
    this.data = [];
    this.count = 0;
};

Heap.prototype.size = function(){
    return this.count;
};

Heap.prototype.isEmpty = function(){
    return this.count === 0;
};

Heap.prototype.swap = function(array, num1, num2){
    var temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
};

Heap.prototype.push = function(value){
    this.data[this.count] = value;
    /*max heap*/
    
    var temp = this.count;
    while(temp > 0){
        if(temp % 2 === 0) var parent = (temp) / 2;
        else var parent = (temp - 1) / 2;

        if(this.data[temp] > this.data[parent]){
            this.swap(this.data, temp, parent);
            temp = parent;
        }
        else{
            break;
        }
    }
    this.count++;

    /*makeHeap 내용*/
    /*
    for(let i = 1; i < this.size(); i++){
        let now = i;
        while(now > 0){
            var parent = (now - 1) / 2;
            if(this.data[now] > this.data[parent]){
                this.swap(this.data, now, parent);
                now = parent;
            }
            else{
                break;
            }
        }
    }
    */
    
};

Heap.prototype.state = function(){
    console.log(`=== ${this.size()} items in the heap : [${this.data}] ===`);
};

Heap.prototype.pop = function(){
    if(this.isEmpty()) console.log("Error. Heap is Empty");
    else{
        let popedValue = this.data[0];
        //move last node to first node
        this.data[0] = this.data[this.count - 1];
        this.data.splice(--this.count, 1);
        //move first node to adequate place
        var location = 0;
        while(location * 2 < this.count){
            var max;
            if(this.data[location * 2 + 1] >= this.data[location * 2 + 2]){
                max = location * 2 + 1;
            }
            else{
                max = location * 2 + 2;
            }
            if(this.data[location] < this.data[max]){
                this.swap(this.data, location, max);
                location = max;
            }
            else{
                break;
            }
        }
        return popedValue;
    }
};

Heap.prototype.clear = function(){
    this.data = null;
    this.count = 0;
};

module.exports = Heap;