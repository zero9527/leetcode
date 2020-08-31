const LinkedList = require('./linked-list');

const l1 = new LinkedList();
l1.append(2);
l1.append(5);
l1.append(8);
l1.insert(5, 6);
l1.insert(2, 4);

console.log(l1.getList().map((i) => i.element));
// [2, 4, 5, 6, 8]

/**
 * 返回倒数第k个节点
 * 双指针解法：
 * 1、创建两个指针，前指针走得快、后指针走得慢，前指针(K-1 > 0)单独向前走一步；
 * 2、当前指针不为空null时，前指针、后指针同时向前走一步；
 * 3、前指针为空null时，表示已经走到最后节点，此时，后指针就在倒数第K个节点处；
 */
function findLastKNode(head, k) {
  let prevPointer = head,
    targetPointer = head,
    count = k;

  while (count--) {
    prevPointer = prevPointer.next;
  }

  while (prevPointer !== null) {
    prevPointer = prevPointer.next;
    targetPointer = targetPointer.next;
  }

  return targetPointer;
}

console.log(findLastKNode(l1.head, 2));
