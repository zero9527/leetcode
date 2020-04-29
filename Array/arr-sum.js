/**
 * 找出相加和为sum的两个数
 * @param {*} arr 整数集合
 * @param {*} sum 和
 */
function getSumItem(arr, sum) {
  if (arr.length <= 1) return;

  const itemList = [];
  const indexList = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        itemList.push([arr[i], arr[j]]);
        indexList.push([i, j]);
      }
    }
  }
  return { itemList, indexList };
}

const arr1 = [2, 7, 11, 15, 1, 8, 3, 6];
const sumItems1 = getSumItem(arr1, 9);
console.log(sumItems1.itemList); // [ [ 2, 7 ], [ 1, 8 ], [ 3, 6 ] ]
console.log(sumItems1.indexList); // [ [ 0, 1 ], [ 4, 5 ], [ 6, 7 ] ]

const arr2 = [2, 5, 11, 15, 1, 8, 3, 6];
const sumItems2 = getSumItem(arr2, 7);
console.log(sumItems2.itemList); // [ [ 2, 5 ], [ 1, 6 ] ]
console.log(sumItems2.indexList); // [ [ 0, 1 ], [ 4, 7 ] ]
