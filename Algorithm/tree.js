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

// 前序遍历：输出 [1, 2, 3]
// 中序遍历：输出 [1, 3, 2]
// 后续遍历：输出 [2, 3, 1]
const list = [1, null, 2, 3];
const tree = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};

// TODO
// 将二叉树数组表示法转化为链式表示法
function transArr2Tree(arr = [], root = {}, index = 1) {
  if (index === 1) arr = [null, ...arr];
  if (index + 1 > arr.length || arr[index] === null) return null;

  console.log(index, arr[index]);

  root.val = arr[index];
  root.left = {};
  root.right = {};

  root.left = transArr2Tree(arr, root.left, index * 2);
  root.right = transArr2Tree(arr, root.right, index * 2 + 1);

  return root;
}

const tree1 = transArr2Tree(list);
console.log(tree1);

// 前序遍历
function prevForeach(root) {
  const result = [];

  function itemHandler(node) {
    if (node) {
      result.push(node.val);
      itemHandler(node.left);
      itemHandler(node.right);
    }
  }

  itemHandler(root);
  return result;
}
console.log(prevForeach(tree));

// 中序遍历
function middleForeach(arr) {}

// 后序遍历
function backForeach(arr) {}
