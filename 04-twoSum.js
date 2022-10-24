// Two sum problem
// Given an SORTED array, find 2 elements which add upto the target
// [1, 2, 4], target = 6 => [2,3]

// using 2 pointer approach
function twoSum(arr, target) {
  if (!arr) return false;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target) {
      return [start, end];
    }
    // if sum < target move start forward to increase the sum
    else if (sum < target) {
      start++;
    }
    // if sum > target move end backwards to decrease the sum
    else {
      end--;
    }
  }
  // This means target cannot be made
  return false;
}
console.log(twoSum([1, 2, 4, 5, 6], 9));
