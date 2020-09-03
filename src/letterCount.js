// 'cat' -> { c: 1, a: 1, t: 1 }
// 'better' -> { b: 1, e: 2, t: 2, r: 1 }

export const getLetterCount = (string) => {
  return string.split("").reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
    return obj;
  }, {});
};
