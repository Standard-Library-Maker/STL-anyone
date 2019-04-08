const swap = require("./swap");

/**
 * @Class Heap
 * @classdesc Heap에 저장되어 있는 요소들은 트리 형태로 표현되며 요소의 정렬 방식에 따라 max-heap(내림차순), min-heap(오름차순)으로 나뉩니다. 트리 형태이기 때문에 요소 간에는 부모, 자식의 관계가 존재합니다.
 * @example 
 * var heap = new Heap ();
 * @author seeung0305@naver.com
 */
const Heap = function(){
  this.data = [];
  this.count = 0;
};

/**
 * @method Heap.size  
 * @description This method is used to get the number of elements in this heap.
 * @returns {Number} This method returns the number of elements in this heap.
 * @example 
 * var heap = new Heap ();
 * heap.pushMin(1);
 * heap.pushMin(2);
 * var size = heap.size(); // size = 2
 */
Heap.prototype.size = function(){
  return this.count;
};

/**
 * @method Heap.isEmpty  
 * @description This method is used to check if this heap is empty.
 * @returns {Boolean} This method returns ‘true’ if this heap is empty or ‘false’ if this heap is not empty.
 * @example 
 * var heap = new Heap ();
 * var ret1 = heap.isEmpty(); // ret1 = true
 * heap.pushMin(1);
 * var ret2 = heap.isEmpty(); // ret2 = false
 */
Heap.prototype.isEmpty = function(){
  return this.count === 0;
};

/**
 * @method Heap.pushMax
 * @description This method is used to insert the specified element into this heap.
 * This method is used in max-heap which its elements are ordered by ASC.
 * @param {Undefined} value - The element to be inserted to this heap.
 * @throws This method returns null if parameter is missing.
 * @example 
 * var heap = new Heap ();
 * heap.pushMax(1);
 * heap.pushMax(2);
 */
Heap.prototype.pushMax = function(value){
  if(value === null) return null;
  this.data[this.count] = parseInt(value);
  /*max heap*/

  let temp = this.count;
  while(temp > 0){
    /*
    let parent;
    if(temp % 2 === 0) parent = temp / 2;
    else parent = temp / 2 - 0.5;
    */
    let parent = Math.floor((temp - 1) / 2);
    console.log("parent : " + parent);
    console.log("parent data : " + this.data[parent]);
    console.log("temp : " + temp);
    console.log("temp data : " + this.data[temp]);
    if(this.data[temp] > this.data[parent]){
      swap(this.data, temp, parent);
      console.log(this.data);
      temp = parent;
    }
    else{
      console.log("else : "+this.data);
      break;
    }
  }
  this.count++;
};

/**
 * @method Heap.pushMin
 * @description This method is used to insert the specified element into this heap.
 * This method is used in min-heap which its elements are ordered by DESC.
 * @param {Undefined} value - The element to be inserted to this heap.
 * @throws This method returns null if parameter is missing.
 * @example 
 * var heap = new Heap ();
 * heap.pushMin(1);
 * heap.pushMin(2);
 */
Heap.prototype.pushMin = function(value){
  if(value === null) return null;
  this.data[this.count] = parseInt(value);
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

/**
 * @method Heap.state
 * @description This method shows state of the heap.
 * @example 
 * var heap = new Heap ();
 * heap.pushMin(4); 
 * heap.pushMin(2);
 * heap.pushMin(3);
 * heap.pushMin(1);
 * heap.state(); //  [1,2,3,4]
 */
Heap.prototype.state = function() {
  //console.log(`=== ${this.size()} items in the heap : [${this.data}] ===`);
};

/**
 * @method Heap.popMax
 * @description This method is used to remove the very first element from this heap.
 * This method is used in max-heap which its elements are ordered by ASC.
 * @returns {undefined} This method returns the first element from this heap.
 * @throws This method returns null if heap is empty.
 * @example 
 * var heap = new Heap ();
 * heap.pushMax(1); 
 * heap.pushMax(2);
 * heap.popMax(); // 2 will be removed.
 */
Heap.prototype.popMax = function() {
  if(this.isEmpty()) {
    //console.log("Error. Heap is Empty");
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

/**
 * @method Heap.popMin
 * @description This method is used to remove the very first element from this heap.
 * This method is used in min-heap which its elements are ordered by DESC.
 * @returns {undefined} This method returns the first element from this heap.
 * @throws This method returns null if heap is empty.
 * @example 
 * var heap = new Heap ();
 * heap.pushMin(1); 
 * heap.pushMin(2);
 * heap.popMin(); // 1 will be removed.
 */
Heap.prototype.popMin = function() {
  if(this.isEmpty()) {
    //console.log("Error. Heap is Empty");
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

/**
 * @method Heap.clear
 * @description This method is used to nullify this heap and make all variables initial.
 * @example 
 * var heap = new Heap ();
 * heap.pushMin(1); 
 * heap.pushMin(2);
 * heap.clear(); 
 * heap.state();
 */
Heap.prototype.clear = function() {
  this.data = null;
  this.count = 0;
};

/**
 * @method Heap.makeMaxHeap
 * @description This method makes normal array into max-heap.
 * @param {Array} array The array is to be reconstructed to max-heap.
 * @throws This method returns 'false' if inserted array is empty.
 * @example 
 * var heap = new Heap ();
 * var arr = [1,2,3];
 * heap.makeMaxHeap(arr) // arr [1,2,3] will be changed arr[3,1,2]
 */
Heap.prototype.makeMaxHeap = function(array) {
  /* make normal array to heap */
  if(array.length === 0) {
    //console.log("Input array is now empty");
    return false;
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
  //console.log(`=== ${array.length} items in the heap : [${array}] ===`);
};

/**
 * @method Heap.makeMinHeap
 * @description This method makes normal array into min-heap.
 * @param {Array} array The array is to be reconstructed to min-heap.
 * @throws This method returns 'false' if inserted array is empty.
 * @example 
 * var heap = new Heap ();
 * var arr = [3,2,1];
 * heap.makeMinHeap(arr) // arr [3,2,1] will be changed arr[1,3,2]
 */
Heap.prototype.makeMinHeap = function(array) {
  /* make normal array to heap */
  if(array.length === 0) {
    //console.log("Input array is now empty");
    return false;
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
  //console.log(`=== ${array.length} items in the heap : [${array}] ===`);
};

Heap.prototype.toString = function () {
  return `=== ${this.size()} items in the heap : [${this.data}] ===`;
};

Heap.prototype.getResult = function () {
  let returnValue = this.data[0];
  let connectValue = ' - '
  for (let i = 1; i < this.count; i++) {
    returnValue =  returnValue + connectValue + this.data[i];
  }
  return returnValue;
};

export default Heap;