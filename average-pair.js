// add whatever parameters you deem necessary
function averagePair(arr, num) {
  if (arr.length === 0) return false;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] === num * 2) return true;
    else if (arr[start] + arr[end] < num * 2) start++;
    else end--;
  }
  return false;
}
module.exports = averagePair;
