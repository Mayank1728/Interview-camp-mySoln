// partition the array
// [2, 0, 4, 3, 0, 1, 0, 0] => [0,0,0,0,2,4,3,1]

// Todo: Solve this in O(1) space complexity.

// Brute Force approach
// scan the array and push all the zeroes
// then push all the non-zero values
function zeroesInFront(arr) {
  let a = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    // if zero, push the value in the array
    if (arr[i] === 0) {
      a[counter++] = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    // Here push the value if its non-zero
    if (arr[j]) {
      a[counter++] = arr[j];
    }
  }
  console.log(a);
  // Time : O(N + N) = O(N)
  // Space : O(N) as new array of same size was created
}
zeroesInFront([2, 0, 4, 3, 0, 1, 0, 0]);
