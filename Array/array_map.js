/**
 * 数组 map 方法实现
 * 作用：循环数组，按照回调函数的返回值作为item，返回item组成的集合
 * @returns 返回item组成的集合
 */
Array.prototype._map = function () {
  var arr = this;
  var callback = arguments[0];

  var list = [];
  for (var i = 0; i < arr.length; i++) {
    list.push(callback(arr[i], i));
  }

  return list;
};

const arr = [
  { id: 1, name: 'haha' },
  { id: 2, name: 'hehe' },
  { id: 3, name: 'heihei' },
];
const item = arr._map((i) => i.name);
console.log(item); // ["haha", "hehe", "heihei"]

const item2 = arr._map((i) => i.id);
console.log(item2); // [1, 2, 3]

const item3 = arr._map((i) => ({ id: i.id, name: i.name + '-11' }));
console.log(item3);
/**
 * [
    { id: 1, name: 'haha-11' },
    { id: 2, name: 'hehe-11' },
    { id: 3, name: 'heihei-11' }
  ]
 */
