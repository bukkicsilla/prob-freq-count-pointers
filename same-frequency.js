function makeFC(str) {
  let fc = new Map();
  for (let c of str) {
    fc.set(c, (fc.get(c) || 0) + 1);
  }
  return fc;
}
// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
  const fcNum1 = makeFC(strNum1);
  const fcNum2 = makeFC(strNum2);
  for (let d of fcNum1.keys()) {
    if (!fcNum2.has(d) || fcNum1.get(d) !== fcNum2.get(d)) {
      return false;
    }
  }
  return true;
}
module.exports = sameFrequency;
