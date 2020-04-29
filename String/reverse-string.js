/**
 * 判断字符串是否是回文字符串
 * @param {*} str
 */
function isReverseString(str) {
  if (typeof str !== 'string') return false;
  // 方法1：reverse
  // return str.split('').reverse().join('') === str;

  // 方法2
  const strArr = str.split('');
  let reverseStr = '';
  let len = strArr.length - 1;
  while (len >= 0) reverseStr += strArr[len--];
  return str === reverseStr;
}

console.log(isReverseString('asddsa')); // true
console.log(isReverseString('asdDsa')); // false
console.log(isReverseString('13dffd31')); // true
