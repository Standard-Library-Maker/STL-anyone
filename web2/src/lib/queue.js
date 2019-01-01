// Array queue -> general array
const ArrQueue = function() {
  this.count = 0;
  this.data = [];
  document.writeln(`<br>★★★ Array Queue example ★★★<br>=================================<br>`);
};

ArrQueue.prototype.push = function(value) {
  this.data[this.count++] = value;
  this.show('push');
};

ArrQueue.prototype.pop = function() {
  if(this.isEmpty()) console.log("Error. Queue is empty");
  else {
    let popedValue = this.data[0];
    for (let i = 0; i < this.count - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data.splice(--this.count, 1);
    this.show('pop');
    return popedValue;
  } 
};
  
ArrQueue.prototype.front = function() {
  if(this.isEmpty()) console.log("Error. Queue is empty");
  else return this.data[0];
};

ArrQueue.prototype.back = function() {
  if(this.isEmpty()) console.log("Error. Queue is empty");
  else return this.data[this.count - 1];
};

ArrQueue.prototype.size = function() { return this.count; }

ArrQueue.prototype.isEmpty = function() { return this.count === 0; }

ArrQueue.prototype.clear = function() {
  this.count = 0;
  this.data = [];
  document.writeln(`=== after clear ===<br>`);
  this.show(false);
};
  
ArrQueue.prototype.state = function() {
  console.log(`=== ${this.size()} items in the queue : [${this.data}] ===`);
};

ArrQueue.prototype.show = function(value) {
  if(value === false){
    document.writeln('empty, nothing in the queue' + `<br>`);
  } else {
    document.writeln(`function(${value}) --> data : [${this.data}] <br>`);
    document.writeln(` ↓ <br>`);
  }
};

///////////////////////////////////////////////////////////////
// Circular array queue
const CircularQueue = function (max) {
  this.qFront = 0;
  this.qBack = 0;
  this.data = [];
  this.MAX_SIZE = max + 1;
  document.writeln(`<br>★★★ Circular Queue example ★★★<br>=================================<br>`);
};

CircularQueue.prototype.isFull = function() {
  ((this.qBack + 1) % this.MAX_SIZE === this.qFront);
};
CircularQueue.prototype.isEmpty = function() {
  (this.qBack === this.qFront);
};

CircularQueue.prototype.push = function(value) {
  if (this.isFull()) {
    console.log("Error! Queue is full");
  } else {
    this.qBack = (this.qBack + 1) % this.MAX_SIZE;
    this.data[this.qBack] = value;
    this.show('push');
  }
};

CircularQueue.prototype.pop = function() {
  if (this.isEmpty()) {
    console.log("Error! Queue is empty");
  } else {
    this.qFront = (this.qFront + 1) % this.MAX_SIZE;
    let popedValue = this.data[this.qFront];
    // data.splice(qFront, 1); reduces MAX_SIZE
    delete this.data[this.qFront];
    this.show('pop');
    return popedValue;
  }
};

CircularQueue.prototype.front = function() {
  if (this.isEmpty()) console.log("Error! Queue is empty");
  else return this.data[(this.qFront + 1) % this.MAX_SIZE];
};

CircularQueue.prototype.back = function() {
  if (this.isEmpty()) console.log("Error! Queue is empty");
  else return this.data[this.qBack];
};

CircularQueue.prototype.size = function() {
  if (this.isFull()) return this.MAX_SIZE - 1;
  return this.qBack - this.qFront;
};

CircularQueue.prototype.clear = function() {
  this.qFront = 0;
  this.qBack = 0;
  this.data = [];
  document.writeln(`=== after clear ===<br>`);
  this.show(false);
};
  
CircularQueue.prototype.state = function() {
  console.log(`=== ${this.size()} items in the queue : [${this.data}] ===`);
};

CircularQueue.prototype.show = function(value) {
  if(value === false){
    document.writeln('empty, nothing in the queue' + `<br>`);
  } else {
    document.writeln(`function(${value}) --> data : [${this.data}] <br>`);
    document.writeln(` ↓ <br>`);
  }
};


///////////////////////////////////////////////////////////////
// Linked list queue -> will be implemented after implementing ll
function LlQueue() {
  let data = [];
  let head = 0;
  let tail = 0;
}

const Queue = {
  ArrQueue,
  CircularQueue,
  LlQueue
};

export default Queue