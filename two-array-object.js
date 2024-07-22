// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  let i = 0;
  let obj = {};
  while (i < arr1.length) {
    if (arr2[i] === undefined) {
      obj[arr1[i]] = null;
    } else {
      obj[arr1[i]] = arr2[i];
    }
    i++;
  }
  return obj;
}
module.exports = twoArrayObject;
