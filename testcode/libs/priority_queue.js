const swapData = require("./swap");

// Priority Queue implemented by Jisoo
const PriorityQueue = function (value) {
  this.data = [];                                         // array position will be starts 0
  this.count = 0;
  if (value === "greater") {                               // based on Min_Heap
    this.mode = "min_heap";
  } else if (value === "less" || value === undefined) {     // DEFAULT : based on Max_Heap

    this.mode = "max_heap";
  } else {
    console.log("ERROR:input sort criteria (option:greater,less)");
  }
};

// priority_queue::isEmpty()
PriorityQueue.prototype.isEmpty = function () {
  return this.count === 0;
};

// priority_queue::size()
PriorityQueue.prototype.size = function () {
  return this.count;
};

// priority_queue::top()
PriorityQueue.prototype.top = function () {
  if (this.count > 0) {
    return this.data[1];
  }
  console.log("ERROR:priority queue is empty");
  return undefined;
};

// priority_queue::push(value)
PriorityQueue.prototype.push = function (value) {
  if (value === undefined) {
    console.log("ERROR:push() required parameter");
  }

  this.count++;
  this.data[this.count] = value; // insert value into the last location
  if (this.count !== 1) {              // need to compare value with parent
    let posOfValue = this.count;
    let posOfParent = Math.floor((posOfValue - 1) / 2);
    if (this.mode === "max_heap") {  // mode : less(default)
      this.maxHeap(posOfValue, posOfParent);
    } else {                        // mode : greater
      this.minHeap(posOfValue, posOfParent);
    }
  }

};

PriorityQueue.prototype.maxHeap = function (posOfValue, posOfParent) {
  while (posOfValue > 0) {
    if (this.data[posOfParent] < this.data[posOfValue]) {
      this.swapData(this.data, posOfValue, posOfParent);
      posOfValue = posOfParent;
      posOfParent = Math.floor((posOfValue - 1) / 2);
    }
    else {
      break;
    }
  }
};

PriorityQueue.prototype.minHeap = function (posOfValue, posOfParent) {
  while (posOfValue > 0) {
    if (this.data[posOfParent] > this.data[posOfValue]) {
      this.swapData(this.data, posOfValue, posOfParent);
      posOfValue = posOfParent;
      posOfParent = Math.floor((posOfValue - 1) / 2);
    }
    else {
      break;
    }
  }
};

// priority_queue::pop()
PriorityQueue.prototype.pop = function () {
  if (this.isEmpty()) {
    console.log("ERROR:priority queue is empty");
  } else {
    let posOfRoot = 0;
    let posOfLeftChild = posOfRoot * 2 + 1;
    let posOfRightChild = posOfRoot * 2 + 2;
    this.data[posOfRoot] = this.data[this.count];  // remove top data && move last element to top position
    this.count--;

  /* while (posOfRoot < this.count) {
      let posOfChange = 0;
      if (posOfRightChild < this.count) {
          if (this.data[posOfLeftChild] < this.data[posOfRightChild]) {
              posOfChange = posOfRightChild;
          } else {
              posOfChange = posOfLeftChild;
          }
      } else {
          posOfChange = posOfLeftChild;
      }
      if (this.data[posOfChange] > this.data[posOfRoot]) {
          this.swapData(this.data, posOfChange, posOfRoot);
          posOfRoot = posOfChange;
          this.testData();
          let posOfLeftChild = posOfRoot * 2 + 1;
          let posOfRightChild = posOfRoot * 2 + 2;
      }
      else {
          break;
      }
  } */
  }
};


// priority_queue::swap() (C++ 11 supports this method)
PriorityQueue.prototype.swap = function () {
};

// priority_queue::emplace (C++ 11 supports this method)
PriorityQueue.prototype.emplace = function () {
};

// /////////////////////////////////////////////////////////////////////////
PriorityQueue.prototype.testData = function () {
  for (let i = 1; i <= this.count; i++) {
    console.log(this.data[i]);
  }
  console.log();
  console.log(`test isEmpty() // count:${this.count}`);
  console.log(`test size() // size:${this.count}`);
  console.log(`test top() // top:${this.data[0]}`);
};

PriorityQueue.prototype.swapData = function (posOfValue, posOfParent) {
  let tmp = this.data[posOfValue];
  this.data[posOfValue] = this.data[posOfParent];
  this.data[posOfParent] = tmp;
};

module.exports = PriorityQueue;