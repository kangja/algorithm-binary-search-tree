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

      // searchTree is a recursive function where we pass in node in the function, which starts as the root node. 
      
      // If the data we pass in is lower than node.data, that means we are going to put the node on the left side of the tree.If node.left is null or empty, we will assign node.left to new Node and then we return. 
      
      // But, if node.left is not null, meaning, if node.left is present, we keep searching. It will go back to the beginning of the searchTree function and find where to put the node. 

      // If data is bigger than node.data and if node.right is null/empty, we assign node.right to new node and we can return. 
      // If node.right does not equal null, we keep searching. Else, meaning, if the data is not less and greater than than node.data, meaning, if they are equal, we return null. 
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left != null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  // finding minimum of the array. The minimum value is always located at the bottom left.
  findMin() {
    // current is the number that is at the very top.(Top of the pyramid).
    let current = this.root;

    // when there is nothing left of current.left, return current.data
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  // finding maximum of the array. The maximum value is always located at the bottom right.
  findMax() {
    let current = this.root;

    // when there is nothing right of current.right, return current.data
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // returning true/false if the data is present.
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // "data" is what we are trying to remove. And the remove function is recursive. 
  remove(data) {
    const removeNode = function (node, data) {

// if node equals null, it means we have an empty tree.  
      if (node == null) {
        return null;
      }

      // if we've found the node within the data, then do steps below. 
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null; 
        }
        // node has no left child 
        if (node.right == null) {
          return node.left;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    } 

    // this is where we call the function.  We always pass in the this.root node because this is where we start and data node because it is what we are searching for. 
    this.root = removeNode(this.root, data)
  }
}

const bst = new BST();

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
bst.remove(4)

console.log(bst.findMin())
console.log(bst.findMax())
bst.remove(7)
console.log(bst.findMax())
console.log(bst.isPresent(4))




