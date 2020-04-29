/**
 * 翻转字符串里的单词
 * @param {*} str
 * @returns
 */
function reverseWords(str) {
  // 方法1：reverse
  // return str.split(' ').reverse().filter(Boolean).join(' ');

  // 方法2：手动翻转
  const strArr = str.split(' ').filter(Boolean);
  const newArr = [];
  let len = strArr.length;
  while (len-- > 0) {
    newArr.push(strArr[len]);
  }
  return newArr.join(' ');
}

console.log(reverseWords('hello   word!')); // word! hello
console.log(reverseWords('the   sky   is blue')); // blue is sky the
