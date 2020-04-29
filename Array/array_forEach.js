/**
 * 数组 forEach 方法实现
 * 作用：循环数组，将(item, index)传给回调函数，并执行回调函数
 */
Array.prototype._forEach = function () {
  var arr = this;
  var callback = arguments[0];

  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};

const arr = [1, 2, 34, 56, 7, 8];
const item = arr._forEach((i) => console.log(i)); // 1 2 34 56 7 8
