module.exports = function (str) {
  // TODO
  const reg = /^(az|123|abc123|under|404x|obelisk)/;
  return reg.test(str);
}