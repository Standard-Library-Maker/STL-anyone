/**
 * @Class ArrQueue
 * @classdesc 선입선출(First-In-First-Out)의 자료구조이다.
 * @example 
 * var aq = new ArrQueue ();
 * @author yicho93@gmail.com
 */
function ArrQueue() {
  console.log("\n==================\nBasic Queue Create\n==================\n");
  let count = 0;
  let data = [];

  /**
 * @method ArrQueue.isEmpty  
 * @description This method is used to check if this queue is empty.
 * @returns {Boolean} This method returns ‘true’ if this queue is empty or ‘false’ if this queue is not empty.
 * @example 
 * var aq = new ArrQueue ();
 * var ret1 = aq.isEmpty(); // ret1 = true
 * aq.push(1);
 * var ret2 = aq.isEmpty(); // ret2 = false
 */
  this.isEmpty = () => (count === 0);

  /**
   * @method ArrQueue.push
   * @description This method is used to insert the specified element into this queue.
   * @param {Undefined} value - The element to be inserted to this queue.
   * @example 
   * var aq = new ArrQueue ();
   * aq.push(1);
   * aq.push(2);
   */
  this.push = (value) => {
    data[count++] = value;
  };

  /**
 * @method ArrQueue.pop
 * @description This method is used to remove element from this queue.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.pop() // 1 will be removed.
 */
  this.pop = () => {
    if (this.isEmpty()) console.log("Error. Queue is empty");
    else {
      let popedValue = data[0];
      for (let i = 0; i < count - 1; i++) {
        data[i] = data[i + 1];
      }
      data.splice(--count, 1);
      return popedValue;
    }
  };

  /**
 * @method ArrQueue.front
 * @description  This method is used to get the first element in this queue, but does not remove.
 * @returns {value} This method returns the first element of this queue, or null if this queue is empty.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * var ret = aq.front() // ret1 = 1 
 * */
  this.front = () => {
    if (this.isEmpty()) console.log("Error. Queue is empty");
    else return data[0];
  };

  /**
  * @method ArrQueue.back
  * @description  This method is used to get the last element in this queue, but does not remove.
  * @returns {value} This method returns the last element of this queue, or null if this queue is empty.
  * @example 
  * var aq = new ArrQueue ();
  * aq.push(1); 
  * aq.push(2);
  * aq.push(3);
  * var ret = aq.back() // ret1 = 3
  * */
  this.back = () => {
    if (this.isEmpty()) console.log("Error. Queue is empty");
    else return data[count - 1];
  };

  /**
 * @method ArrQueue.size  
 * @description This method is used to get the number of elements in this queue.
 * @returns {Number} This method returns the number of elements in this queue.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * var size = aq.size(); // size = 3
 */
  this.size = () => count;

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
  this.clear = () => {
    count = 0;
    data = [];
  };

  /**
 * @method ArrQueue.state  
 * @description This method shows state of this queue.
 * @example 
 * var aq = new ArrQueue ();
 * aq.push(1); 
 * aq.push(2);
 * aq.push(3);
 * aq.state(); // 1, 2, 3
 */
  this.state = () => {
    console.log(`=== ${this.size()} items in the queue : [${data}] ===`);
  };
}

/**
 * @Class CircularQueue
 * @classdesc 배열로 이루어진 큐를 사용하다가 가장 마지막 부분을 쓰면 다시 제일 처음부터 큐를 채우기 시작하는 형태의 자료구조이다.
 * @param {Number} max - the length of queue
 * @example 
 * var cq = new CircularQueue (3);
 * @author yicho93@gmail.com
 */
function CircularQueue(max) {
  console.log("\n======================\nCircular Queue Create\n======================\n");
  let qFront = 0;
  let qBack = 0;
  let data = [];
  const MAX_SIZE = max + 1;

  this.isFull = () => ((qBack + 1) % MAX_SIZE === qFront);

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
  this.isEmpty = () => (qBack === qFront);

  /**
 * @method CircularQueue.push
 * @description This method is used to insert the specified element into this circular queue.
 * @param {Undefined} value - The element to be inserted to this circular queue.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 */
  this.push = (value) => {
    if (this.isFull()) {
      console.log("Error! Queue is full");
    } else {
      qBack = (qBack + 1) % MAX_SIZE;
      data[qBack] = value;
    }
  };

  /**
 * @method CircularQueue.pop
 * @description This method is used to remove element from this circular queue.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 * cq.pop() // 1 will be removed.
 */
  this.pop = () => {
    if (this.isEmpty()) {
      console.log("Error! Queue is empty");
    } else {
      qFront = (qFront + 1) % MAX_SIZE;
      let popedValue = data[qFront];
      // data.splice(qFront, 1); reduces MAX_SIZE
      delete data[qFront];
      return popedValue;
    }
  };

  /**
* @method ArrQueue.CircularQueue
* @description  This method is used to get the first element in this circular queue, but does not remove.
* @returns {value} This method returns the first element of this circular queue, or null if this circular queue is empty.
* @example 
* var cq = new CircularQueue (3);
* cq.push(1);
* cq.push(2);
* var ret = cq.front() // ret1 = 1 
* */
  this.front = () => {
    if (this.isEmpty()) console.log("Error! Queue is empty");
    else return data[(qFront + 1) % MAX_SIZE];
  };

  /**
* @method CircularQueue.back
* @description  This method is used to get the last element in this circular queue, but does not remove.
* @returns {value} This method returns the last element of this circular queue, or null if this circular queue is empty.
* @example 
* var cq = new CircularQueue (3);
* cq.push(1);
* cq.push(2);
* var ret = cq.back() // ret1 = 2
* */
  this.back = () => {
    if (this.isEmpty()) console.log("Error! Queue is empty");
    else return data[qBack];
  };

  /**
* @method CircularQueue.size  
* @description This method is used to get the number of elements in this circular queue.
* @returns {Number} This method returns the number of elements in this circular queue.
* @example 
* var cq = new CircularQueue (3);
* cq.push(1);
* cq.push(2);
* cq.push(3);
* var size = cq.size(); // size = 3
*/
  this.size = () => {
    if (this.isFull()) return MAX_SIZE - 1;
    return qBack - qFront;
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
  this.clear = () => {
    qFront = 0;
    qBack = 0;
    data = [];
  };

    /**
 * @method CircularQueue.state  
 * @description This method shows state of this circular queue.
 * @example 
 * var cq = new CircularQueue (3);
 * cq.push(1);
 * cq.push(2);
 * cq.push(3);
 * cq.state(); // 1, 2, 3
 */
  this.state = () => {
    console.log(`=== ${this.size()} items in the queue : [${data}] ===`);
  };
}

// Linked list queue -> will be implemented after implementing ll
function LlQueue() {
  let data = [];
  let head = 0;
  let tail = 0;
}

module.exports = {
  ArrQueue,
  CircularQueue,
  LlQueue,
};


/* Test Code */
/* let s1 = new ArrQueue();
s1.push("hello world");
s1.push("hello javascript");
s1.push("this is queue");
s1.state();
console.log(`front : ${s1.front()}`);
console.log(`back : ${s1.back()}`);
console.log(`size : ${s1.size()}`);

console.log(`pop : ${s1.pop()}`);
s1.state();
console.log(`front : ${s1.front()}`);
console.log(`back : ${s1.back()}`);
console.log(`size : ${s1.size()}`);
s1.clear();
console.log("=== after clear() ===");
s1.state(); */

/* test code2 */
/* let s2 = new CircularQueue(3);
s2.push("hello world");
s2.push("hello javascript");
s2.push("this is circular queue");
s2.state();
console.log(`front : ${s2.front()}`);
console.log(`back : ${s2.back()}`);
console.log(`size : ${s2.size()}`);

console.log(`pop : ${s2.pop()}`);
s2.state();
console.log(`front : ${s2.front()}`);
console.log(`back : ${s2.back()}`);
console.log(`size : ${s2.size()}`);

console.log(`pop : ${s2.pop()}`);
s2.state();
console.log(`front : ${s2.front()}`);
console.log(`back : ${s2.back()}`);
console.log(`size : ${s2.size()}`);

s2.clear();
console.log("=== after clear() ===");
s2.state(); */

