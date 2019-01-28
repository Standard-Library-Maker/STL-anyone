const Stack = function() {
  this.data = [];
  this.top = 0;
  // this.max = 100;
};

Stack.prototype.isEmpty = function() {
  return this.top === 0;
};
  
Stack.prototype.push = function(value) {
  this.data[this.top++] = value;
};
    
Stack.prototype.pop = function() {
  if(this.top === 0) return null;
  else {
    let popedValue = this.data[--this.top];
    // delete this.data[this.top];
    this.data.splice(this.top, 1);
    return popedValue;
  }
};
  
Stack.prototype.peek = function() {
  if(this.top === 0) return null;
  else return this.data[this.top - 1];
};
  
Stack.prototype.size = function() { return this.top; };
  
Stack.prototype.clear = function() {
  this.top = 0;
  this.data = [];
};

Stack.prototype.toString = function() {
  return `=== ${this.size()} items in the stack : [${this.data}] ===`;
};
  
export default Stack;