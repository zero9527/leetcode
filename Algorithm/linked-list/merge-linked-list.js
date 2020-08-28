const LinkedList = require('./linked-list');

const l1 = new LinkedList();
l1.append('1');
l1.append('2');
l1.append('5');
l1.insert('2', '3');
const arr_l1 = l1.getList().map((i) => i.element);
console.log(arr_l1); // ['1', '2', '3', '5']

const l2 = new LinkedList();
l2.append('5');
l2.append('8');
l2.append('10');
l2.insert('5', '6');
const arr_l2 = l2.getList().map((i) => i.element);
console.log(arr_l2); // ['5', '6', '8', '10']

/**
 * 解法1：
 * 1、分别获取两个链表的数组形式，
 * 2、合并两个数组，
 * 3、遍历合并的数组，得到一个新的链表
 */
const arr_merge = arr_l1.concat(arr_l2);
const ll_merge = new LinkedList();
console.log(arr_merge);
// ['1', '2', '3', '5', '5', '6', '8', '10']

arr_merge.forEach((item) => {
  ll_merge.append(item);
});

const arr_ll_merge = ll_merge.getList().map((i) => i.element);
console.log(arr_ll_merge); // 结果与 arr_merge 是一样的
// ['1', '2', '3', '5', '5', '6', '8', '10']

/**
 * 解法二：
 * 逐一对比，把小的节点就插入比它小的值之后，修改对应的next指向
 * @param {*} linkList1 第一个链表
 * @param {*} linkList2 第二个链表
 */
function mergeLinkedList(linkList1, linkList2) {}
