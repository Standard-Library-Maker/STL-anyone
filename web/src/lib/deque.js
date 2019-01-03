let Node = function (value) {
  this.data = value;
  this.prev = null;
  this.next = null;
};

/**
 * @Class Deque
 * @classdesc Deque(덱,Double-ended queue)는 양쪽 끝에서 요소들의 삽입과 삭제가 가능한 자료구조의 형태를 가지고 있으며, 큐와 스택의 개념을 합친 개념이다.
 * @example 
 * var dq = new Deque ();
 * @author ljsoo0925@gmail.com
 */
const Deque = function () {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

/**
 * @method Deque.push_front
 * @description This method is used to insert the specified element at the front of this deque.
 * @param {Undefined} value - The element to be inserted to this deque.
 * @throws This method returns –1 if the parameter is missing.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 */
Deque.prototype.push_front = function (value) {
  if (value === undefined){
    //alert("ERROR:push_front() required parameter");
    return -1;
  }

  let newNode = new Node(value);  // make newNode

  if (this.length !== 0) {  // if deque isn't empty
    this.head.prev = newNode
  }
  newNode.next = this.head;
  this.head = newNode;

  if (this.head.next === null) {
    this.tail = this.head;
  }
  this.length++;
};

/**
 * @method Deque.push_back
 * @description This method is used to insert the specified element at the end of this deque.
 * @param {Undefined} value - The element to be inserted to this deque.
 * @throws This method returns –1 if the parameter is missing.
 * @example 
 * var dq = new Deque ();
 * dq.push_back(3);
 * dq.push_back(4);
 */
Deque.prototype.push_back = function (value) {
  if (value === undefined){
    //alert("ERROR:push_back() required parameter");
    return -1;
  }

  let newNode = new Node(value);  // make newNode

  if (this.length === 0) { // if deque is empty
    this.push_front(value);
  } else {  // if deque isn't empty
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
};

/**
 * @method Deque.pop_front
 * @description This method is used to remove the element from the front of this deque.
 * @throws This method returns null if this deque is empty.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * dq.pop_front(); // 2 will be removed.
 */
Deque.prototype.pop_front = function () {
  if (this.length === 0) {
    //alert("ERROR:deque is empty");
    return null;
  }

  let popNode = new Node();
  popNode = this.head;
  this.head = this.head.next;
  if (this.head !== null) {
    this.head.prev = null;
  }
  popNode = null;
  this.length--;
};

/**
 * @method Deque.pop_back
 * @description This method is used to remove the element from the end of this deque.
 * @throws This method returns null if this deque is empty.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * dq.pop_back(); // 4 will be removed.
 */
Deque.prototype.pop_back = function () {
  if (this.length === 0) {
    //alert("ERROR:deque is empty");
    return null;
  }

  let popNode = new Node();
  popNode = this.tail;
  this.tail = this.tail.prev;
  if (this.tail !== null) {
    this.tail.next = null;
  }
  popNode = null;
  this.length--;
};

/**
 * @method Deque.erase
 * @description This method is used to remove the element from the specified position from this deque.
 * @param {Number} position - The position to be removed from this deque.
 * @throws This method returns null if this deque is empty, or –1 if the parameter is missing.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * dq.erase(2); // 3 will be removed.
 */
Deque.prototype.erase = function (pos) {
  if (pos === undefined){
    //alert("ERROR::erase() required parameter");
    return -1;
  }

  if (pos === 0) { // remove head value
    this.pop_front();
  } else if (pos === this.length - 1) { // remove tail value
    this.pop_back();
  } else {
    let eraseNode = new Node();
    let getNode = new Node();
    let temp = Math.floor(this.length / 2);
    if (pos >= this.length || pos < 0) {
      //alert("ERROR : this position is empty");
      return null;
    }
    else if (temp >= pos) {  // find start at head
      eraseNode = this.head;
      for (let l = 0; l < pos; l++) {
        eraseNode = eraseNode.next; // go to position
      }
    } else {                  // find start at tail
      eraseNode = this.tail;
      for (let l = this.length - 1; l > pos; l--) {
        eraseNode = eraseNode.prev; // go to position
      }
    }
    getNode = eraseNode.prev;
    getNode.next = eraseNode.next;
    getNode.next.prev = getNode;
    eraseNode = null;
    this.length--;
  }
};

/**
 * @method Deque.clear
 * @description This method is used to remove all of the elements from this deque.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * dq.clear();  
 */
Deque.prototype.clear = function () {
  this.length = 0;
  this.head.data = null;
  this.head.next = null;
  this.tail.data = null;
  this.tail.prev = null;
  this.head = null;
  this.tail = null;
};

/**
 * @method Deque.front
 * @description This method is used to get the element at the front of this deque.
 * @throws This method returns null if the deque is empty.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * var ret1 = dq.front(); // ret1 = 2
 * var ret2 = dq.front(); // ret2 = 1
 */
Deque.prototype.front = function () {
  if (this.length === 0) {
    //alert("ERROR:deque is empty");
    return null;
  } 
  return this.head.data;
};

/**
 * @method Deque.back
 * @description This method is used to get the element at the end of this deque.
 * @throws This method returns null if the deque is empty.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * var ret1 = dq.back(); // ret1 = 4
 * var ret2 = dq.back(); // ret2 = 3
 */
Deque.prototype.back = function () {
  if (this.length === 0) {
    //alert("ERROR:deque is empty");
    return null;
  } 
  return this.tail.data;
};

/**
 * @method Deque.begin
 * @description This method is used to get the iterator at the front of this deque.
 * @return {iterator} This method returns iterator at the front of this deque. 
 * @throws This method returns null if the deque is empty.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * var ret = dq.begin();
 */
Deque.prototype.begin = function () {
  if (this.length === 0) {
    //alert("ERROR:deque is empty");
    return null;
  } 
  return this.head;
};

/**
 * @method Deque.end
 * @description This method is used to get the iterator at the end of this deque.
 * @return {iterator} This method returns iterator at the end of this deque. 
 * @throws This method returns null if the deque is empty.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * var ret = dq.end();
 */
Deque.prototype.end = function () {
  if (this.length === 0) {
   //alert("ERROR:deque is empty");
    return null;
  } 
  return this.tail;
};

/**
 * @method Deque.isEmpty
 * @description This method is used to check if this deque is empty.
 * @returns {Boolean} This method returns ‘true’ if this deque is empty or ‘false’ if this deque is not empty.
 * @example 
 * var dq = new Deque ();
 * var ret1 = dq.isEmpty(); // ret1 = true;
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * var ret2 = dq.isEmpty(); // ret2 = false
 * */
Deque.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * @method Deque.size
 * @description This method is used to get the number of elements in this deque.
 * @returns {Number} This method returns the number of elements in this deque.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * var size = dq.size(); // ret = 4
 * */
Deque.prototype.size = function () {
  return this.length;
};

/**
 * @method Deque.at
 * @description This method is used to get the element from the specified position of this deque, but does not remove.
 * @param {Number} position - The position which want to get element from this deque.
 * @return {Undefined} This method returns the element from the specified position from this deque.
 * @throws This method returns null if the deque is empty, or –1 if the parameter is missing.
 * @example 
 * var dq = new Deque ();
 * dq.push_front(1);
 * dq.push_front(2);
 * dq.push_back(3);
 * dq.push_back(4);
 * var ret1 = dq.at(0); // ret1 = 2
 * var ret2 = dq.at(2); // ret2 = 3
 */
Deque.prototype.at = function (pos) {
  if (pos === undefined){
    //alert("ERROR::at() required parameter");
    return -1;
  }

  let getNode = new Node();
  let temp = Math.floor(this.length / 2);
  if (pos >= this.length || pos < 0) {
   // alert("ERROR : this position is empty");
    return null;
  } else if (temp >= pos) {  // find start at head
    getNode = this.head;
    for (let l = 0; l < pos; l++) {
      getNode = getNode.next;
    }
  } else {                  // find start at tail
    getNode = this.tail;
    for (let l = this.length - 1; l > pos; l--) {
      getNode = getNode.prev;
    }
  }
  return getNode.data;
};

export default Deque;
