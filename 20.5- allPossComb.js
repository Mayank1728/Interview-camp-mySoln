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
  // [ [],['c']]
  let combWithFirst = [];
  for (let i = 0; i < combWithoutFirst.length; i++) {
    // Actually this can be understood as
    let comb = [...combWithoutFirst[i]];
    // comb = combWithoutFirst[i]
    // but as js passes arrays as reference not values
    // so we use spread operator to deep copy
    // not to destory the original array accidentally

    comb.push(firstEl);
    // Now push firstEl to comb

    combWithFirst.push(comb);
    // Now push the result in combWithFirst array
  }
  return [...combWithoutFirst, ...combWithFirst];
  // Time : O()
  // Space : O()
}
//console.log(possibleComb(['a', 'b', 'c']));

// Iterative approach
// ['a', 'b', 'c']

function iterativeComb(arr = ['a', 'b', 'c', 'd']) {
  // [[], ['b']]
  let comb = [[]];
  for (let i = 0; i < arr.length; i++) {
    let subSets = JSON.parse(JSON.stringify(comb));
    for (let j = 0; j < subSets.length; j++) {
      subSets[j].push(arr[i]);
      comb.push(subSets[j]);
    }
  }
  console.log(comb);
  // Time : O()
  // Space : O()
}
iterativeComb();
