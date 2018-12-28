let Node = function (value) {
  this.left = null;
  this.right = null;
  this.data = value;
};

const BinaryTree = function () {
  this.tree = [];
  this.root = null;
  this.count = 0;
};

BinaryTree.prototype.push = function (value) {
  let node = new Node(value);
  node.data = value;
  if (this.root === null) {
    this.root = node;
    this.tree[this.count] = node;
  }
  else {
    this.tree[this.count] = node;
    let parent = Math.floor((this.count - 1) / 2);
    if(this.tree[parent].left !== null) this.tree[parent].right = node;
    else this.tree[parent].left = node;
  }
  this.count ++;
};

BinaryTree.prototype.size = function () {
  return this.count;
};

BinaryTree.prototype.postOrder = function (value){
  let node = new Node();
  node = value;
  if(node === null) return;
  this.postOrder(node.left);
  this.postOrder(node.right);
  console.log("node data : " + node.data);
};

BinaryTree.prototype.inOrder = function (value){
  let node = new Node();
  node = value;
  if(node === null) return;
  this.inOrder(node.left);
  console.log("node data : " + node.data);
  this.inOrder(node.right);  
};

BinaryTree.prototype.preOrder = function (value){
  let node = new Node();
  node = value;
  if(node === null) return;
  console.log("node data : " + node.data);
  this.preOrder(node.left);  
  this.preOrder(node.right);  
};

BinaryTree.prototype.state = function () {
  //console.log(`=== ${this.size()} items in the binary tree : [${this.root.right.left.data}] ===`);
  console.log("Tree Traversal : InOrder");
  this.inOrder(this.root);
  console.log("Tree Traversal : PreOrder");
  this.preOrder(this.root);
  console.log("Tree Traversal : PostOrder");
  this.postOrder(this.root);
};

BinaryTree.prototype.clear = function() {
  let i;
  for (i = 0; i < this.size(); i++){
    this.tree[i].data = null;
    this.tree[i].left = null;
    this.tree[i].right = null;
  }
  this.tree = null;
  this.count = 0;
  this.root = null;
};

module.exports = BinaryTree;