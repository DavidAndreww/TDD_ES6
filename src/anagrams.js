// 'conversation' === 'voices rant on'
// 'dog' === 'god'
// 'cat' !== 'cats'

export const isAnagram = (string1, string2) => {
  if (!string1 || !string2) return false;
  if (typeof string1 !== "string" || typeof string2 !== "string") return false;

  let letters1 = string1.replace(/\W+/g, '').split("").sort().join("");
  let letters2 = string2.replace(/\W+/g, '').split("").sort().join("");

  return letters1 === letters2 ? true : false;
};
