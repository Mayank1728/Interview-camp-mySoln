// Given an array return the indicies of subarray
// which sum up to 0
// Ex- [-1, -5, 3, -1, 2] => [0, 4]
//     [2, -4, 5, -1, -2] => [[0,4], [1,3]]
function prefixSum(arr) {
  let sum = 0;
  let map = {};
  let soln = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum === 0) {
      console.log('Sums to zero till ' + i);
      soln.push([0, i]);
    }
    if (!map[sum]) {
      map[sum] = i;
    }
    // This else statement is not working
    else {
      soln.push([map[sum] + 1, i]);
    }
  }
  console.log(map);
  console.log(soln);
}
prefixSum([2, -4, 5, -1, -2]);
