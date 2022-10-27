// 1 , 1, 2, 3, 5, 8, 13, 21, 34..
// Fibonacci Sequence

// What is meant by fibonacci or f(n) ?
// f(n) means nth term of the fibonacci sequence
// f(1) means 1st term. So f(1) = 1
// f(2) means 2nd term. So f(2) = 1
// f(3) means 3rd term. So f(3) = 2
// f(4) means 4th term. So f(4) = 3
// f(5) means 5th term. So f(5) = 5
// f(6) means 6th term. So f(6) = 8

// Notice the patter. f(n) = f(n - 1) + f(n - 2)
//  This means nth term = (previous) term + (previous to previous) term

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
  // Time : O(2^N)
  // Space : O(N) Due to stack memory
}
console.log(fibonacci(6));
