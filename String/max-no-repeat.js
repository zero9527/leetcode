/**
 * 无重复字符的最长子串
 * @param {*} str
 */
function getMaxNoRepeat(str) {
  if (typeof str !== 'string') return '';

  const strArr = str.split('');
  let count = 0;

  // 方法1：forEach
  // let acc = [];
  // strArr.forEach((item) => {
  //   if (!acc[count]) acc[count] = '';
  //   if (!acc[count].includes(item)) {
  //     acc[count] += item;
  //   } else {
  //     acc.push(item);
  //     count++;
  //   }
  // });
  // return getMaxItem(acc);

  // 方法2：reduce
  const res = strArr.reduce((acc, cur) => {
    if (!acc[count]) acc[count] = '';
    if (!acc[count].includes(cur)) {
      acc[count] += cur;
    } else {
      acc.push(cur);
      count++;
    }

    return acc;
  }, []);

  return getMaxItem(res);
}

// 获取最长的项
function getMaxItem(list) {
  return list.reduce((prev, cur) => {
    if (cur.length > prev.length) prev = cur;
    return prev;
  }, list[0]);
}

const g = getMaxNoRepeat;
const str = g('assffggewss');
console.log('match: %o, length: %o', str, str.length); // match: gews, length: 4

const str1 = g('abcabcbb');
console.log('match: %o, length: %o', str1, str1.length); // str: abc, length: 3

const str2 = g('pwwkew');
console.log('match: %o, length: %o', str2, str2.length); // str: wke, length: 3
