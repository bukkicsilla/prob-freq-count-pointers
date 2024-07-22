// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Move left pointer to the right as long as it points to a positive number
    while (arr[left] > 0 && left < right) {
      left++;
    }
    // Move right pointer to the left as long as it points to a negative number
    while (arr[right] < 0 && left < right) {
      right--;
    }
    // Swap the elements at left and right pointers
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
module.exports = separatePositive;
