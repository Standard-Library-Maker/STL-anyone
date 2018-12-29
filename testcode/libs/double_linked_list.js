// C++ STL, 생활코딩 등 참고.. append 함수 변경 예정.
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

