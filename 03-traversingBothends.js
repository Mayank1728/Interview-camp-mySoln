// reverse the elements of the  array

// 1. Bruteforce approach
function reverseArrBrute(arr) {
  let arrCopy = [];
  let start = 0;
  for (let i = arr.length - 1; i > -1; i--) {
    arrCopy[start++] = arr[i];
  }
  console.log(arrCopy);
  // Time : O(N)
  // Space : O(N)
}
reverseArrBrute([5, 4, 3, 2, 1, 6]);

// 2. Two pointer inplace approach
function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log(arr);
  // Time : O(N)
  // Space : O(1)
}
reverseArr([5, 4, 3, 2, 1, 6]);
