// C++ STL, 생활코딩 등 참고.
let Node = function(value) {
  this.data = value;
  this.next = null;
};

let LinkedList = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

// append on the front of the list
LinkedList.prototype.appendHead = function(value) {
  let node = new Node(value);
  node.next = this.head;
  this.head = node;
  if(this.tail === null) this.tail = node;
  this.length++;
};

// append on the last of the list
LinkedList.prototype.appendTail = function(value) {
  let node = new Node(value);
  let curNode;

  if(this.head === null) { // if head is null, make head to point new node.
    this.head = node;
    this.tail = node;
  } else { // else,
    curNode = this.tail;
    curNode.next = node;
    this.tail = node;
  }
  this.length++;
};

// find node that has the 'value'.
LinkedList.prototype.find = function(value) {
  let curNode = this.head;
  // let index = 1;
  while(curNode.data !== value) { // if it has value return node, else return null.
    curNode = curNode.next;
    // index++;
  }
  return curNode;
  // return index;
};

// the index of the list starts from 1 for normal user.
LinkedList.prototype.insert = function(pos, value) {
  if(pos > 0 && pos < this.length) {
    let curNode = this.head;
    let prevNode;
    for(let i = 1; i < pos; i++) {
      prevNode = curNode;
      curNode = curNode.next;
    }
    let newNode = new Node(value);
    newNode.next = curNode;
    prevNode.next = newNode;
    this.length++;
  } else if(pos === this.length) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  } else {
    console.log(`error. position should be in 0 < position < ${this.length}`);
    return -1;
  }
};


/* test code */
let newList = new LinkedList();
newList.appendHead(2);
console.log(`length : ${newList.length}`);
newList.appendTail(5);
console.log(`length : ${newList.length}`);
newList.appendHead(1);
// newList.toString();
console.log(`length : ${newList.length}`);
newList.insert(3, 7);
console.log(newList);
console.log(newList.find(1));
console.log(`length : ${newList.length}`);
// newList.remove(2);
newList.toString();
// newList.end();
// console.log(`current position's element : ${newList.getElement()}`);
// newList.clear();
// console.log("after clear");
// newList.toString(); 