/**
 * 数组 some 方法实现
 * 作用：按照回调函数的返回值，查找符合条件的item，有结果则返回true，否则false
 * @returns boolean
 */
Array.prototype._some = function () {
  var arr = this;
  var callback = arguments[0];

  var res = false;
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      res = true;
      break;
    }
  }

  return res;
};

const arr = [
  { id: 1, name: 'haha' },
  { id: 2, name: 'hehe' },
  { id: 3, name: 'heihei' },
];
const hasItem = arr._some((i) => i.name === 'haha');
console.log(hasItem); // true

const hasItem2 = arr._some((i) => i.name === 'haha1');
console.log(hasItem2); // false
