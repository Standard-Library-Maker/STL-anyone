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
    var pos = 0;
    while(pos * 2 < this.count){
      var max;
      if(this.data[pos * 2 + 1] >= this.data[pos * 2 + 2]){
        max = pos * 2 + 1;
      }
      else{
        max = pos * 2 + 2;
      }
      if(this.data[pos] < this.data[max]){
        this.swap(this.data, pos, max);
        pos = max;
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

Heap.prototype.makeHeap = function(array){
  /*make normal array to heap*/    
  for(let i = 1; i < array.length; i++){
    let now = i;
    while(now > 0){
      if(now % 2 === 0) var parent = (now) / 2;
      else var parent = (now - 1) / 2;
        if(array[now] > array[parent]){
        this.swap(array, now, parent);
        now = parent;
      }
      else{
        break;
      }
    }
  }
  console.log(`=== ${array.length} items in the heap : [${array}] ===`);
};

module.exports = Heap;