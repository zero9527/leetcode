console.log('script start');

async function f1() {
  console.log('f1 start');
  await f2();
}

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async function f2() {
  console.log('f2 start');
}

f1();

new Promise((resolve) => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
});

console.log('script end');

/**
 * 打印：
 * script start
 * f1 start
 * f2 start
 * promise1
 * script end
 * promise2
 * setTimeout
 */
