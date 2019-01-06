// C++ STL, 생활코딩 등 참고.. append 함수 변경 예정.
// https://boycoding.tistory.com 참고.
const Node = function(value) {
  this.data = value;
  this.next = null;
  this.prev = null;
};

/**
 * @Class DoubleLinkedList
 * @classdesc 다음노드에 대한 참조 뿐만 아니라, 이전 노드의 참조도 함께 가리키는 자료구조이다.
 * @example 
 * var dl = new DoubleLinkedList ();
 * @author yicho93@gmail.com
 */
const DoubleLinkedList = function() {
  console.log("\n==========================\nDouble Linked List Create\n==========================\n");
  this.length = 0;
  this.head = null;
  this.tail = null;
};

/**
 * @method DoubleLinkedList.indexOf
 * @description This method is used to get the index of value from this double Linked list, but does not remove.
 * @param {undefined} value - The value which want to get index from this double Linked list.
 * @return {Number} This method returns index of the specified value.
 * @thorws This method returns null if this double Linked list doens't have the specified value.
 * @example 
 * var dl = new DoubleLinkedList ();
 * dl.append(1);
 * dl.append(2);
 * dl.append(3);
 * var ret = dl.index(2); // ret = 1
 */
DoubleLinkedList.prototype.indexOf = function(value) {
  let curNode = this.head;
  let index = 0;

  while(curNode) {
    if(curNode.data === value) return index;
    index++;
    curNode = curNode.next;
  }
  return null;
};

/**
 * @method LinkedList.append
 * @description This method is used to append value at the end of double Linked list.
 * @param {undefined} value - The value to be appended to this double Linked list.
 * @example 
 * var dl = new DoubleLinkedList ();
 * dl.append(1);
 * dl.append(2);
 * dl.append(3);
 */
DoubleLinkedList.prototype.append = function(value) {
  let node = new Node(value);
  let curNode = null;

  if(this.head === null) {
    this.head = node;
  } else {
    curNode = this.head;
    while(curNode.next) curNode = curNode.next;
    curNode.next = node;
    node.prev = curNode;
  }
  this.tail = node;
  this.length++;
};

/**
 * @method DoubleLinkedList.insert
 * @description This method is used to insert value at the specified position of double Linked list.
 * @param {Number} pos - The position to be appended value in this double Linked list.
 * @param {undefined} value - The value to be appended to this double Linked list.
 * @throws This method returns 'false' if the specified position is not available.
 * @example 
 * var dl = new DoubleLinkedList ();
 * dl.append(1);
 * dl.append(3);
 * dl.insert(2,1);
 */
DoubleLinkedList.prototype.insert = function(pos, value) {
  if(pos > 0 && pos < this.length) {
    let curNode = null;
    let prevNode = null;
    
    if(pos < this.length / 2) { // from head to pos
      curNode = this.head;
      for(let i = 0; i < pos; i++) {
        prevNode = curNode;
        curNode = curNode.next;
      }

      let newNode = new Node(value);
      newNode.prev = prevNode;
      newNode.next = curNode;
      prevNode.next = newNode;
      curNode.prev = newNode;
      if(pos === 0) this.head = newNode;

    } else if(pos >= this.length / 2) { // from tail to pos
      curNode = this.tail;
      for(let i = this.length; i > pos; i--) {
        prevNode = curNode;
        curNode = curNode.prev;
      }

      let newNode = new Node(value);
      newNode.next = prevNode;
      newNode.prev = curNode;
      prevNode.prev = newNode;
      curNode.next = newNode;
    }

    this.length++;
  } else {
    console.log(`insert error. position should be in 0 < position < ${this.length}`);
    return false;
  }
};

/**
 * @method DoubleLinkedList.remove
 * @description This method is used to remove the specified value from this double Linked list.
 * @param {undefined} value -  The value to be removed to this double linked list.
 * @throws This method returns null if the value of the specified position in this double Linked list is empty.
 * @example 
 * var dl = new DoubleLinkedList ();
 * dl.append(1);
 * dl.append(3);
 * dl.remove(1); // 1 will be removed.
 */
DoubleLinkedList.prototype.remove = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

/**
 * @method DoubleLinkedList.removeAt
 * @description This method is used to remove the value of specified position from this double Linked list.
 * @throws This method returns null if the value of the specified position in this double Linked list is empty.
 * @example 
 * var dl = new DoubleLinkedList ();
 * dl.append(1);
 * dl.append(3);
 * dl.removeAt(0); // 1 will be removed.
 */
// removeAt에 pos가 length/2 뒤인지 앞인지 경우 나눠야함. (추가예정)
DoubleLinkedList.prototype.removeAt = function(pos) {
  if(pos < 0 || pos > this.length || this.length === 0) return null;
  if(pos === 0) {
    let temp = this.head;
    // delete this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return temp.data;
  }

  let index = 0;
  let curNode = this.head;
  while(curNode) {
    if(index === pos) {
      let prevNode = curNode.prev; // 이전 노드.
      prevNode.next = curNode.next; // 이전 노드의 next를 다음 노드와 연결.
      curNode.next.prev = prevNode; // 다음 노드의 prev를 이전 노드와 연결.
      this.length--;
      return curNode.data;
    }
    index++;
    curNode = curNode.next;
  }
  return null;
};

/**
 * @method DoubleLinkedList.size
 * @description This method is used to get the number of values in this double Linked list.
 * @returns {Number} This method returns the number of values in this double Linked list.
 * @example 
 * var dl = new DoubleLinkedList ();
 * dl.append(1);
 * dl.append(3);
 * var size = dl.size(); // ret = 2
 * */
DoubleLinkedList.prototype.size = function() {
  return this.length;
};

/**
 * @method DoubleLinkedList.toString
 * @description This method is used to get values of this double Linked list.
 * @returns {String} This method returns the String which has value of this double Linked list.
 * @example 
 * var dl = new DoubleLinkedList ();
 * dl.append(1);
 * dl.append(3);
 * var v = dl.toString(); // v = 1, 3
 * */
DoubleLinkedList.prototype.toString = function() {
  console.log("========double linked list========");
  let curNode = this.head;
  let inList = "In list : ";
  while(curNode !== null) {
    inList += `${curNode.data}, `;
    curNode = curNode.next;
  }
  console.log(inList);
  return inList;
};

/**
 * @method DoubleLinkedList.isEmpty
 * @description This method is used to check if this double Linked list is empty.
 * @returns {Boolean} This method returns ‘true’ if this double Linked list is empty or ‘false’ if this double Linked list is not empty.
 * @example 
 * var dl = new DoubleLinkedList ();
 * var ret1 = dl.isEmpty(); // ret1 = true;
 * dl.append(1);
 * dl.append(3);
 * var ret2 = dl.isEmpty(); // ret2 = false
 * */
DoubleLinkedList.prototype.isEmpty = function() {
  return this.head === null && this.length === 0;
};

export default DoubleLinkedList;