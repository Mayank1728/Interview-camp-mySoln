// find if the array has Duplicates
//   return true if the array contains duplicate
//   else return false

// 1. Bruteforce approach
//    fix one element, and look for it in the rest of the array
function findDupBrute(arr) {
  if (!arr) return null;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(`Duplicates at ${i} and ${j} index`);
        return true;
      }
    }
  }
  return false;
  // Time : O(N^2)
  // Space : O(1)
}

// 2. Sorting approach
//    Sort the array, then check if next of current element is same
function findDupSort(arr) {
  if (!arr) return null;
  // for simplicity we assume Quicksort in place sorting is applied
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
  // Time : O(NlogN + N) = O(NlogN), NlogN for sorting + N for loop
  // Space : O(1) const time as in place sorting is used
}

// 3. HashMap approach
// We are using hashmap to keep track of the elements
// if an element occurs more than once we return true.
function findDupHash(arr) {
  if (!arr) return null;

  let map = {};
  for (let i = 0; i < arr.length; i++) {
    // when u look for key which is not present in the map
    // map returns undefined so condition is true
    if (!map[arr[i]]) {
      // & we create an entry in the map
      map[arr[i]] = 1;
    } else {
      // as element has already occured in the map
      return true;
    }
  }
  return false;
  // Time : O(N) for looping through the array
  // Space : O(N) hashmaps are very fast but requrire lots of space
}
