let Node = function (value) {
  this.left = null;
  this.right = null;
  this.data = value;
};
  
/**
 * @Class BinarySearchTree
 * @classdesc Binary Search Tree에 저장되어 있는 요소들은 트리 형태로 표현되며 요소 간에 부모, 자식 관계가 크기 비교에 의해서 존재한다. 
 * 자식이 부모보다 클 경우 부모의 오른쪽 노드로, 자식이 부모보다 작을 경우 부모의 왼쪽 노드로 저장된다
 * @example 
 * var bst = new BinarySearchTree ();
 * @author seeung0305@naver.com
 */
const BinarySearchTree = function () {
  this.root = null;
};

/**
 * @method BinarySearchTree.isEmpty  
 * @description This method is used to check if this binary search tree is empty.
 * @returns {Boolean} This method returns 'true' if this birnary search tree is empty or 'false' if this birnary search tree isn't empty.
 * @example 
 * var bst = new BinarySearchTree ();
 * var ret1 = bst.isEmpty();  // ret1 = true
 * bst.insert(1);
 * var ret2 = bst.isEmpty();  // ret2 = false
 */
BinarySearchTree.prototype.isEmpty = function() {
  return this.root === null;
};

/**
 * @method BinarySearchTree.insert  
 * @description This method is used to insert the specified element into this binary search tree.
 * @param {undefined} value - The element to be inserted to this binary search tree.
 * @throws This method returns null if the parameter is missing.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.insert(1);
 * bst.insert(2);
 */
BinarySearchTree.prototype.insert = function(value){
  if(value === null) return null;
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

/**
 * @method BinarySearchTree.state  
 * @description This method shows state of the binary_search_tree.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.insert(1);
 * bst.insert(2);
 * bst.insert(3);
 * bst.state(); 
 */
BinarySearchTree.prototype.state = function(){
  this.inOrder(this.root);
};

/**
 * @method BinarySearchTree.inOrder  
 * @description This method is used for tree traversal. Traversal order is left -> parent -> right.
 * @param {undefined} value - The node is used to tree traversal recursively. 
 * @throws  method returns null if node has no data.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.insert(1);
 * bst.insert(2);
 * bst.insert(3);
 * bst.inOrder(this.root);
 */
BinarySearchTree.prototype.inOrder = function(value) {
  if(value === null) return null;
  let node = new Node();
  node = value;
  if(node === null) return;
  this.inOrder(node.left);
  if(node.data !== null)
  console.log("node data : " + node.data);
  this.inOrder(node.right);
};

/**
 * @method BinarySearchTree.minValue  
 * @description This method finds the node which has the minimum data among the value’s child.
 * @param {undefined} value – The node which intends to look for the minimum data of nodes among children.
 * @returns {Node} This method returns node if node is null and returns the minimum data from the child nodes of value recursively.
 * @throws This method returns null if the parameter is missing.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.insert(1);
 * bst.insert(2);
 * bst.minValue(this.root);
 */
BinarySearchTree.prototype.minValue = function(value) {
  if(value === null) return null;
  let node = new Node();
  node = value;
  if(node === null) return node;
  if(node.left !== null) return this.minValue(node.left);
  return node;
};

/**
 * @method BinarySearchTree.maxValue  
 * @description This method finds the node which has the maximum data among the value’s child.
 * @param {undefined} value - The node which intends to look for the maximum data of nodes among children.
 * @returns {Node} This method returns node if node is null and returns the maximum data from the child nodes of value recursively.
 * @throws This method returns null if the parameter is missing.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.insert(1);
 * bst.insert(2);
 * bst.maxValue(this.root);
 */
BinarySearchTree.prototype.maxValue = function(value) {
  if(value === null) return null;
  let node = new Node();
  node = value;
  if(node === null) return node;
  if(node.right !== null) return this.maxValue(node.right);
  return node;
};

/**
 * @method BinarySearchTree.find  
 * @description This method finds the node from the tree of which data is same as value.
 * @param {undefined} value - The value to look up the node which has data as same as value among the binary search tree.
 * @returns {undefined} This method returns node which has data as same as value.
 * @throws This method returns 'false' if the parameter is missing or null if the node of which data is same as value doesn’t exist.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.insert(1);
 * bst.insert(2);
 * bst.find(3); // return null
 * bst.insert(3);
 * bst.find(3); // return node
 */
BinarySearchTree.prototype.find = function(value) {
  if(value === null) return false;
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

/**
 * @method BinarySearchTree.delete  
 * @description This method removes the node from the tree of which data is same as value
 * @param {undefined} value - The data of node which is in the binary search tree.
 * @throws This method returns false if the parameter is missing or null the node of which data is value is not among binary search tree.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.insert(1);
 * bst.insert(2);
 * bst.find(2); // return node
 * bst.delete(2); // 2 will be removed
 * bst.find(2); // return null
 */
BinarySearchTree.prototype.delete = function (value) {
  if(value === null) return false;
  let node = new Node();  
  node = this.find(value);
  if(node === null) {
    return null;
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

/**
 * @method BinarySearchTree.clear  
 * @description This method is used to nullify this binary search tree and make all variables initial.
 * @example 
 * var bst = new BinarySearchTree ();
 * bst.push(1);
 * bst.push(2);
 * bst.push(3);
 * bst.clear(this.root);
 */
BinarySearchTree.prototype.clear = function (value) {
  if(value === null) return null;
  let node = new Node();
  node = value;
  if(node === null) return;
  this.inOrder(node.left);
  if(node.data !== null)
  node.data = null;
  this.inOrder(node.right);
};

module.exports = BinarySearchTree;