/**
 * @Class ArrQueue
 * @classdesc 선입선출(First-In-First-Out)의 자료구조이다.
 * @example 
 * var aq = new ArrQueue ();
 * @author yicho93@gmail.com
 */
const ArrQueue = function() {
  console.log("\n==================\nBasic Queue Create\n==================\n");
  this.count = 0;
  this.data = [];
};

/**
 * @method ArrQueue.isEmpty  
 * @description This method is used to check if this queue is empty.
 * @returns This method returns ‘true’ if this queue is empty or ‘false’ if this queue is not empty.
 * @example 
 * var aq = new ArrQueue ();
 * var ret1 = aq.isEmpty(); // ret1 = true
 * aq.push(1);
 * var ret2 = aq.isEmpty(); // ret2 = false
 */
ArrQueue.prototype.isEmpty = function() {
  return this.count === 0;
};

/**
 * @method ArrQueue.push
 * @description This method is used to insert the specified value into this queue.
 * @param {undefined} value - The value to be inserted to this queue.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1);
 * aq.push(2);
 */
ArrQueue.prototype.push = function(value) {
  this.data[this.count++] = value;
};

/**
 * @method ArrQueue.pop
 * @description This method is used to remove value from this queue.
 * @returns This method returns the value which is poped.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.pop() // 1 will be removed.
 */
ArrQueue.prototype.pop = function() {
  if (this.isEmpty()) console.log("Error. Queue is empty");
  else {
    let popedValue = this.data[0];
    for (let i = 0; i < this.count - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data.splice(--this.count, 1);
    return popedValue;
  } 
};

/**
 * @method ArrQueue.front
 * @description  This method is used to get the first value in this queue, but does not remove.
 * @returns This method returns the first value of this queue, or null if this queue is empty.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * var ret = aq.front() // ret1 = 1 
 */
ArrQueue.prototype.front = function() {
  if (this.isEmpty()) console.log("Error. Queue is empty");
  else return this.data[0];
};

/**
 * @method ArrQueue.back
 * @description  This method is used to get the last value in this queue, but does not remove.
 * @returns This method returns the last value of this queue, or null if this queue is empty.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * var ret = aq.back() // ret1 = 3
 */
ArrQueue.prototype.back = function() {
  if (this.isEmpty()) console.log("Error. Queue is empty");
  else return this.data[this.count - 1];
};

/**
 * @method ArrQueue.size  
 * @description This method is used to get the number of values in this queue.
 * @returns This method returns the number of values in this queue.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * var size = aq.size(); // size = 3
 */
ArrQueue.prototype.size = function() {
  return this.count;
};

/**
 * @method ArrQueue.clear  
 * @description This method is used to nullify this queue and make all variables initial.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * aq.clear();
 */
ArrQueue.prototype.clear = function() {
  this.count = 0;
  this.data = [];
};

/**
 * @method ArrQueue.toString  
 * @description This method shows state of this queue.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * aq.toString(); // 1, 2, 3
 */
ArrQueue.prototype.toString = function() {
  console.log(`=== ${this.size()} items in the queue : [${this.data}] ===`);
};


/**
 * @Class CircularQueue
 * @classdesc 배열로 이루어진 큐를 사용하다가 가장 마지막 부분을 쓰면 다시 제일 처음부터 큐를 채우기 시작하는 형태의 자료구조이다.
 * @param {Number} max - the length of queue
 * @example 
 * var cq = new CircularQueue (3);
 * @author yicho93@gmail.com
 */
const CircularQueue = function (max) {
  console.log("\n======================\nCircular Queue Create\n======================\n");
  this.qFront = 0;
  this.qBack = 0;
  this.data = [];
  this.MAX_SIZE = max + 1;
};

/**
 * @method CircularQueue.isFull  
 * @description This method is used to check if this circular queue is full.
 * @returns {Boolean} This method returns ‘true’ if this circular queue is full or ‘false’ if this circular queue is not full.
 * @example 
 * var cq = new CircularQueue (3);
 * var ret1 = cq.isFull(); // ret1 = false
 * cq.push(1);
 * var ret2 = cq.isFull(); // ret2 = true
 */
CircularQueue.prototype.isFull = function() {
  return ((this.qBack + 1) % this.MAX_SIZE === this.qFront);
};

/**
 * @method CircularQueue.isEmpty  
 * @description This method is used to check if this circular queue is empty.
 * @returns {Boolean} This method returns ‘true’ if this circular queue is empty or ‘false’ if this circular queue is not empty.
 * @example 
 * var cq = new CircularQueue (3);
 * var ret1 = cq.isEmpty(); // ret1 = true
 * cq.push(1);
 * var ret2 = cq.isEmpty(); // ret2 = false
 */
CircularQueue.prototype.isEmpty = function() {
  return this.qBack === this.qFront;
};

/**
 * @method CircularQueue.push
 * @description This method is used to insert the specified value into this circular queue.
 * @param {undefined} value - The value to be inserted to this circular queue.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 */
CircularQueue.prototype.push = function(value) {
  if (this.isFull()) {
    console.log("Error! Queue is full");
  } else {
    this.qBack = (this.qBack + 1) % this.MAX_SIZE;
    this.data[this.qBack] = value;
  }
};

/**
 * @method CircularQueue.pop
 * @description This method is used to remove value from this circular queue.
 * @returns This method returns the value which is poped.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 * cq.pop() // 1 will be removed.
 */
CircularQueue.prototype.pop = function() {
  if (this.isEmpty()) {
    console.log("Error! Queue is empty");
  } else {
    this.qFront = (this.qFront + 1) % this.MAX_SIZE;
    let popedValue = this.data[this.qFront];
    // data.splice(qFront, 1); reduces MAX_SIZE
    delete this.data[this.qFront];
    return popedValue;
  }
};

/**
* @method CircularQueue.front
* @description  This method is used to get the first value in this circular queue, but does not remove.
* @returns This method returns the first value of this circular queue, or null if this circular queue is empty.
* @example 
* var cq = new CircularQueue (3);
* cq.push(1);
* cq.push(2);
* var ret = cq.front() // ret1 = 1 
*/
CircularQueue.prototype.front = function() {
  if (this.isEmpty()) console.log("Error! Queue is empty");
  else return this.data[(this.qFront + 1) % this.MAX_SIZE];
};

/**
 * @method CircularQueue.back
 * @description  This method is used to get the last value in this circular queue, but does not remove.
 * @returns This method returns the last value of this circular queue, or null if this circular queue is empty.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 * var ret = cq.back() // ret1 = 2
 */
CircularQueue.prototype.back = function() {
  if (this.isEmpty()) console.log("Error! Queue is empty");
  else return this.data[this.qBack];
};

/**
 * @method CircularQueue.size  
 * @description This method is used to get the number of values in this circular queue.
 * @returns This method returns the number of values in this circular queue.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 * cq.push(3);
 * var size = cq.size(); // size = 3
 */
CircularQueue.prototype.size = function() {
  if (this.isFull()) return this.MAX_SIZE - 1;
  return this.qBack - this.qFront;
};

/**
 * @method CircularQueue.clear  
 * @description This method is used to nullify this circular queue and make all variables initial.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 * cq.push(3);
 * cq.clear();
 */
CircularQueue.prototype.clear = function() {
  this.qFront = 0;
  this.qBack = 0;
  this.data = [];
};

/**
 * @method CircularQueue.toString  
 * @description This method shows state of this circular queue.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 * cq.push(3);
 * cq.toString(); // 1, 2, 3
 */
CircularQueue.prototype.toString = function() {
  console.log(`=== ${this.size()} items in the queue : [${this.data}] ===`);
};

// Linked list queue -> will be implemented after implementing ll
/* function LlQueue() {
  let data = [];
  let head = 0;
  let tail = 0;
} */

module.exports = {
  ArrQueue,
  CircularQueue,
  // LlQueue,
};

