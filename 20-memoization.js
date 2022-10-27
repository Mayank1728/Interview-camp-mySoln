// Memoization
// We use memoization to optimize our code
// we store the previously calculated values inside a hashmap
/* 
   Why does the fibonacci sequence has almost O(2^N) runtime ?

   Due to the fact that we are Repeating ourselves. Memoization 
   solves this problem by storing the value of the nth fibonacci
   term inside a hashmap. This makes our new runtime to be linear.
*/

let map = {};
function fib(n) {
  // base case and return condition
  if (n === 1 || n === 2) {
    return 1;
  }
  // if we have already calculated nth term value
  // return map[n]
  if (map[n]) {
    return map[n];
  }
  // else
  else {
    // otherwise save the value inside the hashmap
    map[n] = fib(n - 1) + fib(n - 2);
    // then return the value corresponding to nth term
    return map[n];
  }
  // Time : O(N)
  // The performance improvement in this fibonacci function
  // is INCREDIBLE from TC of O(2^N) to O(N) is just INSANE!!
  // Space : O(N)
  // Not 2^N because at most N function calls(stacks) are present
  // at the same thime in memory.
}
console.log(fib(50), map);
