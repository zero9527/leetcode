/**
 * 数组 filter 方法实现
 * 作用：查找符合回调函数返回值的item,
 * @returns 返回所有item的集合
 */
Array.prototype._filter = function () {
  var arr = this;
  var callback = arguments[0];

  var list = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) list.push(arr[i]);
  }

  return list;
};

const arr = [1, 2, 3, 4, 56, 7, 89, 32];
const item = arr._filter((i) => i % 2 === 0);
console.log(item); // [2, 4, 56, 32]

const item1 = arr._filter((i) => i % 2 !== 0);
console.log(item1); // [1, 3, 7, 89]
