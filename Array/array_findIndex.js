/**
 * 数组 findIndex 方法实现
 * 作用：查找第一个符合回调函数 返回值的 item，只查一个
 * @returns 返回符合条件的 item的下标
 * tip：实现了find方法，调用一下得到item，
 * 再用数组的indexOf方法得到这个item的下标
 */
Array.prototype._findIndex = function () {
  var arr = this;
  var callback = arguments[0];

  return arr.indexOf(arr.find(callback));
};

const arr = [
  { id: 1, name: 'haha' },
  { id: 2, name: 'hehe' },
  { id: 3, name: 'heihei' },
];
const item = arr._findIndex((i) => i.name === 'haha');
console.log(item); // 0

const item2 = arr._findIndex((i) => i.name === 'heihei');
console.log(item2); // 2
