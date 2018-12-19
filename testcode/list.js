// Python list 참고.
const List = function() {
  this.data = [];
  this.pos = 0;
  this.listSize = 0;
};

List.prototype.append = function (value) {
  this.data[this.listSize] = value;
  this.listSize++;
};

List.prototype.find = function (value) {
  for(let i = 0; i < this.listSize; i++){
    if(this.data[i] === value)
      return i;
  }
  return -1;
};

List.prototype.insert = function (index, value) {
  if(this.data[index] !== undefined){
    this.listSize++;
    for(let i = this.listSize; i > index; i--)
      this.data[i] = this.data[i-1];
    this.data[index] = value;
  } else {

  }
};