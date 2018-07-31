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

const giveHeight = BST => {
  //logic!
};

//////////////////////////////////////////////////////

const isBST = BST => {
  //logic!
};

//////////////////////////////////////////////////////

const findThirdLgNode = BST => {
  //logic!
};

//////////////////////////////////////////////////////

const balanceBST = BST => {
  //logic!
};

//////////////////////////////////////////////////////

const main = () => {
  const BST = populateBST();

  console.log(BST);
  // console.log(giveHeight(BST));
};

main();
