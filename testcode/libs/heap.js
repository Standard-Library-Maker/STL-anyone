const swap = require("./swap");

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

Heap.prototype.pushMax = function(value){
  this.data[this.count] = value;
  /*max heap*/

  let temp = this.count;
  while(temp > 0){
    let parent = Math.floor((temp - 1) / 2);

    if(this.data[temp] > this.data[parent]){
      swap(this.data, temp, parent);
      temp = parent;
    }
    else{
      break;
    }
  }
  this.count++;   
};

Heap.prototype.pushMin = function(value){
  this.data[this.count] = value;
  /*min heap*/

  let temp = this.count;
  while(temp > 0){
    let parent = Math.floor((temp - 1) / 2);

    if(this.data[temp] < this.data[parent]){
      swap(this.data, temp, parent);
      temp = parent;
    }
    else{
      break;
    }
  }
  this.count++;   
};

Heap.prototype.state = function() {
  console.log(`=== ${this.size()} items in the heap : [${this.data}] ===`);
};

Heap.prototype.popMax = function() {
  if(this.isEmpty()) {
    console.log("Error. Heap is Empty");
    return null;
  }
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
};

Heap.prototype.popMin = function() {
  if(this.isEmpty()) {
    console.log("Error. Heap is Empty");
    return null;
  }
  let popedValue = this.data[0];
  // move last node to first node
  this.data[0] = this.data[this.count - 1];
  this.data.splice(--this.count, 1);
  // move first node to adequate place
  let location = 0;
  while(location * 2 < this.count) {
    let min;
    if(this.data[location * 2 + 1] <= this.data[location * 2 + 2]) {
      min = location * 2 + 1;
    } else {
      min = location * 2 + 2;
    }
    if(this.data[location] > this.data[min]) {
      swap(this.data, location, min);
      location = min;
    } else{
      break;
    }
  }
  return popedValue;
};

Heap.prototype.clear = function() {
  this.data = null;
  this.count = 0;
};

Heap.prototype.makeMaxHeap = function(array) {
  /* make normal array to heap */
  if(array.length === 0) {
    console.log("Input array is now empty");
    return;
  }
  for(let i = 1; i < array.length; i++) {
    let now = i;
    let parent = null;
    while(now > 0) {
      parent = Math.floor((now - 1) / 2);
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

Heap.prototype.makeMinHeap = function(array) {
  /* make normal array to heap */
  if(array.length === 0) {
    console.log("Input array is now empty");
    return;
  }
  for(let i = 1; i < array.length; i++) {
    let now = i;
    let parent = null;
    while(now > 0) {
      parent = Math.floor((now - 1) / 2);
      if(array[now] < array[parent]) {
        swap(array, now, parent);
        now = parent;
      } else{
        break;
      }
    }
  }
  console.log(`=== ${array.length} items in the heap : [${array}] ===`);
};
var heap = new Heap();
let arr = [1,2,3];
heap.makeMinHeap(arr);

module.exports = Heap;