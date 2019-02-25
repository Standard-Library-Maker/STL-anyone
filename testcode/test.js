// let Queue= require("./libs/queue");
let Stack = require("./libs/stack");
let Queue = require("./libs/queue");
let PriorityQueue = require("./libs/priority_queue");
let Deque = require("./libs/deque");
let List = require("./libs/list");
let LinkedList = require("./libs/linked_list");
let DoubleLinkedList = require("./libs/double_linked_list");
let BinaryTree = require("./libs/binary_tree");
let BinarySearchTree = require("./libs/binary_search_tree");
let Heap = require("./libs/heap");
let HashMap = require("./libs/hash_map");

let BubbleSort = require("./libs/[sort]bubble");

let userInput = process.argv;
let errMsg = 'Please try : \'node test.js \' + {\'stack\',\'queue1\',\'queue2\',\'pq\',\'deque\',\'list\',\'ll\',\'dll\'}';
let exMsg = 'example : node test.js dll';
// console.log(userInput);
switch (userInput[2]) {
  case "stack": newStack();
    break;
  case "queue1": newArrQueue();
    break;
  case "queue2": newCircularQueue();
    break;
  case "pq": newPriorityQueue();
    break;
  case "deque": newDeque();
    break;
  case "list": newList();
    break;
  case "ll": newLinkedList();
    break;
  case "hashmap": newHashMap();
    break;
  case "dll": newDoubleLinkedList();
    break;
  default: console.log(`user input : '${userInput[2]}' doesn't exist\n${errMsg}\n${exMsg}`);
    break;
}

/** Stack */
function newStack() {
  console.log("\n=======Stack=======");
  let s = new Stack();
  s.push("hello world");
  s.push("hello javascript");
  s.push("hello stack");
  s.state();
  console.log(`pop : ${s.pop()}`);
  s.state();
  console.log(`pop : ${s.pop()}`);
  console.log(`top : ${s.top()}`);
  console.log(`size : ${s.size()}`);
  s.state();
  s.clear();
  console.log("=== after clear ===");
  s.state();
}

/** ArrQueue */
function newArrQueue() {
  console.log("\n=======ArrQueue=======");
  let s1 = new Queue.ArrQueue();
  s1.push("hello world");
  s1.push("hello javascript");
  s1.push("this is queue");
  s1.toString();
  console.log(`front : ${s1.front()}`);
  console.log(`back : ${s1.back()}`);
  console.log(`size : ${s1.size()}`);

  console.log(`pop : ${s1.pop()}`);
  s1.toString();
  console.log(`front : ${s1.front()}`);
  console.log(`back : ${s1.back()}`);
  console.log(`size : ${s1.size()}`);
  s1.clear();
  console.log("=== after clear() ===");
  s1.toString();
}

/** Circular Queue */
function newCircularQueue() {
  console.log("\n=======Circular Queue =======");
  let s2 = new Queue.CircularQueue(10);
  s2.push("hello world");
  s2.push("hello javascript");
  s2.push("this is circular queue");

  s2.toString();
  console.log(`[isFull] ? ${s2.isFull()}`);
  console.log(`front : ${s2.front()}`);
  console.log(`back : ${s2.back()}`);
  console.log(`size : ${s2.size()}`);

  console.log(`pop : ${s2.pop()}`);
  s2.toString();
  console.log(`[isFull] is full? ${s2.isFull()}`);
  console.log(`front : ${s2.front()}`);
  console.log(`back : ${s2.back()}`);
  console.log(`size : ${s2.size()}`);

  console.log(`pop : ${s2.pop()}`);
  s2.toString();
  console.log(`front : ${s2.front()}`);
  console.log(`back : ${s2.back()}`);
  console.log(`size : ${s2.size()}`);
  console.log(`[isEmpty] is empty? ${s2.isEmpty()}`);

  s2.clear();
  console.log("=== after clear() ===");
  s2.toString();
  console.log(`[isEmpty] is empty? ${s2.isEmpty()}`);
}

/** Priority Queue */
function newPriorityQueue() {
  console.log("\n=======Priority Queue Test1=======");
  let testPriorityQueue1 = new PriorityQueue();
  testPriorityQueue1.push();
  testPriorityQueue1.push(1);
  testPriorityQueue1.push(2);
  testPriorityQueue1.push(3);
  testPriorityQueue1.push(8);
  testPriorityQueue1.push(4);
  testPriorityQueue1.push(12);
  testPriorityQueue1.testData();
  testPriorityQueue1.pop();
  testPriorityQueue1.pop();
  testPriorityQueue1.pop();
  testPriorityQueue1.pop();
  testPriorityQueue1.pop();
  testPriorityQueue1.pop();
  testPriorityQueue1.testData();
  console.log("\n=======Priority Queue Test2=======");
  let testPriorityQueue2 = new PriorityQueue("greater");
  testPriorityQueue2.push(3);
  testPriorityQueue2.push(5);
  testPriorityQueue2.push(1);
  testPriorityQueue2.push(8);
  testPriorityQueue2.push(4);
  testPriorityQueue2.push(12);
  testPriorityQueue2.push(2);
  testPriorityQueue2.testData();
  testPriorityQueue2.pop();
  testPriorityQueue2.pop();
  testPriorityQueue2.pop();
  testPriorityQueue2.pop();
  testPriorityQueue2.pop();
  testPriorityQueue2.pop();
  testPriorityQueue2.pop();
  testPriorityQueue2.testData();
}

/** Deque */
function newDeque() {
  console.log("\n=======Deque=======");
  let testDeque1 = new Deque();
  testDeque1.push_back(3);
  testDeque1.push_front(2);
  testDeque1.push_front(1);
  testDeque1.push_front(0);
  testDeque1.push_back(4);
  testDeque1.push_back(5);
  console.log(testDeque1);
  testDeque1.at(0);
  testDeque1.at(1);
  testDeque1.at(2);
  testDeque1.at(3);
  testDeque1.at(4);
  testDeque1.at(5);
  testDeque1.at(6);
  console.log(testDeque1);
  testDeque1.erase(1);
  testDeque1.at(0);
  testDeque1.at(1);
  testDeque1.at(2);
  testDeque1.at(3);
  testDeque1.at(4);
  testDeque1.at(5);
  testDeque1.at(6);
  console.log(testDeque1);
  testDeque1.clear();
  console.log(testDeque1);
}

/** List */
function newList() {
  console.log("\n=======List=======");
  let newList = new List();
  newList.append(2);
  newList.append(5);
  newList.append(1);
  newList.toString();
  console.log(`size : ${newList.size()}`);
  newList.insert(2, 7);
  newList.toString();
  console.log(`size : ${newList.size()}`);
  newList.remove(2);
  newList.toString();
  newList.end();
  console.log(`current position's element : ${newList.getElement()}`);
  newList.clear();
  console.log("after clear");
  newList.toString();
}

/** Linked List */
function newLinkedList() {
  console.log("\n=======Linked List=======");
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
}

/** Double Linked List */
function newDoubleLinkedList() {
  console.log("\n=======Double Linked List=======");
  let newList = new DoubleLinkedList();
  newList.append(1);
  newList.append(8);
  newList.append(5);
  console.log(newList);
  console.log(`removeAt(1) : ${newList.removeAt(1)}`);
  console.log(newList);
  console.log(`remove(6) : ${newList.remove(6)}`);
  newList.insert(1, 9);
  newList.toString();
  console.log(`size : ${newList.size()}\n`);
}

/*
// Binary Search Tree 
console.log("\n=======Binary Searuch Tree=======");
let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(4);
bst.insert(2);
bst.insert(7);
bst.insert(9);
bst.state();
bst.find(1);
bst.find(9);
bst.delete(1);
bst.delete(7);
bst.state();
*/

/*
// Binary Tree 
console.log("\n=======Binary Tree=======");
let b = new BinaryTree();
b.push(1);
b.push(2);
b.push(3);
b.push(4);
b.push(5);
b.push(6);
b.pop();
b.state();
*/


// Hash Map
function newHashMap() {
console.log("\n=======Hash Map=======");
let HashMap1 = new HashMap();
HashMap1.isEmpty();
HashMap1.put();
HashMap1.put(1);
HashMap1.put(1,);
HashMap1.remove();
HashMap1.containsKey();
HashMap1.size();
HashMap1.containsValue();
HashMap1.put("0", 1);
HashMap1.put("1", 1);
HashMap1.put("A", 1);
HashMap1.put("B", 2);
HashMap1.put("C", 3);
HashMap1.put("D", 3);
HashMap1.put("A", 5);
HashMap1.put("C", 5);
HashMap1.put("D", 5);
HashMap1.put("N", 1);
HashMap1.put("O", 2);
HashMap1.put("Z", 3);
HashMap1.put("a", 1);
HashMap1.put("b", 2);
HashMap1.put("c", 3);
HashMap1.put("d", 3);
HashMap1.put("z", 1);
HashMap1.put("가나다", 123);
HashMap1.test();
HashMap1.isEmpty();
HashMap1.keySet();
HashMap1.entrySet();
HashMap1.test();
HashMap1.containsKey("A");
HashMap1.containsKey("B");
HashMap1.containsKey("C");
HashMap1.containsKey("E");
HashMap1.containsValue(1);
HashMap1.containsValue(4);
HashMap1.containsValue(5)
HashMap1.containsValue(10);
HashMap1.get("A");
HashMap1.get("B");
HashMap1.get("가나다");
HashMap1.get("e");
HashMap1.size();
HashMap1.clear();
console.log("=======AFTER CLEAR=======");
HashMap1.isEmpty();
}

/*
// Heap
console.log("\n=======Heap=======");
let h = new Heap();
h.pushMin(1);
h.pushMin(3);
h.pushMin(5);
h.pushMin(4);
h.pushMin(2);

// let array = [1, 3, 2, 5, 4];
// h.makeMinHeap(array);
h.state();
h = new Heap();
h.pushMax(2);
h.pushMax(5);
h.pushMax(1);
h.pushMax(3);
h.pushMax(4);
h.state();
*/









/*
// Bubble sort (under developing)
console.log("\n=======Bubble Sort=======");
const input = ["나", "가", "안녕", "aw"];
const result = BubbleSort(input);
console.log(`\nresult : ${result}`);
*/