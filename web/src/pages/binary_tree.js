let Node = function (value) {
  this.left = null;
  this.right = null;
  this.data = value;
};

/**
 * @Class BinaryTree
 * @classdesc Binary Tree에 저장되어 있는 요소들은 트리 형태로 표현되며 요소 간에 부모, 자식 관계가 존재하고 트리의 형태는 complete binary tree이다.
 * @example 
 * var bt = new BinaryTree ();
 * @author seeung0305@naver.com
 */
const BinaryTree = function () {
  this.tree = [];
  this.root = null;
  this.count = 0;
};

/**
 * @method BinaryTree.push  
 * @description This method is used to insert the specified element into this binary tree.
 * @param {undefined} value - The element to be inserted to this binary tree.
 * @returns {Boolean} This method returns the number of elements in this binary tree.
 * @throws This method returns null if parameter is missing.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 */
BinaryTree.prototype.push = function (value) {
  if(value === null) return null;
  let node = new Node(value);
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

/**
 * @method BinaryTree.pop  
 * @description This method is used to remove the very first element from this binary tree.
 * @returns {undefined} This method returns the first element from this binary tree.
 * @throws This method returns 'false' if binary tree is empty.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 * bt.pop(); // 3 will be removed
 */
BinaryTree.prototype.pop = function () {
  if(this.size() === 0) return false;
  this.tree[this.size() - 1].data = null;
  this.tree[this.size() - 1] = null;
  this.count--;
};

/**
 * @method BinaryTree.isEmpty  
 * @description This method is used to check if this binary tree is empty.
 * @returns {Boolean} This method returns ‘true’ if this binary tree is empty or ‘false’ if this binary tree is not empty.
 * @example 
 * var bt = new BinaryTree ();
 * var ret1 = bt.isEmpty(); // ret1 = true
 * bt.pushMin(1);
 * var ret2 = bt.isEmpty(); // ret2 = false
 */
BinaryTree.prototype.isEmpty = function () {
  return this.root === null;
};

/**
 * @method BinaryTree.size  
 * @description This method is used to get the number of elements in this binary tree.
 * @returns {Number} This method returns the number of elements in this binary tree.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 * var size = bt.size(); // size = 3
 */
BinaryTree.prototype.size = function () {
  return this.count;
};

/**
 * @method BinaryTree.postOrder  
 * @description This method is used for tree traversal. Traversal order is left -> right -> parent.
 * @param {undefined} value - The node is used to tree traversal recursively. 
 * @throws This method returns 'false' if parameter is missing or the node has no data.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 * bt.postOrder(this.root); // Tree :  2-3-1
 */
BinaryTree.prototype.postOrder = function (value){
  if(value === null) return false;
  let node = new Node(value);
  node = value;
  if(node === null) return false;
  this.postOrder(node.left);
  this.postOrder(node.right);
  if(node.data !== null)
  console.log("node data : " + node.data);
};

/**
 * @method BinaryTree.inOrder  
 * @description This method is used for tree traversal. Traversal order is left -> parent -> right.
 * @param {undefined} value - The node is used to tree traversal recursively. 
 * @throws This method returns 'false' if parameter is missing or the node has no data.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 * bt.inOrder(this.root); // Tree :  2-1-3
 */
BinaryTree.prototype.inOrder = function (value){
  if(value === null) return false;
  let node = new Node();
  node = value;
  if(node === null) return false;
  this.inOrder(node.left);
  if(node.data !== null)
  console.log("node data : " + node.data);
  this.inOrder(node.right);  
};

/**
 * @method BinaryTree.preOrder  
 * @description This method is used for tree traversal. Traversal order is parent -> left -> right.
 * @param {undefined} value - The node is used to tree traversal recursively. 
 * @throws This method returns 'false' if parameter is missing or the node has no data.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 * bt.preOrder(this.root);  // Tree :  1-2-3
 */
BinaryTree.prototype.preOrder = function (value){
  if(value === null) return false;
  let node = new Node();
  node = value;
  if(node === null) return false; 
  if(node.data !== null)
  console.log("node data : " + node.data);
  this.preOrder(node.left);  
  this.preOrder(node.right);  
};

/**
 * @method BinaryTree.state  
 * @description This method shows state of the binary_tree.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 * bt.state();  // InOder : 2-1-3, PreOrder : 1-2-3, PostOrder : 2-3-1
 */
BinaryTree.prototype.state = function () {
  //console.log(`=== ${this.size()} items in the binary tree : [${this.root.right.left.data}] ===`);
  console.log("Tree Traversal : InOrder");
  this.inOrder(this.root);
  console.log("Tree Traversal : PreOrder");
  this.preOrder(this.root);
  console.log("Tree Traversal : PostOrder");
  this.postOrder(this.root);
};

/**
 * @method BinaryTree.clear  
 * @description This method is used to nullify this binary tree and make all variables initial.
 * @example 
 * var bt = new BinaryTree ();
 * bt.push(1);
 * bt.push(2);
 * bt.push(3);
 * bt.clear();
 */
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