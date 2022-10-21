// Given an array of integers return the max subarray
// subarray means array made of contigious elements
// Ex- [3,5,2,1] subarrays can be [3], [5], [2,1] BUT NOT [5, 1]
// as [5,1] are not continious.

// Random Test Cases
/*
  [-2, -3, 4] => 4
  [1, 5, -2] => 6
  [4, -2, -1, 8] => 9
*/

// Fun fact: It took kadane less than 1 minute to solve maxSubarray
//           problem in linear time. But it took me just 7 hours
//           to understand and program it.

// Here we will solve the question in O(N) time
// Kadane's Algorithm

/*
  Example array : [2, -3, 5, -1]
  lets just think it was [2]
  what is maximum sum ? its 2, obv as there is only 1 element.
  Now lets expand it [2, -3]
  what is maxSum now ? 
  Possiblilites are : (2, -3) or (-3) why not just (2) ?
  (2, -3) => -1
  (-3) => -3
  so we choose (2, -3) so maxSum is -1
  expanding again [2, -3, 5]
  Meaning should you take sum of [2, -3, 5] or start new sum from [5] ?
  2 + (-3) + 5 = 4
  5 = 5
  currSum = 5 and Meaning you should start from [5]
  So maxSum previously was -1. Now -1 vs 5, so maxSum = 5.
  expanding again [2, -3, 5, -1]
  should you take sum of  [2, -3, 5, -1] or start new sum from [-1] ?
   we know that maxSum of [2, -3, 5, -1] = MaxSum([2,-3,5]) + (-1)
                                         = 5 + (-1)
                                         = 4
   And sum of subarray [-1] is -1
   4 VS -1
   So currSum = 4
   We compare currSum with MaxSum = 5 and so MaxSum is still 5.
*/

function maxSubarraySum(arr) {
  let MaxSum = arr[0];
  let currSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (currSum + arr[i] < arr[i]) {
      currSum = arr[i];
    } else {
      currSum = currSum + arr[i];
    }
    if (currSum > MaxSum) {
      MaxSum = currSum;
    }
  }
  console.log(MaxSum);
  // Time : O(N)
  // Space : O(1)
}
maxSubarraySum([2, -3, 5, -1]);
