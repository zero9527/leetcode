/**
 * 节点
 * @param {*} element item
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * 链表
 * 概念：
 * 1、每个节点只知道next节点，
 * 2、查找的话需要从头开始，直到某个节点的next节点是目标节点
 * 3、插入的话，先找到目标节点，就改变插入位置前一个节点的next节点，未新插入的节点，
 *  新插入的节点的next节点则为原来这个位置的节点
 * 4、移除的话，类似插入，先找到目标节点，然后替换响应的next节点
 * 5、尾部添加，找到最后一个next节点为空的，新建节点赋值给它
 */
class LinkedList {
  constructor(element) {
    this.head = new Node(element);
  }

  // 查找目标节点的前一个
  findPrev(element) {
    let prevNode = this.head;
    while (prevNode.next && prevNode.next.element !== element) {
      prevNode = prevNode.next;
    }
    return prevNode;
  }

  // 查找
  find(element) {
    const prevNode = this.findPrev(element);
    return prevNode.next;
  }

  // 插入，item上一个，element新节点
  insert(item, element) {
    let cur = this.find(item);
    const newNode = new Node(element);
    newNode.next = cur.next;
    cur.next = newNode;
  }

  // 移除
  remove(item) {
    let prevNode = this.findPrev(item);
    if (prevNode.next) {
      prevNode.next = prevNode.next.next ? prevNode.next.next : null;
    }
  }

  // 打印
  display() {
    let cur = this.head;
    while (cur) {
      console.log('element: ', cur.element);
      console.log('next: ', cur.next ? cur.next.element : null);
      cur = cur.next;
    }
  }

  // 尾部添加
  append(element) {
    const newNode = new Node(element);
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = newNode;
  }
}

const ll = new LinkedList('head');
ll.append('element-1');
ll.append('element-2');
ll.insert('element-1', 'element-3');
ll.display();
/**
  element:  head
  next:  element-1
  element:  element-1
  next:  element-3
  element:  element-3
  next:  element-2
  element:  element-2
  next:  null
 */
console.log('');

ll.remove('element-3');
ll.display();
/**
  element:  head
  next:  element-1
  element:  element-1
  next:  element-2
  element:  element-2
  next:  null
 */

console.log('');
ll.remove('element-2');
ll.display();
/**
  element:  head
  next:  element-1
  element:  element-1
  next:  null
 */
