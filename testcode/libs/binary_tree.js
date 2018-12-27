let Node = function(value){
  this.left = null;
  this.right = null;
  this.data = value;
};

const BinaryTree = function(arr = []){
  this.root = null;
  this.count = 0;
};

BinaryTree.prototype.push = function(value){
  let node = new Node(value);
  if(root == null) root = node;
  else{

  }
};

BinaryTree.prototype.size = function(){
  return this.count;
  console.log("binary tree size : " + this.count);
};