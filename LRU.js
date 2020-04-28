/**
 * leetcode
 * LRU 缓存机制算法
 * @param {*} maxlength
 */
function LRU(maxlength) {
  this.maxLength = maxlength;
  this.cache = [];
}

LRU.prototype = {
  constructor: LRU,
  get: function (key) {
    const index = this.findIndex(key);
    // 移动到最前面
    if (index !== -1) {
      const item = this.cache[index];
      this.cache.splice(index, 1);
      this.cache.unshift(item);
      delete item;
      return this.cache[0].value;
    }
    return -1;
  },
  put: function (key, value) {
    const index = this.findIndex(key);
    if (index !== -1) this.cache.splice(index, 1);
    this.cache.unshift({ key, value });
    this.remove();
  },
  findIndex: function (key) {
    return this.cache.findIndex((item) => item.key === key);
  },
  remove: function () {
    if (this.cache.length > this.maxLength) {
      this.cache.pop();
    }
  },
};

const cache = new LRU(2);

cache.put(1, 1);
cache.put(2, 2);
console.log('cache.get(1): ', cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
console.log('cache.get(2): ', cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
console.log('cache.get(1): ', cache.get(1)); // 返回 -1 (未找到)
console.log('cache.get(3): ', cache.get(3)); // 返回  3
console.log('cache.get(4): ', cache.get(4)); // 返回  4
