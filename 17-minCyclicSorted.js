function minCyclic(arr) {
  let start = 0;
  let end = arr.length - 1;
  let lastIndex = end;
  let minValue = Infinity;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < minValue) {
      minValue = arr[mid];
    }
    if (arr[mid] > arr[lastIndex]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(minValue);
  // Time : O(logN)
  // Space : O(1)
}
minCyclic([7, 8, 9, 10, 14, 6]);

// Test Cases
//  0  1  2  3  4  5
// [7, 8, 1, 2, 4, 6]

//  0  1  2  3  4  5
// [7, 8, 9, 2, 4, 6]

//  0  1  2  3  4  5
// [7, 8, 9, 10, 4, 6]

//  0  1  2  3  4  5
// [7, 8, 9, 1, 2, 6]

//  0  1  2  3  4  5
// [7, 0, 1, 2, 3, 6]

//  0  1  2  3  4  5
// [7, 8, 9, 11, 14, 6]
