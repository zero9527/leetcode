/**
 * 验证有效括号 '{', '}', '[', ']', '(', ')'
 * 思路：
 * 1、遍历字符串
 * 2、遇到左括号，入栈
 * 3、遇到右括号，出栈，
 *    同时对比出栈的这个左括号，与当前遍历的右括号是否组成完整括号；
 *    是的话继续遍历，否的话返回false，结束遍历
 * 4、最后判断栈的长度，如果=0，则有效，否则无效
 */
function validBrackets(str) {
  if (!str.length) return true;
  const stack = [];
  const left = ['{', '[', '('];
  const right = ['}', ']', ')'];

  const matchStr = (popStr, s) => {
    return left.indexOf(popStr) === right.indexOf(s);
  };

  for (let i = 0; i < str.length; i++) {
    if (left.includes(str[i])) {
      stack.push(str[i]);
    }
    if (right.includes(str[i])) {
      const popStr = stack.pop();
      if (matchStr(popStr, str[i])) continue;
      else return false;
    }
  }

  return stack.length === 0;
}

const str1 = '()';
const str2 = '()[]{}';
const str3 = '(]';
const str4 = '([)]';
const str5 = '{[]}';
const str6 = '{[(){}]}';
console.log(validBrackets(str1)); // true
console.log(validBrackets(str2)); // true
console.log(validBrackets(str3)); // false
console.log(validBrackets(str4)); // false
console.log(validBrackets(str5)); // true
console.log(validBrackets(str6)); // true
