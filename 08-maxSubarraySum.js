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

// 1. Naive BruteForce approach
// find the sum of all the possible subarrays then find which one is max
function maxSub(arr) {
  let maxSum = -Infinity;
  // start is starting index of the subarray
  for (let start = 0; start < arr.length; start++) {
    // end is the ending index of the subarray
    for (let end = start; end < arr.length; end++) {
      let currSum = 0;
      // runner goes from start to the end
      // sums all the element in the subarray
      for (let runner = start; runner <= end; runner++) {
        currSum = currSum + arr[runner];
      }
      // if the currSum is greater than maxsum
      // then change maxSum
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }
  console.log(maxSum);
  // Time : O(N^3)
  // Space : O(1)
}
maxSub([4, -2, -1, 8]);

// 2. Optmized BruteForce Approach
// Follow up instead of O(N^3) time complexity I will accomplish
// the same thing in O(N^2) time. How ?
/*
  Lets take an example in the previous code
  index : 0   1   2  3
   arr : [4, -2, -1, 8]
   when start = 0 and end = 2
    runner sums up arr[0] + arr[1] + arr[2] = 1
   AND when start = 0 and end = 3
    runner sums up arr[0] + arr[1] + arr[2] + arr[3] = 9
   
    DID YOU NOTICE THE REPETITION ? 
   Even though we had computed sum till index 2, then computing the sum
   till index 3 we AGAIN STARTED summing from 0th index to 3rd Index.
  
   Here we Stared remembering the sum. This means 
   the sum of elements from index 0 to index 3 was:
    sum from 0 to 2 + element at index 3
   Sum from 0 to 2 got already covered in the previous step.
*/
function optMaxSub(arr) {
  let maxSum = 0;
  for (let start = 0; start < arr.length; start++) {
    let currSum = 0;
    for (let end = start; end < arr.length; end++) {
      currSum = currSum + arr[end];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }
  console.log(maxSum);
  // Time : O(N^2) much better than previous one
  // Space : O(1)
}
optMaxSub([4, -2, -1, 8]);
