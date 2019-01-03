/**
 * @Class Stack
 * @classdesc 후입선출(Last-In-First-Out)의 자료구조이다.
 * @example 
 * var s = new Stack ();
 * @author yicho93@gmail.com
 */
function Stack() {
  let data = [];
  let top = 0;
  // this.max = 100;

  /**
 * @method Stack.push
 * @description This method is used to insert the specified element into this stack.
 * @param {Undefined} value - The element to be inserted to this stack.
 * @example 
 * var s = new Stack ();
 * s.push(1);
 * s.push(2);
 */
  this.push = (value) => {
    data[top++] = value;
  };

  /**
* @method Stack.pop
* @description This method is used to remove element from this stack.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.pop() // 2 will be removed.
*/
  this.pop = () => {
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
* @description  This method is used to get the last element in this stack, but does not remove.
* @returns {value} This method returns the last element of this stack, or null if this stack is empty.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.push(3);
* var ret = s.top() // ret1 = 3 
* */
  this.top = () => {
    if (top === 0) console.log("Error. Stack is empty");
    else return data[top - 1];
  };

  /**
* @method Stack.size  
* @description This method is used to get the number of elements in this stack.
* @returns {Number} This method returns the number of elements in this stack.
* @example 
* var s = new Stack ();
* s.push(1); 
* s.push(2);
* s.push(3);
* var size = s.size(); // size = 3
*/
  this.size = () => top;

  /**
* @method Stack.isEmpty  
* @description This method is used to check if this stack is empty.
* @returns {Boolean} This method returns ‘true’ if this stack is empty or ‘false’ if this stack is not empty.
* @example 
* var s = new Stack ();
* var ret1 = s.isEmpty(); // ret1 = true
* s.push(1);
* var ret2 = s.isEmpty(); // ret2 = false
*/
  this.isEmpty = () => {
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
  this.clear = () => {
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
  this.state = () => {
    console.log(`=== ${this.size()} items in the stack : [${data}] ===`);
  };
}

module.exports = Stack;