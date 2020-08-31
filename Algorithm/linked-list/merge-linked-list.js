const LinkedList = require('./linked-list');

const l1 = new LinkedList([1, 2, 5, 8]);
l1.insert(2, 3);
const arr_l1 = l1.getList().map((i) => i.element);
console.log(arr_l1); // [1, 2, 3, 5, 8]
console.log(l1.display());
/**
{
  "head": {
    "element": 1,
    "next": {
      "element": 2,
      "next": {
        "element": 3,
        "next": {
          "element": 5,
          "next": {
            "element": 8,
            "next": null
          }
        }
      }
    }
  }
}
 */

const l2 = new LinkedList([2, 5, 8, 10]);
l2.insert(5, 6);
const arr_l2 = l2.getList().map((i) => i.element);
console.log(arr_l2); // [2, 5, 6, 8, 10]
console.log(l2.display());
/**
{
  "head": {
    "element": 2,
    "next": {
      "element": 5,
      "next": {
        "element": 6,
        "next": {
          "element": 8,
          "next": {
            "element": 10,
            "next": null
          }
        }
      }
    }
  }
}
 */

/**
 * 解法1：
 * 1、分别获取两个链表的数组形式，
 * 2、合并两个数组，重新排序
 * 3、遍历合并的数组，依次添加到一个新的链表，得到合并后的链表
 */
const arr_merge = arr_l1.concat(arr_l2).sort((x, y) => x - y);
const ll_merge = new LinkedList();
console.log(arr_merge);
// [1, 2, 2, 3, 5, 5, 6, 8, 8, 10]

arr_merge.forEach((item) => {
  ll_merge.append(item);
});

const arr_ll_merge = ll_merge.getList().map((i) => i.element);
console.log(arr_ll_merge); // 结果与 arr_merge 是一样的
// [1, 2, 2, 3, 5, 5, 6, 8, 8, 10]

/**
 * 解法：
 * 1、找出头节点head值比较小的链表linked1，获取另一个链表linked2的数组形式，
 * 2、遍历这个数组，把节点插入linked1有next的值比它大且节点值比它小的节点之后；如果没有next的话，就是插入最后了
 * 3、修改对应的next指向
 * @param {*} linkedList1 第一个链表
 * @param {*} linkedList2 第二个链表
 */
function mergeLinkedList(linkedList1, linkedList2) {
  let smallHeadList, largeHeadList;
  const sml1 = linkedList1.head.element <= linkedList2.head.element;
  smallHeadList = sml1 ? linkedList1 : linkedList2;
  largeHeadList = sml1 ? linkedList2 : linkedList1;

  const list = largeHeadList.getList().map((i) => i.element);
  list.forEach((item) => {
    let node = smallHeadList.head;
    while (node) {
      // 插入到节点：值比当前值小，next节点的值比当前大
      if (
        node.element <= item &&
        (node.next === null || node.next.element > item)
      ) {
        smallHeadList.insert(node.element, item, true);
        node = null;
      } else {
        node = node.next;
      }
    }
  });

  return smallHeadList;
}

const mgLinkedList = mergeLinkedList(l1, l2);
console.log(mgLinkedList.display());
/**
{
  "head": {
    "element": 1,
    "next": {
      "element": 2,
      "next": {
        "element": 2,
        "next": {
          "element": 3,
          "next": {
            "element": 5,
            "next": {
              "element": 5,
              "next": {
                "element": 6,
                "next": {
                  "element": 8,
                  "next": {
                    "element": 8,
                    "next": {
                      "element": 10,
                      "next": null
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
 */
