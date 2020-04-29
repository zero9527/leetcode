/**
 * 数组扁平化、去重、排序
 */
const list = [1, [2, 3, 8], [3, 6, 4], [5, [6, 7, [8, 1, 2]]]];

/* ====== 扁平化 ====== */
function flat(arr) {
  return arr.reduce((acc, cur) => {
    acc = acc.concat(Array.isArray(cur) ? flat(cur) : cur);
    return acc;
  }, []);
}

/* ====== 数组去重 ====== */
function unique(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, []);
}

/* ====== 排序 ====== */
// 冒泡排序
function pupleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const mid = arr.shift(arr);

  arr.forEach((item) => {
    if (item <= mid) left.push(item);
    else right.push(item);
  });

  return quickSort(left).concat(mid).concat(quickSort(right));
}

const flatArr = flat(list);
console.log('flatArr: ', flatArr); // [1, 2, 3, 8, 3, 6, 4, 5, 6, 7, 8, 1, 2]

const uniArr = unique(flatArr);
console.log('uniArr: ', uniArr); // [1, 2, 3, 8, 6, 4, 5, 7]

// const sortArr = pupleSort(uniArr); // [1, 2, 3, 4, 5, 6, 7, 8]
const sortArr = quickSort(uniArr); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log('sortArr: ', sortArr);
