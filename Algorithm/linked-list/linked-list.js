/**
 * 链表
 * 1、单向链表；next指向下一个节点
 * 2、双向链表；next指向下一个节点，prev指向上一个节点；
              增加一个last节点与head节点首尾对应
 * 3、循环链表；头尾节点相连
 */

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
 * 单向链表
 * @example `new LinkedList([1, 2])`: 
 *  {
    "head": {
      "element": 1,
      "next": {
        "element": 2,
        "next": null
      }
    }
  }
 * @description 概念：
 * 1、每个节点由next链接到下一个节点或null则是最后一个节点；
 * 2、查找的话需要从头开始，直到某个节点的值是目标节点；
 * 3、插入的话，先找到目标节点，再改变插入位置前一个节点的next节点为新插入的节点，新插入的节点的next节点则为原来这个位置的next节点；
 * 4、移除的话，类似插入，先找到目标节点，然后替换响应的next节点；
 * 5、尾部添加，找到最后一个next节点为空的，新建节点赋值给它；
 */
class LinkedList {
  constructor(list) {
    this.head = null;
    if (Array.isArray(list)) {
      list.forEach((item) => {
        this.append(item);
      });
    }
  }

  /**
   * 查找目标节点的前一个
   * @param {*} element 目标节点
   * @param {boolean} [lastOne=false] 是否最后一个符合条件的节点
   * @returns Node 目标节点的前一个节点
   * @memberof LinkedList
   */
  findPrev(element, lastOne = false) {
    if (this.head === null) return null;
    let prevNode = this.head;
    while (prevNode.next && prevNode.next.element !== element) {
      prevNode = prevNode.next;
    }
    // 匹配值的最后一个
    while (
      lastOne &&
      prevNode.next.next &&
      prevNode.next.next.element === element
    ) {
      prevNode = prevNode.next;
    }
    return prevNode;
  }

  /**
   * 查找节点
   * @param {*} element 目标节点
   * @param {boolean} [lastOne=false] 是否匹配值的最后一个
   * @returns {*} Node 查找的目标节点
   * @memberof LinkedList
   */
  find(element, lastOne = false) {
    if (this.head !== null && element === this.head.element) {
      return this.head;
    }
    const prevNode = this.findPrev(element, lastOne);
    return prevNode ? prevNode.next : null;
  }

  /**
   * 插入
   * @param {*} item 上一个节点
   * @param {*} element 新节点
   * @param {boolean} [lastOne=false] 是否匹配值的最后一个
   * @memberof LinkedList
   */
  insert(item, element, lastOne = false) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let cur = this.find(item, lastOne);
    newNode.next = cur.next;
    cur.next = newNode;
  }

  /**
   * 移除
   * @param {*} item 目标节点
   * @param {boolean} [lastOne=false] 是否匹配值的最后一个
   * @memberof LinkedList
   */
  remove(item, lastOne = false) {
    let prevNode = this.findPrev(item, lastOne);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next ? prevNode.next.next : null;
    }
  }

  /**
   * 尾部添加
   * @param {*} element 新增节点
   * @memberof LinkedList
   */
  append(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = newNode;
  }

  // 输出数组形式
  getList() {
    let cur = this.head;
    const list = [];
    while (cur) {
      list.push(cur);
      cur = cur.next;
    }
    return list;
  }

  display() {
    return JSON.stringify({ head: this.head }, null, 2);
  }
}

module.exports = LinkedList;
