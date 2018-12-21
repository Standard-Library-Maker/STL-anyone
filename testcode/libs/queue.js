// Array queue -> general array
function ArrQueue() {
  console.log("\n==================\nBasic Queue Create\n==================\n");
  let count = 0;
  let data = [];

  this.isEmpty = () => (count === 0);

  this.push = (value) => {
    data[count++] = value;
  };

  this.pop = () => {
    if(this.isEmpty()) console.log("Error. Queue is empty");
    else {
      let popedValue = data[0];
      for (let i = 0; i < count - 1; i++) {
        data[i] = data[i + 1];
      }
      data.splice(--count, 1);
      return popedValue;
    } 
  };
  
  this.front = () => {
    if(this.isEmpty()) console.log("Error. Queue is empty");
    else return data[0];
  };

  this.back = () => {
    if(this.isEmpty()) console.log("Error. Queue is empty");
    else return data[count - 1];
  };

  this.size = () => count;

  this.clear = () => {
    count = 0;
    data = [];
  };
  
  this.state = () => {
    console.log(`=== ${this.size()} items in the queue : [${data}] ===`);
  };
}

// Circular array queue
function CircularQueue(max) {
  console.log("\n======================\nCircular Queue Create\n======================\n");
  let qFront = 0;
  let qBack = 0;
  let data = [];
  const MAX_SIZE = max + 1;

  this.isFull = () => ((qBack + 1) % MAX_SIZE === qFront);
  this.isEmpty = () => (qBack === qFront);
  this.push = (value) => {
    if (this.isFull()) {
      console.log("Error! Queue is full");
    } else {
      qBack = (qBack + 1) % MAX_SIZE;
      data[qBack] = value;
    }
  };

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

  this.front = () => {
    if (this.isEmpty()) console.log("Error! Queue is empty");
    else return data[(qFront + 1) % MAX_SIZE];
  };

  this.back = () => {
    if (this.isEmpty()) console.log("Error! Queue is empty");
    else return data[qBack];
  };

  this.size = () => {
    if (this.isFull()) return MAX_SIZE - 1;
    return qBack - qFront;
  };

  this.clear = () => {
    qFront = 0;
    qBack = 0;
    data = [];
  };
  
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

