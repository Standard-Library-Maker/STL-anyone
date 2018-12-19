function Stack() { 
  let data = [];
  let top = 0;
  // this.max = 100;

  this.push = (value) => {
    data[top++] = value;
  };
  
  this.pop = () => {
    if(top === 0) console.log("Error. Stack is empty"); 
    else {
      let popedValue = data[--top];
      // delete data[top];
      data.splice(top, 1);
      return popedValue;
    }
  };
  
  this.top = () => {
    if(top === 0) console.log("Error. Stack is empty");
    else return data[top - 1];
  };

  this.size = () => top;

  this.empty = () => {
    if(top === 0) return true;
    return false;
  };

  this.clear = () => {
    top = 0;
    data = [];
  };
  
  this.state = () => {
    console.log(`=== ${this.size()} items in the stack : [${data}] ===`);
  };
}


/* Test Code */
let s = new Stack();
s.push("hello world");
s.push("hello javascript");
s.push("지수 천재");
s.pop();
s.state();
console.log(`pop : ${s.pop()}`);
console.log(`top : ${s.top()}`);
console.log(`size : ${s.size()}`);
s.state();
s.clear();
console.log("=== after clear ===");
s.state();

