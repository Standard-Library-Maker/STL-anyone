let Stack = require("./libs/stack");
let Queue = require("./libs/queue");
let BubbleSort = require("./libs/[sort]bubble");
let List = require("./libs/list");
//let LinkedList = require("./libs/linked_list");
let Heap = require("./libs/heap");
let PriorityQueue = require("./libs/priority_queue");
let BinaryTree = require("./libs/binary_tree");
let BinarySearchTree = require("./libs/binary_search_tree");
let Deque = require("./libs/deque");
let HashMap = require("./libs/hash_map");


// Binary Tree test case
let b = new BinaryTree();
b.push(1);
b.push(2);
b.push(3);
b.push(4);
b.push(5);
b.push(6);
b.pop();
b.state();



/*
// Heap test case
let h = new Heap();
h.push(1);
h.push(3);
h.push(2);
h.push(5);
h.push(4);
let array = [1, 3, 2, 5, 4];
h.makeHeap(array);
//console.log(`pop : ${h.pop()}`);
h.state();
*/

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


// Priority queue => test by Jisoo
/* console.log("\n=======test by Jisoo=======");
let testPriorityQueue_1 = new PriorityQueue();
testPriorityQueue_1.push(3);
testPriorityQueue_1.push(5);
testPriorityQueue_1.push(1);
testPriorityQueue_1.push(8);
testPriorityQueue_1.push(4);
testPriorityQueue_1.push(12);
testPriorityQueue_1.push(2);
testPriorityQueue_1.testData();
testPriorityQueue_1.pop();
testPriorityQueue_1.pop();
testPriorityQueue_1.pop();
testPriorityQueue_1.pop();
testPriorityQueue_1.pop();
testPriorityQueue_1.pop();
testPriorityQueue_1.pop();
testPriorityQueue_1.testData();
let testPriorityQueue_2 = new PriorityQueue("greater");
testPriorityQueue_2.push(3);
testPriorityQueue_2.push(5);
testPriorityQueue_2.push(1);
testPriorityQueue_2.push(8);
testPriorityQueue_2.push(4);
testPriorityQueue_2.push(12);
testPriorityQueue_2.push(2);
testPriorityQueue_2.testData();
testPriorityQueue_2.pop();
testPriorityQueue_2.pop();
testPriorityQueue_2.pop();
testPriorityQueue_2.pop();
testPriorityQueue_2.pop();
testPriorityQueue_2.pop();
testPriorityQueue_2.pop();
testPriorityQueue_2.testData();
*/


// Deque => test by Jisoo
/* console.log("\n=======test by Jisoo=======");
let testDeque_1 = new Deque();
testDeque_1.push_back(1);
testDeque_1.push_front(2);
testDeque_1.push_front(3);
testDeque_1.push_front(4);
testDeque_1.push_back(0);
testDeque_1.push_front(5);
testDeque_1.push_front(6);
testDeque_1.push_front(7);
testDeque_1.push_front(8);
testDeque_1.push_front(9);
testDeque_1.push_front(10);
testDeque_1.push_front(11);
testDeque_1.pop_back();
testDeque_1.pop_front();
console.log(testDeque_1);
console.log("=========================");
testDeque_1.at(0);
testDeque_1.at(1);
testDeque_1.at(2);
testDeque_1.at(3);
testDeque_1.at(4);
testDeque_1.at(5);
testDeque_1.at(6);
testDeque_1.at(7);
testDeque_1.at(8);
testDeque_1.at(9);
testDeque_1.at(10);
console.log("=========================");
testDeque_1.erase(1);
testDeque_1.erase(4);
testDeque_1.erase(6);
testDeque_1.at(0);
testDeque_1.at(1);
testDeque_1.at(2);
testDeque_1.at(3);
testDeque_1.at(4);
testDeque_1.at(5);
testDeque_1.at(6);
console.log(testDeque_1);
console.log("=========================");
testDeque_1.clear();
console.log("=======AFTER CLEAR=======");
console.log(testDeque_1); */
