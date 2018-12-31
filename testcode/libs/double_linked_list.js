// C++ STL, 생활코딩 등 참고.. append 함수 변경 예정.
// https://boycoding.tistory.com 참고.
let Node = function(value) {
  this.data = value;
  this.next = null;
  this.prev = null;
};

const DoubleLinkedList = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

// return index of value in the double linked list 
DoubleLinkedList.prototype.indexOf = function(value) {
  let curNode = this.head;
  let index = 0;

  while(curNode) {
    if(curNode.data === value) return index;
    index++;
    curNode = curNode.next;
  }
  return -1;
};

// append value at the end of double linked list
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

// insert value at the position of double linked list
DoubleLinkedList.prototype.insert = function(pos, value) {
  if(pos > 0 && pos < this.length) {
    let curNode = null;
    let prevNode = null;
    
    if(pos < this.length/2) { // from head to pos
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

    } else if(pos >= this.length/2) { // from tail to pos
      curNode = this.tail;
      for(let i = this.length; i > pos; i--){
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
    console.log(`error. position should be in 0 < position < ${this.length}`);
    return -1;
  }
}

// remove node by value from the double linked list
DoubleLinkedList.prototype.remove = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

// remove node by position from the double linked list
// removeAt에 pos가 length/2 뒤인지 앞인지 경우 나눠야함. (추가예정)
DoubleLinkedList.prototype.removeAt = function(pos) {
  if(pos < 0 || pos > this.length || this.length === 0) return null;
  if(pos === 0) {
    let temp = this.head;
    // delete this.head;
    this.head = this.head.next;
    this.head.prev = null;
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


LinkedList.prototype.size = function() {
  return this.length;
};

LinkedList.prototype.toString = function() {
  console.log("========double linked list========");
  let curNode = this.head;
  while(curNode !== null) {
    console.log(curNode.data);
    curNode = curNode.next;
  }
};

LinkedList.prototype.isEmpty = function() {
  if(this.head === null && this.length === 0) return true;
  return false;
};


/* test code */
let newList = new DoubleLinkedList();
newList.append(1);
newList.append(8);
newList.append(5);
console.log(newList);
console.log(`remove : ${newList.removeAt(1)}`);
console.log(newList);
console.log(`remove : ${newList.remove(6)}`);
