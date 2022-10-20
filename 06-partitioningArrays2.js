// partition the array 2
// [2, 0, 4, 3, 0, 1, 0, 0] => [2,4,3,1,0,0,0,0]
// NOTE: zeroes will be after and order of non zero doesn't matter.

// same approach as 05 file but here we start from the lastIndex
// and then find zeroes then swap it with end
function partitionTheArray2(arr) {
  let end = arr.length - 1; // end is lastIndex
  for (let i = end; i > -1; i--) {
    if (arr[i] == 0) {
      [arr[end], arr[i]] = [arr[i], arr[end]];
      end--;
    }
  }
  console.log(arr);
  // Time : O(N)
  // Space : O(1) constant space
}
partitionTheArray2([2, 0, 4, 3, 0, 1, 0, 0]);
