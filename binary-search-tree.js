// We need to classes to do binary search tree. The first class is Node and the second class is BST(binary search tree).



// Node class represents each node in the tree. Data is what we are trying to store. This.left points to the left node and this.right points to the right node. 
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// bineary search tree class
class BST {
  constructor() {
    // this.root node is the top of the tree.
    this.root = null;
  }
  add(data) {
    // if it is the first node, it becomes the new root. If it's not the first node, we have to figure out where to put the node in the tree. We have to use recursive function to figure out where to put it. 
    const node = this.root; 
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left != null) {
            return searchTree(node.left);
          }
        }
      }
    }
  }
}