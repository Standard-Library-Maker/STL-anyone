//Deque implemented by Jisoo
let Node = function (value) {
  this.data = value;
  this.prev = undefined;
  this.next = undefined;
};

const Deque = function () {
  this.length = 0;
  this.head = undefined;
  this.tail = undefined;
};

// deque::push_front()
Deque.prototype.push_front = function (value) {
  let newNode = new Node(value);  // make newNode

  if (this.length !== 0) {  // if deque isn't empty
    this.head.prev = newNode
  }
  newNode.next = this.head;
  this.head = newNode;

  if (this.head.next === undefined) {
    this.tail = this.head;
  }
  this.length++;
};

// deque::push_back()
Deque.prototype.push_back = function (value) {
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

// deque::pop_front()
Deque.prototype.pop_front = function () {
  let popNode = new Node();
  popNode = this.head;
  this.head = this.head.next;
  if (this.head !== undefined) {
    this.head.prev = undefined;
  }
  popNode = undefined;
  this.length--;
};

// deque::pop_back()
Deque.prototype.pop_back = function () {
  let popNode = new Node();
  popNode = this.tail;
  this.tail = this.tail.prev;
  if (this.tail !== undefined) {
    this.tail.next = undefined;
  }
  popNode = undefined;
  this.length--;
};

// deque::erase()
Deque.prototype.erase = function (pos) {
  if (pos === 0) { // remove head value
    this.pop_front();
  } else if (pos === this.length - 1) { // remove tail value
    this.pop_back();
  } else {
    let eraseNode = new Node();
    let getNode = new Node();
    let temp = Math.floor(this.length / 2);
    if (pos >= this.length || pos < 0) {
      console.log("ERROR : this position is empty");
      return undefined;
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
    eraseNode = undefined;
    this.length--;
  }
};

// deque::front()
Deque.prototype.front = function () {
  //console.log(this.head.data);
  return this.head.data;
};

// deque::back()
Deque.prototype.back = function () {
  //console.log(this.tail.data);
  return this.tail.data;
};
0
// deque::begin()
Deque.prototype.begin = function () {
  //console.log(this.head);
  return this.head;
};

// deque::end()
Deque.prototype.end = function () {
  //console.log(this.tail);
  return this.tail;
};

// deque::isEmpty()
Deque.prototype.isEmpty = function () {
  //console.log(this.length === 0);
  return this.length === 0;
};

// deque::size()
Deque.prototype.size = function () {
  //console.log(this.length);
  return this.length;
};

// deque::at()
Deque.prototype.at = function (pos) {
  let getNode = new Node();
  let temp = Math.floor(this.length / 2);
  if (pos >= this.length || pos < 0) {
    console.log("ERROR : this position is empty");
    return undefined;
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
  console.log("position(" + pos + ") : " + getNode.data);
  return getNode.data;
};

// deque::clear()
Deque.prototype.clear = function () {
  this.length = 0;
  this.head.data = undefined;
  this.head.next = undefined;
  this.tail.data = undefined;
  this.tail.prev = undefined;
  this.head = undefined;
  this.tail = undefined;
};

module.exports = Deque;