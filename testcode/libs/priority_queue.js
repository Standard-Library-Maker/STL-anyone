// Priority Queue implemented by Jisoo
let PriorityQueue = function () { console.log("test:priorityQueue"); };

//priority_queue::empty()
PriorityQueue.prototype.empty = function () { console.log("test:priorityQueue::empty"); };

//priority_queue::size()
PriorityQueue.prototype.size = function () { console.log("test:priorityQueue::size"); };

//priority_queue::top()
PriorityQueue.prototype.top = function () { console.log("test:priorityQueue::top"); };

//priority_queue::push(value)
PriorityQueue.prototype.push = function (value) { console.log("test:priorityQueue::push"); };

//priority_queue::pop()
PriorityQueue.prototype.pop = function () { console.log("test:priorityQueue::pop"); };

module.exports = PriorityQueue;