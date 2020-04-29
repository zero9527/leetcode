/**
 * 数组 reduce 实现
 * 作用：
 * 1、方法有两个参数：[1]回调函数fn，[2]fn第一个形参的默认值 acc；
 *   回调函数fn有两个参数(acc, cur)，acc：[2]或者回调函数fn上次的返回值
 * 2、最后返回 回调函数的返回值，没有的就是 undefined
 * @returns 返回回调函数的返回值
 */
Array.prototype._reduce = function () {
  var arr = this;
  var callback = arguments[0]; // 第一个参数：回调函数
  var acc = arguments[1]; // 第二个参数，回调函数第一个形参的默认值

  if (typeof callback !== 'function') {
    console.log('[warn]: 第一个参数需要是函数！');
    return;
  }

  // 1：for
  for (var i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }

  // 2：while
  // var i = 0;
  // while (i < arr.length) {
  //   acc = callback(acc, arr[i]);
  //   i++;
  // }

  return acc;
};

const list = [1, 2, 3, 4, 5];
const res = list._reduce((acc, cur) => {
  acc += cur;
  return acc;
}, 0);
console.log('res: ', res); // 15

const res2 = list._reduce((acc, cur) => {
  acc.push(cur * 2);
  return acc;
}, []);
console.log('res2: ', res2); // [2, 4, 6, 8, 10]
