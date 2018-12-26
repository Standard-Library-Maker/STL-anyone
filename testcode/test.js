let Stack = require("./libs/stack");
let Queue = require("./libs/queue");
let BubbleSort = require("./libs/[sort]bubble");
let List = require("./libs/list");
let LinkedList = require("./libs/linked_list");
let Heap = require("./libs/heap");
let PriorityQueue = require("./libs/priority_queue");


// Heap test case
let h = new Heap();
h.push(1);
h.push(2);
h.push(3);
h.push(4);
h.push(5);
h.push(6);
console.log(`pop : ${h.pop()}`);
h.state();


/* stack test case */
/* let s = new Stack();
s.push("hello world");
s.push("hello javascript");
s.pop();
s.state();
console.log(`pop : ${s.pop()}`);
console.log(`top : ${s.top()}`);
console.log(`size : ${s.size()}`);
s.state();
s.clear();
console.log("=== after clear ===");
s.state(); */

/* Queue test case */
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

/* list test case 
let newList = new List();
newList.append(2);
newList.append(5);
newList.append(1);
newList.toString();
const result = BubbleSort(newList.data);
console.log(result);
console.log(`length : ${newList.length()}`);
newList.insert(2, 7);
newList.toString();
console.log(`length : ${newList.length()}`);
newList.remove(2);
newList.toString();
newList.end();
console.log(`current position's element : ${newList.getElement()}`);
newList.clear();
console.log("after clear");
newList.toString();
*/

/* Linked_list test code */
let newList = new LinkedList();
newList.appendHead(2);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.appendTail(5);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.appendHead(1);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.insert(2, 7);
console.log(newList);
console.log(newList.find(1));
console.log(`length : ${newList.length}`);
newList.toString();
newList.remove();
newList.toString();
console.log(`size : ${newList.size()}`);
newList.appendTail(10);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.remove(2);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.remove(3);
newList.toString();
console.log(`size : ${newList.size()}`);

// Priority queue => test by Jisoo 
/*
console.log("\n=======test by Jisoo=======");
let testPriorityQueue = new PriorityQueue();
testPriorityQueue.empty();
testPriorityQueue.size();
testPriorityQueue.top();
testPriorityQueue.push(1);
testPriorityQueue.pop(); */