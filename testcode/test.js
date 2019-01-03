let Stack = require("./libs/stack");
let Queue = require("./libs/queue");
// let BubbleSort = require("./libs/[sort]bubble");
let List = require("./libs/list");
// let LinkedList = require("./libs/linked_list");
let Heap = require("./libs/heap");
let PriorityQueue = require("./libs/priority_queue");
let BinaryTree = require("./libs/binary_tree");
let BinarySearchTree = require("./libs/binary_search_tree");
let Deque = require("./libs/deque");
let HashMap = require("./libs/hash_map");

var bst = new BinarySearchTree (); bst.insert(1); bst.insert(2); bst.insert(3); bst.state();

// Binary Tree test case
/*
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

/*
// Heap test case
let h = new Heap();
h.pushMin(1);
h.pushMin(3);
h.pushMin(2);
h.pushMin(5);
h.pushMin(4);
let array = [1, 3, 2, 5, 4];
h.makeMinHeap(array);
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
s1.toString(); */

/* test code2 */
/* let s2 = new CircularQueue(3);
s2.push("hello world");
s2.push("hello javascript");
s2.push("this is circular queue");

s2.toString();
console.log(`[isFull] is full? ${s2.isFull()}`);
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
console.log(`[isEmpty] is empty? ${s2.isEmpty()}`); */

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

/*
// Priority queue => test by Jisoo
console.log("\n=======Priority Queue : test by Jisoo=======");
let testPriorityQueue1 = new PriorityQueue();
testPriorityQueue1.push();
testPriorityQueue1.push(1);
testPriorityQueue1.push(2);
testPriorityQueue1.push(3);
testPriorityQueue1.push(8);
testPriorityQueue1.push(4);
testPriorityQueue1.push(12);
testPriorityQueue1.push(2);
testPriorityQueue1.testData();
testPriorityQueue1.pop();
testPriorityQueue1.pop();
testPriorityQueue1.pop();
testPriorityQueue1.pop();
testPriorityQueue1.pop();
testPriorityQueue1.pop();
testPriorityQueue1.pop();
testPriorityQueue1.testData();
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
*/

/*
// Deque => test by Jisoo
console.log("\n=======Deque : test by Jisoo=======");
let testDeque1 = new Deque();
testDeque1.isEmpty();
testDeque1.push_back(1);
testDeque1.push_front(2);
testDeque1.push_front(3);
testDeque1.isEmpty();
/*
testDeque1.push_front(4);
testDeque1.push_back(0);
testDeque1.push_front(5);
testDeque1.push_front(6);
testDeque1.push_front(7);
testDeque1.push_front(8);
testDeque1.push_front(9);
testDeque1.push_front(10);
testDeque1.push_front(11);
testDeque1.pop_back();
testDeque1.pop_front();
console.log(testDeque1);
console.log("=========================");
testDeque1.at(0);
testDeque1.at(1);
testDeque1.at(2);
testDeque1.at(3);
testDeque1.at(4);
testDeque1.at(5);
testDeque1.at(6);
testDeque1.at(7);
testDeque1.at(8);
testDeque1.at(9);
testDeque1.at(10);
console.log("=========================");
testDeque1.erase(1);
testDeque1.erase(4);
testDeque1.erase(6);
testDeque1.at(0);
testDeque1.at(1);
testDeque1.at(2);
testDeque1.at(3);
testDeque1.at(4);
testDeque1.at(5);
testDeque1.at(6);
console.log(testDeque1);
console.log("=========================");
testDeque1.clear();
console.log("=======AFTER CLEAR=======");
console.log(testDeque1);
testDeque1.push_back(1);
testDeque1.push_front(2);
testDeque1.push_front(3);
testDeque1.push_front(4);
console.log(testDeque1);


/*
// HashMap => test by Jisoo
console.log("\n=======test by Jisoo=======");
let HashMap1 = new HashMap();
HashMap1.isEmpty();
HashMap1.put();
HashMap1.put(1);
HashMap1.put(1,);
HashMap1.remove();
HashMap1.containsKey();
HashMap1.size();
HashMap1.containsValue();
/*
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
//HashMap1.keySet();
HashMap1.entrySet();

//HashMap1.remove("B");
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

HashMap1.put("A", 1);
HashMap1.put("B", 2);
HashMap1.put("C", 3);
HashMap1.test();
HashMap1.containsKey("A");
HashMap1.containsKey("B");
HashMap1.containsKey("C");
HashMap1.containsKey("E");

HashMap1.containsValue(1);
HashMap1.containsValue(4);
HashMap1.containsValue(5)
HashMap1.containsValue(10);

HashMap1.size();
HashMap1.clear();
HashMap1.isEmpty();
*/