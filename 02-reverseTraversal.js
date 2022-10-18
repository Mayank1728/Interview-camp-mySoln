// given an array of numbers repalce each even numbers with 2 of the same
// Don't allocate extra array the input array has enough space

// ESTVC process
/*
  E: Ask for examples, 
  S: come up with 1 more solutions
  T: develop Test Cases
  C: code
  V: verify

*/
// [1,3,4,0,5, , ]

// Two Pointer approach
function replaceEven(arr, trueIndex) {
  if (!arr) return null;
  let actualIndex = arr.length - 1;
  if (trueIndex > actualIndex) return false; // index out of bounds

  while (trueIndex) {
    let isEven = arr[trueIndex] % 2 === 0;
    if (isEven) {
      arr[actualIndex--] = arr[trueIndex];
      arr[actualIndex--] = arr[trueIndex];
    } else {
      arr[actualIndex--] = arr[trueIndex];
    }
    trueIndex--;
  }
  console.log(arr);

  // Time : O(N) here N is the trueLength of the array
  // Space : O(1) no extra memory required
}
replaceEven([1, 2, 6, 7, 9, 4, , , ,], 5);
