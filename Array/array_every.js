/**
 * 数组 every 方法实现
 * 作用：按照回调函数的返回值，遍历数组，所有item都符合条件则返回true，否则false
 * @returns boolean
 */
Array.prototype._every = function () {
  var arr = this;
  var callback = arguments[0];

  var res = true;
  for (var i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      res = false;
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
const allHas = arr._every((i) => i.name.includes('h'));
console.log(allHas); // true

const allHas2 = arr._every((i) => i.name.includes('g'));
console.log(allHas2); // false
