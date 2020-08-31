const LinkedList = require('./linked-list');
const { jsonConsole } = require('../../utils');

/**
 * 反转链表：1、迭代（反转指针+临时后指针）
 * @description
 * 1、创建 反转指针=null，当前指针=头节点；
 * 2、当前指针 往下遍历，不为空时：
 *    1) 使用 临时后指针 备份 当前指针 的next节点；
 *    2) 反转指针 重置 当前指针 的next节点；
 *    3) 当前指针 重置 反转指针；
 *    4) 临时后指针 重置 当前指针；
 * @param {*} head 链表头节点
 * @returns 反转后的链表
 */
function reverseLinkedList(head) {
  if (head === null) return null;
  let curr = head,
    reverse = null;

  while (curr !== null) {
    const next = curr.next;
    curr.next = reverse;
    reverse = curr;
    curr = next;
  }

  return reverse;
}

/**
 * 反转链表：2、递归写法（反转指针+临时后指针）
 * 与第一种方法差不多
 */
function reverseLinkedList2(head) {
  if (head === null) return curr;

  function reverseFn(reverse, curr) {
    if (curr === null) return reverse;
    const next = curr.next;
    curr.next = reverse;
    reverse = curr;
    curr = next;
    return reverseFn(reverse, curr);
  }

  return reverseFn(null, head);
}

const l1 = new LinkedList([2, 4, 6, 8]);
console.log(l1.getList().map((i) => i.element));
// [2, 4, 6, 8]

const reverse_l1 = reverseLinkedList(l1.head);
console.log(jsonConsole(reverse_l1));
/**
{
  "element": 8,
  "next": {
    "element": 6,
    "next": {
      "element": 4,
      "next": {
        "element": 2,
        "next": null
      }
    }
  }
}
 */

const l2 = new LinkedList([1, 3, 5, 7]);
console.log(l2.getList().map((i) => i.element));
// [1, 3, 5, 7]

const reverse_l2 = reverseLinkedList2(l2.head);
console.log(jsonConsole(reverse_l2));
/**
{
  "element": 7,
  "next": {
    "element": 5,
    "next": {
      "element": 3,
      "next": {
        "element": 1,
        "next": null
      }
    }
  }
}
 */
