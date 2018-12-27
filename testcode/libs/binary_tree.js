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
    console.log("parent index : " + parent);
    if(this.tree[parent].left !== null) this.tree[parent].right = node;
    else this.tree[parent].left = node;
  }
  this.count ++;
};

BinaryTree.prototype.size = function () {
  return this.count;
};

BinaryTree.prototype.state = function () {
  //console.log(`=== ${this.size()} items in the binary tree : [${this.root.right.left.data}] ===`);
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