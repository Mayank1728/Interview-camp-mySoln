// [1, 12, 32, 45, 78, 92, 100], target = 12
// [1, 21, 23, 54, 87, 100] target = 87

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
  // Time : O(logN)
  // Space : O(1)
}
console.log(binarySearch([1, 21, 23, 54, 87, 100], 87));
