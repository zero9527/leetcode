/**
 * 数组 find 方法实现
 * 作用：查找第一个符合回调函数 返回值的 item，只查一个
 * @returns 返回符合条件的 item
 */
Array.prototype._find = function () {
  var arr = this;
  var callback = arguments[0];

  var item;
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      item = arr[i];
      break;
    }
  }

  return item;
};

const arr = [
  { id: 1, name: 'haha' },
  { id: 2, name: 'hehe' },
  { id: 3, name: 'heihei' },
];
const item = arr._find((i) => i.name === 'haha');
console.log(item); // {id: 1, name: "haha"}

const item2 = arr._find((i) => i.name === 'heihei');
console.log(item2); // {id: 1, name: "heihei"}
