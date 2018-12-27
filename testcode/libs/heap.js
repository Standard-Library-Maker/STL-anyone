const swap = require("./swap");

const Heap = function() {
  this.data = [];
  this.count = 0;
};

Heap.prototype.size = function() {
  return this.count;
};

Heap.prototype.isEmpty = function() {
  return this.count === 0;
};

Heap.prototype.push = function(value) {
  this.data[this.count] = value;
  /* max heap */

  let temp = this.count;
  let parent = null;
  while(temp > 0) {
    if(temp % 2 === 0) parent = (temp) / 2;
    else parent = (temp - 1) / 2;

    if(this.data[temp] > this.data[parent]) {
      swap(this.data, temp, parent);
      temp = parent;
    } else{
      break;
    }
  }
  this.count++;   
};

Heap.prototype.state = function() {
  console.log(`=== ${this.size()} items in the heap : [${this.data}] ===`);
};

Heap.prototype.pop = function() {
  if(this.isEmpty()) console.log("Error. Heap is Empty");
  else{
    let popedValue = this.data[0];
    // move last node to first node
    this.data[0] = this.data[this.count - 1];
    this.data.splice(--this.count, 1);
    // move first node to adequate place
    let location = 0;
    while(location * 2 < this.count) {
      let max;
      if(this.data[location * 2 + 1] >= this.data[location * 2 + 2]) {
        max = location * 2 + 1;
      } else{
        max = location * 2 + 2;
      }
      if(this.data[location] < this.data[max]) {
        swap(this.data, location, max);
        location = max;
      } else{
        break;
      }
    }
    return popedValue;
  }
};

Heap.prototype.clear = function() {
  this.data = null;
  this.count = 0;
};

Heap.prototype.makeHeap = function(array) {
  /* make normal array to heap */    
  for(let i = 1; i < array.length; i++) {
    let now = i;
    let parent = null;
    while(now > 0) {
      if(now % 2 === 0) parent = (now) / 2;
      else parent = (now - 1) / 2;
      if(array[now] > array[parent]) {
        swap(array, now, parent);
        now = parent;
      } else{
        break;
      }
    }
  }
  console.log(`=== ${array.length} items in the heap : [${array}] ===`);
};

module.exports = Heap;