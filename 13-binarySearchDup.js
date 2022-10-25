// Binary Search duplicates
//  0  1  2  3  4  5
// [1, 2, 3, 3, 3, 5] and target = 3
// returns 2 as its the first occurence of the target

/* 
   Logic: apply binary search to find any occurence of the number
          then the first occurence will always be found in the left
          side of the array.
*/
function binarySearchDup(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let pos = null;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      // update pos when you find the target
      pos = mid;
      // check whether it exists in the left half
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  if (pos === null) {
    return false;
  } else {
    console.log(`first index is ${pos}`);
    return true;
  }
  // Time : O(logN)
  // Space : O(1)
}
console.log(binarySearchDup([1, 2, 3, 3, 4, 5, 5], 5));
