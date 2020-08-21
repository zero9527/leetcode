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
    if (prevNode.next && prevNode.next.next) {
      prevNode.next = prevNode.next.next;
    }
  }

  // 打印
  display() {
    let cur = this.head;
    while (cur) {
      console.log('element: ', cur.element);
      if (cur.next) console.log('next: ', cur.next.element);
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
console.log('');

ll.remove('element-2');
ll.display();
