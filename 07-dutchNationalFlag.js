// The dutch National Flag problem
// [1,4,5,6,2,4,4,3] => [1,2,3,4,4,4,5,6]

// [a, b] = [b, a] swaps the variables a and b in js

// My bruteforce solution
function dnf1(arr, pivot) {
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      start++;
    }
  }
  console.log(arr);
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === pivot) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      start++;
    }
  }
  console.log(arr);
  // Time : O(2N)
  // Space : O(1)
}

// Optimized version
/*
    1. start = 0, end = lastIndex , runner = 0.
    2. runner is always less than end why ?
        2.1 because the numbers on the right side of end are
            already greater than the pivot so no need to check
            numbers after end
    3. if you find a number smaller than pivot swap it with start
        then increment start(so that it moves forward)
    4. if you find number grater than pivot swap it with end then
        decrese end (so that it moves backwards)
    5. Don't think about numbers equal to pivot it will fall into its 
       place as there is no other condition left.
*/
function dnf(arr, pivot) {
  let start = 0;
  let end = arr.length - 1;
  let runner = start;
  console.log(arr);
  while (runner < end) {
    if (arr[runner] < pivot) {
      [arr[runner], arr[start]] = [arr[start], arr[runner]];
      start++;
    } else if (arr[runner] > pivot) {
      [arr[runner], arr[end]] = [arr[end], arr[runner]];
      end--;
    }
    console.log(arr);
    runner++;
  }
  // Time : O(N)
  // Space : O(1)
}
dnf([1, 4, 5, 6, 2, 4, 4, 3], 4);
