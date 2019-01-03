/**
 * @Class List
 * @classdesc 여러개의 자료를 하나의 변수로 관리할 때 사용하는 자료구조이다.
 * @example 
 * var l = new List ();
 * @author yicho93@gmail.com
 */
const List = function(arr = []) {
  console.log("\n==================\nList Create\n==================\n");
  this.data = arr;
  this.pos = 0;
  this.listSize = 0;
};

const makeList = function(array) {
  let newList = new List(array);
  return newList;
};

/**
 * @method List.append
 * @description This method is used to append value at the end of list.
 * @param {undefined} value - The element to be appended to this linked list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 */
List.prototype.append = function (value) {
  this.data[this.listSize] = value;
  this.listSize++;
};

/**
 * @method List.find
 * @description This method is used to find position of value in this list
 * @param {undefined} value - The value which want to get position from list.
 * @return {Number} This method returns position of value if this list has specified value.
 * @throws This method returns null if this list doesn't have specified value.
 * @example 
 * var l = new List ();
 * var ret1 = l.find(1); // ret1 = -1
 * l.append(1);
 * l.append(2);
 * var ret2 = l.find(1); // ret2 = 0
 */

List.prototype.find = function (value) {
  for(let i = 0; i < this.listSize; i++) {
    if(this.data[i] === value) { return i; }
  }
  return null;
};

/**
 * @method List.get
 * @description This method is used to get value of specifed position in this list.
 * @param {Number} position - The position which want to get value from this list.
 * @return {undefined} This method returns the value from the specified position from this list.
 * @throws This method returns null if this position of list doesn't have value.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * var ret = l.get(1);  // ret = 2
 */
List.prototype.get = function(pos) {
  if(pos < this.listSize) return this.data[pos];
  return null;
};

/**
 * @method List.insert
 * @description This method is used to position specified value at the specifed position in this list.
 * @param {Number} position - The position to be appended to this list.
 * @param {undefined} value - The value to be appended to this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 */
List.prototype.insert = function (pos, value) {
  if(this.data[pos] !== undefined) {
    for(let i = this.listSize; i > pos; i--) { this.data[i] = this.data[i - 1]; }
    this.listSize++;
    this.data[pos] = value;
  } else { // data[pos] === undefined ---> 데이터가 없는 경우.
    this.listSize++;
    this.data[pos] = value;
  }
};

/**
 * @method List.remove
 * @description This method is used to remove the value from this list.
 * @param {undefined} value - The value to be removed from this list.
 * @returns {Boolean} This method returns ‘true’ if this list remove the specified value or ‘false’ if the list doesn't remove the specified value
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * var ret1 = l.remove(3); // ret1 = true
 * var ret2 = l.remove(4); // ret2 = false
 */
List.prototype.remove = function(value) {
  let removePos = this.find(value);
  if(removePos > -1) {
    this.data.splice(removePos, 1);
    this.listSize--;
    return true;
  }
  return false;
};

/**
 * @method List.size
 * @description This method is used to get the number of value in this list.
 * @returns {Number} This method returns the number of value in this list.
 * @example 
 * var l = new size ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * var size = ll.size(); // ret = 3
 * */
List.prototype.size = function() {
  return this.listSize;
};

/**
 * @method List.toString
 * @description This method is used to get values of this list.
 * @returns {String} This method returns the String which has value of this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * var v = l.toString(); // v = 1,2, 3
 * */
List.prototype.toString = function() {
  console.log(this.data);
  return this.data;
};

/**
 * @method List.contains
 * @description This method is used to check if this list contains the specified value.
 * @param {undefined} value - The value to be checked from this list.
 * @returns {Boolean}  This method returns ‘true’ if the specified value is exist in this list, or ‘false’ if the specified value isn't exist in this list 
 * @example  
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * var ret1 = l.contains(2); // ret1 = true
 * var ret2 = l.contains(4); // ret2 = false
 */
List.prototype.contains = function(value) {
  if (this.find(value) > -1) return true;
  return false;
};

/**
 * @method List.clear
 * @description This method is used to nullify this list and make all variables initial.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * l.clear();
 */
List.prototype.clear = function() {
  this.data = [];
  this.listSize = 0;
  this.pos = 0;
};

/**
 * @method List.front
 * @description This method is used to make positon to front in this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.front();
 */
List.prototype.front = function() {
  this.pos = 0;
};

/**
 * @method List.end
 * @description This method is used to make positon to end in this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.end();
 */
List.prototype.end = function() {
  this.pos = this.listSize - 1;
};

/**
 * @method List.next
 * @description This method is used to make positon to next of this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.next();
 */
List.prototype.next = function() {
  if(this.pos < this.listSize - 1) { this.pos++; }
};

/**
 * @method List.prev
 * @description This method is used to make positon to previous of this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.prev();
 */
List.prototype.prev = function() {
  if(this.pos > 0) { this.pos--; }
};

/**
 * @method List.prev
 * @description This method is used to get current position in this list.
 * @returns {Number} This method returns current position in this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * var ret = l.currPos();
 */
List.prototype.currPos = function() {
  return this.pos;
};

/**
 * @method List.moveTo
 * @description This method is used to set position in this list
 * @param {Number} position - The position which want to set in this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * l.append(4);
 * var ret = l.moveTo(2);
 */
List.prototype.moveTo = function(pos) {
  if(pos < this.listSize) { this.pos = pos; }
};

/**
 * @method List.getElement
 * @description This method is used to get value in this list, but does not remove.
 * @returns {undefined} This method returns the value of current position in this list.
 * @example 
 * var l = new List ();
 * l.append(1);
 * l.append(2);
 * l.append(3);
 * l.append(4);
 * var ret = l.getElement();  // return 4, if current posion is 3.
 */
List.prototype.getElement = function() {
  return this.data[this.pos];
};

module.exports = List;