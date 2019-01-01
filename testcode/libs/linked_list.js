// C++ STL, 생활코딩 등 참고.. append 함수 변경 예정.
const Node = function(value) {
  this.data = value;
  this.next = null;
};

const LinkedList = function() {
  console.log("\n==================\nLinked List Create\n==================\n");
  this.length = 0;
  this.head = null;
  // this.tail = null; // 삭제해도 될듯?
};

// find node that has the 'value'.
LinkedList.prototype.find = function(value) {
  let curNode = this.head;
  while(curNode) { // if it has value return node, else return null.
    if(curNode.data === value) return true;
    curNode = curNode.next;
  }
  return false;
};

// find node in the linked list in the index of pos
LinkedList.prototype.getNode = function(pos) {
  if (pos < 0 || pos > this.length || this.length === 0) return -1;
  
  let curNode = this.head;
  for(let i = 0; i < pos; i++) {
    curNode = curNode.next;
  }
  return curNode;
};

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

// append value at the end of linked list
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

// insert value at the position of double linked list
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

// remove node by value from the linked list
LinkedList.prototype.remove = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

// remove node by position from the linked list
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


LinkedList.prototype.size = function() {
  return this.length;
};

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

LinkedList.prototype.isEmpty = function() {
  return this.head === null && this.length === 0;
};

module.exports = LinkedList;

/* test code */
let newList = new LinkedList();
newList.append(2);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.append(5);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.append(1);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.insert(2, 7);
console.log(newList);
console.log(`find(1) : ${newList.find(1)}`);
newList.toString();
console.log(`size : ${newList.size()}\n`);

console.log(`remove(7) : ${newList.remove(7)}`);
newList.toString();
console.log(`size : ${newList.size()}\n`);

newList.append(10);
newList.toString();
console.log(`size : ${newList.size()}\n`);

console.log(`remove(2) : ${newList.remove(2)}`);
newList.toString();
console.log(`size : ${newList.size()}\n`);

console.log(`remove(2) : ${newList.remove(3)}`);
newList.toString();
console.log(`size : ${newList.size()}\n`);


// newList.end();
// console.log(`current position's element : ${newList.getElement()}`);
// newList.clear();
// console.log("after clear");
// newList.toString(); 