/**
 * 验证有效括号 '{', '}', '[', ']', '(', ')'
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
console.log(validBrackets(str1));
console.log(validBrackets(str2));
console.log(validBrackets(str3));
console.log(validBrackets(str4));
console.log(validBrackets(str5));
console.log(validBrackets(str6));
