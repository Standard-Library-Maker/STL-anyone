/**
 * @Class Stack
 * @classdesc 후입선출(Last-In-First-Out)의 자료구조이다.
 * @example 
 * var s = new Stack ();
 * @author yicho93@gmail.com
 */
const Stack = function () {
  let data = [];
  let top = 0;
  // this.max = 100;
};

/**
* @method Stack.push
* @description This method is used to insert the specified value into this stack.
* @param {undefined} value - The value to be inserted to this stack.
* @example 
* var s = new Stack ();
* s.push(1);
* s.push(2);
*/
Stack.prototype.push = function (value) {
  data[top++] = value;
};

/**
* @method Stack.pop
* @description This method is used to remove value from this stack.
* @returns This method returns the vale which is poped.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.pop() // 2 will be removed.
*/
Stack.prototype.pop = function () {
  if (top === 0) console.log("Error. Stack is empty");
  else {
    let popedValue = data[--top];
    // delete data[top];
    data.splice(top, 1);
    return popedValue;
  }
};

/**
* @method Stack.top
* @description  This method is used to get the last value in this stack, but does not remove.
* @returns This method returns the last value of this stack.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.push(3);
* var ret = s.top() // ret1 = 3 
* */
Stack.prototype.top = function () {
  if (top === 0) console.log("Error. Stack is empty");
  else return data[top - 1];
};

/**
* @method Stack.size  
* @description This method is used to get the number of values in this stack.
* @returns This method returns the number of values in this stack.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.push(3);
* var size = s.size(); // size = 3
*/
Stack.prototype.size = function () { return top; }

/**
* @method Stack.isEmpty  
* @description This method is used to check if this stack is empty.
* @returns This method returns ‘true’ if this stack is empty or ‘false’ if this stack is not empty.
* @example 
* var s = new Stack ();
* var ret1 = s.isEmpty(); // ret1 = true
* s.push(1);
* var ret2 = s.isEmpty(); // ret2 = false
*/
Stack.prototype.isEmpty = function () {
  if (top === 0) return true;
  return false;
};

/**
* @method Stack.clear  
* @description This method is used to nullify this stack and make all variables initial.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.push(3);
* s.clear();
*/
Stack.prototype.clear = function () {
  top = 0;
  data = [];
};

/**
* @method Stack.state  
* @description This method shows state of this stack.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.push(3);
* s.state(); // 1, 2, 3
*/
Stack.prototype.status = function () {
  console.log(`=== ${this.size()} items in the stack : [${data}] ===`);
};


module.exports = Stack;