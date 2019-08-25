module.exports = function (str) {
  // TODO
  const reg = /^\D[^(A-Z)]/;
  return reg.test(str);
}