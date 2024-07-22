function makeFC(str) {
  let fc = new Map();
  for (let c of str) {
    fc.set(c, (fc.get(c) || 0) + 1);
  }
  return fc;
}
// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  if (msg.length === 0) return true;
  if (letters.length < msg.length) return false;
  const mapMsg = makeFC(msg);
  const mapLetters = makeFC(letters);
  for (let c of mapMsg.keys()) {
    if (!mapLetters.has(c) || mapLetters.get(c) < mapMsg.get(c)) {
      return false;
    }
  }
  return true;
}
module.exports = constructNote;
