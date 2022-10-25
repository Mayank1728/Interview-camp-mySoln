// Find floor of the given target from an array.
// floor : greatest number less than or equal to the target in the array.
// [10, 20, 30, 40, 50], target = 23 => 2 (index 2 has 20)
// [10, 20, 30, 40, 50], target = 49 => 3 (index 3 has 40)

function binarySearchFloor(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      console.log('Target found at ' + mid);
      return true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(`Floor of target is ${arr[end]}, index: ${end}`);
}
binarySearchFloor([10, 20, 30, 40, 50], 100);
