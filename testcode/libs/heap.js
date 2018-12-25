const Heap = function(){
    this.data = [];
    this.top = 0;
};

Heap.prototype.size = function(){
    return this.top;
};

Heap.prototype.isEmpty = function(){
    return this.top === 0;
};

Heap.prototype.swap = function(array, num1, num2){
    var temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
};

Heap.prototype.push = function(value){
    this.data[this.top] = value;
    
    var count = this.top;
    while(count > 0){
        var parent = (count - 1) / 2;
        if(this.data[count] > this.data[parent]){
            this.swap(this.data, count, parent);
            count = parent;
        }
        else{
            break;
        }
    }
    this.top++;


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
    if(this.isEmpty) Console.log("Error. Heap is Empty");
    else{
        let popedValue = data[0];
        return popedValue;
    }
};

module.exports = Heap;