// C++ STL, 생활코딩 등 참고.. append 함수 변경 예정.
const Node = function(value) {
  this.data = value;
  this.next = null;
};

/**
 * @Class LinkedList
 * @classdesc 다음노드에 대한 참조만을 가진 가장 단순한 형태의 연결리스트이다.
 * @example 
 * var ll = new LinkedList ();
 * @author yicho93@gmail.com
 */
const LinkedList = function() {
  console.log("\n==================\nLinked List Create\n==================\n");
  this.length = 0;
  this.head = null;
  // this.tail = null; // 삭제해도 될듯?
};

/**
 * @method LinkedList.find
 * @description This method is used to find node that has value in this Linked list.
 * @param {undefined} value - The position which want to get element from Linked list.
 * @return {Boolean} This method returns ‘true’ if this Linked list has value or ‘false’ if this Linked list doesn't have value.
 * @example 
 * var ll = new LinkedList ();
 * var ret1 = ll.find(1); // ret1 = false
 * ll.append(1);
 * ll.append(2);
 * var ret2 = ll.find(1); // ret2 = false
 */
LinkedList.prototype.find = function(value) {
  let curNode = this.head;
  while(curNode) { // if it has value return node, else return null.
    if(curNode.data === value) return true;
    curNode = curNode.next;
  }
  return false;
};

/**
 * @method LinkedList.getNode
 * @description This method is used to find node in the Linked list in the index of position.
 * @param {Number} position - The position which want to get node from this Linked list.
 * @return {Node} This method returns the node from the specified position from this Linked list.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(2);
 * ll.append(3);
 * Node node = ll.getNode(1); 
 */
LinkedList.prototype.getNode = function(pos) {
  if (pos < 0 || pos > this.length || this.length === 0) return -1;
  
  let curNode = this.head;
  for(let i = 0; i < pos; i++) {
    curNode = curNode.next;
  }
  return curNode;
};

/**
 * @method LinkedList.at
 * @description This method is used to get the index of value from this Linked list, but does not remove.
 * @param {undefined} value - The value which want to get index from this Linked list.
 * @return {Boolean} This method returns ‘true’ if this Linked list has value or ‘false’ if this Linked list doesn't have value.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(2);
 * ll.append(3);
 * var ret = ll.index(2); // ret = 1
 */
// return index of value in the linked list 
LinkedList.prototype.indexOf = function(value) {
  let curNode = this.head;
  let index = 0;

  while(curNode) {
    if(curNode.data === value) return index;
    index++;
    curNode = curNode.next;
  }
  return -1;
};

/**
 * @method LinkedList.append
 * @description This method is used to append value at the end of linked list.
 * @param {undefined} value - The element to be appended to this linked list.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(2);
 * ll.append(3);
 */
LinkedList.prototype.append = function(value) {
  let node = new Node(value);
  let curNode = null;

  if(this.head === null) {
    this.head = node;
  } else {
    curNode = this.head;
    while(curNode.next) curNode = curNode.next;
    curNode.next = node;
  }
  // this.tail = node;
  this.length++;
};

/**
 * @method LinkedList.insert
 * @description This method is used to insert value at the specified position of linked list.
 * @param {undefined} value - The element to be appended to this linked list.
 * @param {Number} pos - The position to be appended value in this linked list.
 * @throws This method returns –1 if cannot insert value at the specified position in this Linked list.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(3);
 * ll.insert(2,1);
 */
LinkedList.prototype.insert = function(pos, value) {
  if(pos > 0 && pos < this.length) {
    let curNode = this.head; // 0
    let prevNode;
    for(let i = 0; i < pos; i++) {
      prevNode = curNode;
      curNode = curNode.next;
    }
    let newNode = new Node(value);
    newNode.next = curNode;
    prevNode.next = newNode;
    this.length++;
  } else {
    console.log(`insert error. position should be in 0 < position < ${this.length}`);
    return -1;
  }
};

/**
 * @method LinkedList.remove
 * @description This method is used to remove the specified value from this Linked list.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(3);
 * ll.remove(1); // 1 will be removed.
 */
// remove node by value from the linked list
LinkedList.prototype.remove = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

/**
 * @method LinkedList.removeAt
 * @description This method is used to remove the value of specified position from this Linked list.
 * @throws This method returns null if the value of the specified position in this Linked list is empty.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(3);
 * ll.removeAt(0); // 1 will be removed.
 */
// removeAt에 pos가 length/2 뒤인지 앞인지 경우 나눠야함. (추가예정)
LinkedList.prototype.removeAt = function(pos) {
  if(pos < 0 || pos > this.length || this.length === 0) return null;
  if(pos === 0) {
    let temp = this.head;
    // delete this.head;
    this.head = this.head.next;
    this.length--;
    return temp.data;
  }

  let index = 0;
  let curNode = this.head;
  let prevNode = null;
  while(curNode) {
    if(index === pos) {
      prevNode.next = curNode.next; // 이전 노드의 next를 다음 노드와 연결.
      // let temp = curNode;
      // delete curNode;
      this.length--;
      return curNode.data;
    }
    index++;
    prevNode = curNode;
    curNode = curNode.next;
  }
  return null;
};

/**
 * @method LinkedList.size
 * @description This method is used to get the number of elements in this Linked list.
 * @returns {Number} This method returns the number of elements in this Linked list.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(3);
 * var size = ll.size(); // ret = 2
 * */
LinkedList.prototype.size = function() {
  return this.length;
};

/**
 * @method LinkedList.toString
 * @description This method is used to get values of this Linked list.
 * @returns {String} This method returns the String which has value of this Linked list.
 * @example 
 * var ll = new LinkedList ();
 * ll.append(1);
 * ll.append(3);
 * var v = ll.toString(); // v = 1, 3
 * */
LinkedList.prototype.toString = function() {
  console.log("========linked list========");
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
 * @method LinkedList.isEmpty
 * @description This method is used to check if this Linked list is empty.
 * @returns {Boolean} This method returns ‘true’ if this Linked list is empty or ‘false’ if this Linked list is not empty.
 * @example 
 * var ll = new LinkedList ();
 * var ret1 = ll.isEmpty(); // ret1 = true;
 * ll.append(1);
 * ll.append(3);
 * var ret2 = ll.isEmpty(); // ret2 = false
 * */
LinkedList.prototype.isEmpty = function() {
  return this.head === null && this.length === 0;
};

export default LinkedList;
