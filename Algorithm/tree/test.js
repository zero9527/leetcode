const BinarySearchTree = require('./binarySearchTree');

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(6);
bst.insert(8);
bst.insert(9);
bst.insert(12);
bst.insert(5);
bst.insert(1);
bst.insert(2);

console.log(bst.getMin());
console.log(bst.getMax());

// console.log(bst.preForeach());
console.log(bst.midForeach());
// console.log(bst.backForeach());

bst.delete(5);
bst.delete(7);
console.log(bst.midForeach());
