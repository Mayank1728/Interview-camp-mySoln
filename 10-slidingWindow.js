// Subarray sliding window
//index :  0  1  2  3  4  5  6  7
//arr     [5, 3, 1, 7, 6, 4, 2, 3], 14 => [2, 4]

function slidingWindow(arr, target = 0) {
  let start = 0;
  let end = 0;
  let sum = arr[start];
  const len = arr.length;
  while (start < len) {
    if (sum === target) {
      console.log('true');
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
    //               end = start and sum is reinitialized to arr[sum]
    if (start > end) {
      end = start;
      sum = arr[start];
    }
  }
  // Target cannot be created so return false.
  console.log('Value cannot be created!!');
  return false;
}
slidingWindow([5, 3, 1, 7, 6, 4, 2, 3]);
