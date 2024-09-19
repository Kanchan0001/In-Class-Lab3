//Challenge 1
const arr = [1,2,3,4,5];
arr.reverse();
arr.unshift(6);
arr.push(0);

//Challenge 2
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

const arr3 = [...new Set(arr1.concat(arr2))];

console.log(arr3);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

