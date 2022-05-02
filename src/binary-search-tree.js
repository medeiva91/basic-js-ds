const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
        this.rootNode = newNode;
    } else {
        this.addNode(this.rootNode, newNode); // helper method below
    }  
  }

  has(data) {
      return this.search(this.rootNode, data) ? true : false
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data); // helper method below
  }

  min(node) {
    if (!node) {
      node = this.rootNode;
    }
    if (node.left === null) {
      return node.data;
    } else {
      return this.min(node.left);
    } 
  }

  max() {
    if (!node) {
      node = this.rootNode;
    }
    if (node.right === null) {
      return node.data;
    } else {
      return this.min(node.right);
    } 
  }
  
  addNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.addNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
          this.addNode(node.right, newNode);
        }
    }
  }
  removeNode(node, data) {
    if (node === null) {
        return null;
     } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        let newNode = this.min(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}

search(node, data)
{
  if (node === null) {
      return null;
  } else if (data < node.data) {
      return this.search(node.left, data);
  } else if (data > node.data) {
      return this.search(node.right, data);
  } else {
      return node;
  }

}


}



module.exports = {
  BinarySearchTree
};