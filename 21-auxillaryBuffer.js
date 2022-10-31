// [1, 2, 3, 4] size 3
function combinations(
  arr,
  size,
  buffer = new Array(size),
  startIndex = 0,
  buffIndex = 0,
) {
  if (buffIndex === 3) {
    console.log(buffer);
    return;
  }
  if (startIndex === arr.length) {
    return;
  }
  for (let i = startIndex; i < arr.length; i++) {
    buffer[buffIndex] = arr[i];
    combinations(arr, size, buffer, i + 1, buffIndex + 1);
  }
}
combinations([1, 2, 3, 4], 3);
