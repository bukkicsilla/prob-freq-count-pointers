// add whatever parameters you deem necessary
function countPairs(arr, target) {
  if (arr.length < 2) return 0;
  const seen = new Set();
  let count = 0;

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      count++;
    }
    seen.add(num);
  }

  return count;
}
module.exports = countPairs;
