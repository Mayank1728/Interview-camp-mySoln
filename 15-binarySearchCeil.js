// Find Ceil of the given target from an array.
// Ceil : smallest number greater than or equal to the target in the array.
// [10, 20, 30, 40, 50], target = 23 => 2 (index 2 has 30)
// [10, 20, 30, 40, 50], target = 49 => 4 (index 4 has 50)

/* 
   Logic: 
   Whenever you don't find exact match for target what happens it
   end will always point to the floor of the number and start will
   always point to the ceil of the number.
*/
function binarySearchCeil(arr, target) {
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
  console.log(`Ceil of target is ${arr[start]}, index: ${start}`);
}
binarySearchCeil([10, 20, 30, 40, 50], 12);
