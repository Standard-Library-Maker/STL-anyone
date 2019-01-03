let Node = function (value) {
  this.left = null;
  this.right = null;
  this.data = value;
};
  
const BinarySearchTree = function () {
  this.root = null;
};

BinarySearchTree.prototype.isEmpty = function() {
  return this.root === null;
};

BinarySearchTree.prototype.insert = function(value){
  let node = new Node(value);
  if(this.root === null){
    this.root = node;
    return;
  }
  let current = this.root;
  while(current){
    if(value < current.data){
      if(current.left === null){
        current.left = node;
        break;
      }
      else{
        current = current.left;
      }
    }
    else{
      if(value > current.data){
        if(current.right === null){
          current.right = node;
          break;
        }
        else{
          current = current.right;
        }
      }
    }
  }
};

BinarySearchTree.prototype.state = function(){
  this.inOrder(this.root);
};

BinarySearchTree.prototype.inOrder = function(value) {
  let node = new Node();
  node = value;
  if(node === null) return;
  this.inOrder(node.left);
  if(node.data !== null)
  console.log("node data : " + node.data);
  this.inOrder(node.right);
};

BinarySearchTree.prototype.minValue = function(value) {
  let node = new Node();
  node = value;
  if(node === null) return node;
  if(node.left !== null) return this.minValue(node.left);
  return node;
};

BinarySearchTree.prototype.maxValue = function(value) {
  let node = new Node();
  node = value;
  if(node === null) return node;
  if(node.right !== null) return this.maxValue(node.right);
  return node;
};

BinarySearchTree.prototype.find = function(value) {
  let node = new Node();
  node = this.root;
  while(true){
    if(node.data > value){
      if(node.left === null){
        console.log("data not exists..");
        return null;
      }
      node = node.left;
    }
    else if (node.data < value){
      if(node.right === null) {
        console.log("data not exists..");
        return null;
      }
      node = node.right;
    }
    else {
      console.log("data exists : " + node.data);
      return node;
    }
  }
};

BinarySearchTree.prototype.delete = function (value) {
  let node = new Node();  
  node = this.find(value);
  if(node === null) {
    return;
  }
  console.log("====== delete data : " + node.data + " ======" );
  if(node === this.root){
    console.log("data : root");
    let replace = new Node();
    replace = this.maxValue(node.left);
    if(replace === null) replace = this.minValue(node.right);

    if(node.left === null && node.right === null) {
      console.log("root is only node");
      return;
    }
    if(replace.left === null && replace.right === null){
      this.root.data = replace.data;
      replace.data = null;
      console.log(this.root.data);
    }
    else {
      this.root.data = replace.data;
      replace.data = null;
      replace = this.maxValue(replace.left);
      if(replace === null) replace = this.minValue(replace.right);
      console.log(replace.data);
    }
  }
  else {
    let replace = new Node(null);
    replace = this.maxValue(node.left);
    if(replace === null) replace = this.minValue(node.right);

    if(replace === null) {
      node.data = null;
      return;
    }
    node.data = replace.data;
    replace.data = null;
  }
};

BinarySearchTree.prototype.clear = function (value) {
  let node = new Node();
  node = value;
  if(node === null) return;
  this.inOrder(node.left);
  if(node.data !== null)
  node.data = null;
  this.inOrder(node.right);
};

module.exports = BinarySearchTree;