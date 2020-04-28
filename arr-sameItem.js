/**
 * 查找 arr1与arr2之间的交集
 * @param {*} arr1
 * @param {*} arr2
 */
const sameItem = (arr1, arr2) => arr1.filter((i) => arr2.includes(i));

const arr1 = [1, 2, 3, 4, 2, 1];
const arr2 = [3, 4, 5, 6, 3, 4];
console.log(sameItem(arr1, arr2)); // [3, 4]
