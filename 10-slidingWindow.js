// Subarray sliding window : Type 1

// Given an array of positive integers, find the subarray that add
// upto a given number.

//index :  0  1  2  3  4  5  6  7
//arr     [5, 3, 1, 7, 6, 4, 2, 3], 14 => [2, 4]

// Edge cases explaination with example
/*
  Approach: Because all numbers are positive, increasing the size
            of the window will increase the sum and decreasing 
            size of the window will decrease the sum.
*/
/*
  Edge case 2: 
      [5, 3, 1], target = 4
      start = 0, end = 0;
      now sum = 5 and as sum > target start will become 1 and end is 0
      so to tackle this edge case I made the if condition
      whenever start > end make, end = start and sum = arr[start]
      for new sum.
  
  Edge case 1:
      [5, 3, 1], target = 10
        1. start = 0, end = 0, sum = 5 and as sum < target
          end becomes 1. then sum = sum + arr[end] so sum = 8
        2. Now start = 0, end = 1, sum = 8. And sum < target
          end becomes 2. sum = sum + arr[end] = 9.
        3. Now start = 0, end = 2, sum = 9. Still sum < target
          so Now we check whether incrementing end will make it 
          out of bound ? if yes then break; or else continue.          
*/
function slidingWindow(arr, target) {
  let start = 0;
  let end = 0;
  let sum = arr[start];
  const len = arr.length;
  while (start < len) {
    if (sum === target) {
      console.log(start, end);
      return true;
    } else if (sum < target) {
      // Edge case 1: when sum is too low but your end pointer
      //              is on last index incrementing it now will
      //              make it out of bounds
      if (end + 1 > len) {
        console.log('End pointer went out of bounds!!');
        return false;
      }
      // first increment end pointer
      // then add the vale present at end pointer
      sum = sum + arr[++end];
    } else {
      // first remove the arr[start] value from the sum
      // then increment the start pointer.
      sum = sum - arr[start++];
    }
    // Edge case 2 : when start becomes greater than end
    //               make end = start and sum is reinitialized to arr[sum]
    if (start > end) {
      end = start;
      sum = arr[start];
    }
  }
  // Target cannot be created so return false.
  console.log('Value cannot be created!!');
  return false;
  // we traverse each element in the array at most 2 times in the worst case
  // Time : O(2N) = O(N)
  // Space : O(1)
}
slidingWindow([5, 3, 1, 7, 6, 4, 2, 3], 4);
