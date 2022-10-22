/* 
Given a sorted array in non-decreasing order, return an array 
of squares of each number, also
in non-decreasing order. For example:
[-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]

How can you do it in O(n) time? 
*/

// 1. BruteForce Approach
//   1.1 loop through and get the squares of each element
//       [-4, -2, 1, 0, 3, 5] => [16, 4, 1, 0, 9, 25]
//   1.2 Now sort this new array
//       [0, 1, 4, 9, 16, 25]

function sortedSQBrute(arr) {
  // looping through took O(N) time
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  // Sorting the new array took O(NlogN) assuming quickSort took place
  arr.sort((a, b) => a - b);
  console.log(arr);
  // Time : O(N + NlogN) = O(NlogN)
  // Space : O(1) constant space
}
sortedSQBrute([-4, -2, 1, 0, 3, 5]);

// 2. Two Pointer approach
function sortedSquare(arr) {
  let start = 0;
  let end = arr.length - 1;
  // initializing a new array of same size as arr
  let a = new Array(end + 1);
  let lastPos = end;
  while (start <= end) {
    // if arr[start] is greater, put its square in the last position
    if (Math.abs(arr[start]) > Math.abs(arr[end])) {
      a[lastPos--] = arr[start] * arr[start];
      start++;
    }
    // else if arr[end] is greater, puts its square in the last pos
    else {
      a[lastPos--] = arr[end] * arr[end];
      end--;
    }
  }
  console.log(a);
  // Time : O(N)
  // Space : O(N)
  // Todo : Achieve this in O(1) space
}
sortedSquare([-4, -2, 1, 0, 3, 5]);
