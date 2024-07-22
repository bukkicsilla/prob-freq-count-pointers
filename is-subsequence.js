// add whatever parameters you deem necessary
function isSubsequence(sub, str) {
  let subIndex = 0;
  let strIndex = 0;

  while (subIndex < sub.length && strIndex < str.length) {
    if (sub[subIndex] === str[strIndex]) {
      subIndex++;
    }
    strIndex++;
  }
  console.log(subIndex, sub.length);
  return subIndex === sub.length;
}
module.exports = isSubsequence;
