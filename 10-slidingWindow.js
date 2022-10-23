// Subarray sliding window

function slidingWindow(arr, target = 0) {
  let start = 0;
  let end = start + 1;
  let sum = arr[start] + arr[end];
  const len = arr.length;
  while (end < len) {
    if (sum === target) {
      console.log('true');
      return true;
    } else if (sum < target) {
      end++;
      sum += arr[end];
    } else {
      sum -= arr[start];
      start++;
    }
  }
  return false;
}
slidingWindow([5, 3, 1, 7, 6, 4, 2, 3]);
