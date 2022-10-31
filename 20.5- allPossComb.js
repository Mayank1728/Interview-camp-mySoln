// Generate all possible combinations of ['a', 'b', 'c']
// BruteForce Approach
function possibleComb(arr) {
  // 1. Base case
  if (arr.length === 0) {
    return [[]];
  }
  let firstEl = arr[0];
  let restEl = arr.slice(1); // returns arr from index 1 to lastIndex
  let combWithoutFirst = possibleComb(restEl);
  // [ [], ['b'], ['c'], ['b', 'c']]
  let combWithFirst = [];
  for (let i = 0; i < combWithoutFirst.length; i++) {
    let comb = [...combWithoutFirst[i]];
    // deep copy each nested array at i th index
    // This is done so that i don't destroy the original combWithoutFirst
    // Array.

    comb.push(firstEl);
    // Now push firstEl to comb

    combWithFirst.push(comb);
    // Now push the result in combWithFirst array
  }
  return [...combWithoutFirst, ...combWithFirst];
  // Time : O()
  // Space : O()
}
console.log(possibleComb(['a', 'b', 'c']));
