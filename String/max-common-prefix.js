/**
 * 最长公共前缀
 * @param {*} arr
 * 方法1思路：
 * 1、最短项的长度
 * 2、按长度获取可能的公共前缀，没有公共项或者达到“1、”的长度后结束遍历
 * 3、返回所有公共集合中的最长项
 */
function getMaxCommonPrefix1(arr) {
  if (!arr || !Array.isArray(arr) || !arr.length) return '';
  if (arr.length === 1) return arr[0];

  const minItemLength = getItem(arr, false).length;
  const startsWidth = (str, start) => str.indexOf(start) === 0;

  // MAX：true获取最长的项，false获取最短的项
  function getItem(list, MAX = true) {
    return list.reduce((prev, cur) => {
      if (cur.length > prev.length === MAX) prev = cur;
      return prev;
    }, list[0]);
  }

  // 按长度获取所有公共前缀的集合
  function getCommon(list, len = 1, allCommon = []) {
    const commonStr = list[0].substr(0, len);
    const invalid = list.some((i) => !startsWidth(i, commonStr));
    if (invalid || len > minItemLength) return allCommon;
    return getCommon(list, len + 1, [...allCommon, commonStr]);
  }

  // 返回所有公共前缀中最长的项
  return getItem(getCommon(arr)) || '';
}

// 方法2：利用charAt对比
function getMaxCommonPrefix2(arr) {
  if (!arr || !Array.isArray(arr) || !arr.length) return '';
  if (arr.length === 1) return arr[0];

  let maxCommonPrefix = '';
  const minItem = getMinItem(arr);
  const minItemArr = minItem.split('');
  const leftArr = arr.filter((i) => i !== minItem);

  function getMinItem(list) {
    return list.reduce((prev, cur) => {
      if (cur.length < prev.length) prev = cur;
      return prev;
    }, list[0]);
  }

  for (let i = 0; i < minItemArr.length; i++) {
    // 只要有一个不是所有item都有的，就退出循环
    if (leftArr.some((item) => minItemArr[i] !== item.charAt(i))) break;
    maxCommonPrefix += minItemArr[i];
  }

  return maxCommonPrefix;
}

// const g = getMaxCommonPrefix1;
const g = getMaxCommonPrefix2;
console.log(g(['acs', 'a1c', 'acsk', 'acsk'])); // a
console.log(g(['acs', 'fac', 'acsk', 'acsk'])); // ''
console.log(g(['acs'])); // 'acs'
console.log(g([])); // ''
