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

const populateTree = () => {
  const tree = new BinarySearchTree(5);
  tree.left = new BinarySearchTree(7);
  tree.right = new BinarySearchTree(4);
  return tree;
};

//////////////////////////////////////////////////////

const isBST = tree => {
  if (tree.key === null) {
    return true;
  }
  if (tree.left !== null) {
    if (tree.left.key >= tree.key) {
      return false;
    }
  }
  if (tree.right !== null) {
    if (tree.right.key <= tree.key) {
      return false;
    }
  }
  return true;
};

//////////////////////////////////////////////////////

const findThirdLgKey = BST => {
  if (BST.key === null) {
    return null;
  }
  const results = [];
  const traverse = BST => {
    if (BST.left) {
      traverse(BST.left);
    }
    results.push(BST.key);
    if (BST.right) {
      traverse(BST.right);
    }
  };
  traverse(BST);
  return results[results.length - 3];
};

//////////////////////////////////////////////////////

const balanceBST = BST => {
  const minHeight = BST => {
    if (BST.key === null) {
      return 0;
    }
    let left = BST.left !== null ? minHeight(BST.left) : 0;
    let right = BST.right !== null ? minHeight(BST.right) : 0;
    return left < right ? left + 1 : right + 1;
  };
  const maxHeight = BST => {
    if (BST.key === null) {
      return 0;
    }
    let left = BST.left !== null ? maxHeight(BST.left) : 0;
    let right = BST.right !== null ? maxHeight(BST.right) : 0;
    return left > right ? left + 1 : right + 1;
  };
  const diff = maxHeight(BST) - minHeight(BST);
  return diff > 1 ? false : true;
};

//////////////////////////////////////////////////////

const main = () => {
  const BST = populateBST();
  const tree = populateTree();

  // console.log(BST);
  // console.log(getHeight(BST));
  // console.log(tree);
  // console.log(isBST(tree));
  // console.log(findThirdLgKey(BST));
  // console.log(balanceBST(BST));
};

main();
