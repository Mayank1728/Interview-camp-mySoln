// Function combination to print all the combination of array with a particular size
// ['a', 'b', 'c'] , 2 (should print)=> [[a, b], [a, c], [b, c]]

function combinations(
  arr,
  size,
  buffer = new Array(size),
  startIndex = 0,
  bufferIndex = 0,
) {
  if (bufferIndex === size) {
    console.log(buffer);
    return;
  }
  if (startIndex === arr.length) {
    return;
  }
  for (let i = startIndex; i < arr.length; i++) {
    buffer[bufferIndex] = arr[i];
    combinations(arr, size, buffer, i + 1, bufferIndex + 1);
  }
  // Time : O()
  // Space : O()
}
combinations([1, 2, 3, 4, 5], 2);
