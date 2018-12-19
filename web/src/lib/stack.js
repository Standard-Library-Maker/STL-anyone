const Stack = function() {
  this.data = [];
  this.top = 0;
  // this.max = 100;
  document.writeln(`<br>★★★ Stack example ★★★ <br>=================================<br>`);
};

Stack.prototype.push = function(value) {
  this.data[this.top++] = value;
  this.show('push');
};
  
Stack.prototype.pop = function() {
  if(this.top === 0) console.log("Error. Stack is empty"); 
  else {
    let popedValue = this.data[--this.top];
    // delete this.data[this.top];
    this.data.splice(this.top, 1);
    this.show('pop');
    return popedValue;
  }
};

Stack.prototype.peek = function() {
  if(this.top === 0) console.log("Error. Stack is empty");
  else return this.data[this.top - 1];
};

Stack.prototype.size = function() { return this.top; };

Stack.prototype.clear = function() {
  this.top = 0;
  this.data = [];
  document.writeln(`=== after clear ===<br>`);
  this.show(false);
};

Stack.prototype.state = function() { console.log(this.data); };

Stack.prototype.show = function(value) {
  if(value === false){
    document.writeln('empty, nothing in the stack' + `<br>`);
  } else {
    document.writeln(`function(${value}) --> data : [${this.data}] <br>`);
    document.writeln('↓'+`<br>`);
  }
};

export default Stack