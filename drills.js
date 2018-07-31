'use strict';

const BinarySearchTree = require('./BST');

//////////////////////////////////////////////////////

const populateBST = () => {
  const BST = new BinarySearchTree();

  const inputs = [3, 1, 4, 6, 9, 2, 5, 7];
  // const inputs2 = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

  inputs.forEach(input => {
    BST.insert(input);
  });

  return BST;
};

//////////////////////////////////////////////////////

const getHeight = BST => {
  if (BST.key === null) {
    return 0;
  }
  let left = BST.left !== null ? getHeight(BST.left) : 0;
  let right = BST.right !== null ? getHeight(BST.right) : 0;
  return left > right ? left + 1 : right + 1;
};

//////////////////////////////////////////////////////

const isBST = BST => {
  //logic!
};

//////////////////////////////////////////////////////

const findThirdLgKey = BST => {
  //logic!
};

//////////////////////////////////////////////////////

const balanceBST = BST => {
  const minHeight = (node = this.key) => {
    if (node === null) {
      return 0;
    }
    let left = minHeight(node.left);
    let right = minHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };
  const maxHeight = (node = this.key) => {
    if (node === null) {
      return 0;
    }
    let left = maxHeight(node.left);
    let right = maxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };
};

//////////////////////////////////////////////////////

const main = () => {
  const BST = populateBST();

  // console.log(BST);
  console.log(getHeight(BST));
  // console.log(isBST)
};

main();
