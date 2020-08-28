/**
 * 树：
 *  仅有唯一一个根节点，没有节点则为空树
 *  除根节点外，每个节点都有并仅有唯一一个父节点
 *  节点间不能形成闭环
 *
 * 树有几个概念：
 *  拥有相同父节点的节点，互称为兄弟节点
 *  节点的深度 ：从根节点到该节点所经历的边的个数
 *  节点的高度 ：节点到叶节点的最长路径
 *  树的高度：根节点的高度
 */

/**
 * 二叉树：每个节点最多只有子节点的树
 *
 * 前序遍历：节点-》左子树=》右子树
 * 中序遍历：左子树-》节点-》右子树
 * 后续遍历：左子树-》右子树-》节点
 *
 * 链式存储法：每个节点包含：当前节点，左节点，右节点
 * 数组存储法：
 *  1、位置为 i 的节点，它的父节点位置为 i/2
 *  2、它的左子节点 2i
 *  3、它的右子节点 2i+1
 */

/**
 * 二叉搜索树：
 *  1、若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
 *  2、若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
 *  3、任意节点的左、右子树也需要满足左边小右边大的性质
 */

class TreeNode {
  constructor(val, parent) {
    this.val = val;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
  }
}

// 二叉搜索树
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 插入
  insert(val) {
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }
    this.insertNode(this.root, val);
  }

  // 查找
  find(val) {
    const node = this.root;
    if (node === null) return null;
    return this.findNode(node, val);
  }

  insertNode(_node, _val) {
    if (_val < _node.val) {
      if (_node.left === null) _node.left = new TreeNode(_val, _node);
      else this.insertNode(_node.left, _val);
    } else {
      if (_node.right === null) _node.right = new TreeNode(_val, _node);
      else this.insertNode(_node.right, _val);
    }
  }

  findNode(_node, _val) {
    if (_node.val === _val) return _node;
    if (_val < _node.val) {
      if (_node.left == null) return null;
      else return this.findNode(_node.left, _val);
    } else {
      if (_node.right === null) return null;
      else return this.findNode(_node.right, _val);
    }
  }

  // 删除
  delete(val) {
    let item = this.find(val);
    if (item) {
      const itemChild = this.preForeach(item);
      itemChild.shift();
      const parent = item.parent;
      // 在父节点上删除item
      if (parent.val > item.val) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      // 重插入itemChild
      itemChild.forEach((i) => {
        this.insertNode(parent, i);
      });
    }
  }

  // 获取最小值
  getMin() {
    let node = this.root;
    while (node) {
      if (node.left === null) return node.val;
      node = node.left;
    }
    return node.val;
  }

  // 获取最大值
  getMax() {
    let node = this.root;
    while (node) {
      if (node.right === null) return node.val;
      node = node.right;
    }
    return node.val;
  }

  // 前序遍历
  preForeach(root) {
    const result = [];
    root = root || this.root;
    foreach(root);

    function foreach(node) {
      if (node) {
        result.push(node.val);
        foreach(node.left);
        foreach(node.right);
      }
    }

    return result;
  }

  // 中序遍历
  midForeach(root) {
    const result = [];
    root = root || this.root;
    foreach(root);

    function foreach(node) {
      if (node) {
        foreach(node.left);
        result.push(node.val);
        foreach(node.right);
      }
    }

    return result;
  }

  // 后序遍历
  backForeach(root) {
    const result = [];
    root = root || this.root;
    foreach(root);

    function foreach(node) {
      if (node) {
        foreach(node.left);
        foreach(node.right);
        result.push(node.val);
      }
    }

    return result;
  }
}

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
