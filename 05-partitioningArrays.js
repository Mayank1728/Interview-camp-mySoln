// partition the array
// [2, 0, 4, 3, 0, 1, 0, 0] => [0,0,0,0,2,4,3,1]
// NOTE: zeroes will be first and order of non zero doesn't matter.
// follow up : do this in place which means O(1) space.

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

// [2, 0, 4, 3, 0, 1, 0, 0]
// Here we start from zeroIndex and look for 0
// then swap zeroIndex with that index value
function zeroesOpt(arr) {
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      start++;
    }
  }
  console.log(arr);
  // Time : O(N)
  // Space : O(1)
}
zeroesOpt([2, 0, 4, 3, 0, 1, 0, 0]);

// Variables names: cloud, boundary, runner, blanket, fast, slow etc
