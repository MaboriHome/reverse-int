module.exports = function reverse (n) {
  
  let str = String(n).split('');

  if (str[0] === '-') {
    str = str.slice(1);
  }

  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {

    [str[i], str[j]] = [str[j], str[i]];
  }
  return Number(str.join(''));
}
