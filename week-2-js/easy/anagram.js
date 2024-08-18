function isAnagram(str1, str2) {
  let str1Lower = str1.toLowerCase();
  let str2Lower = str2.toLowerCase();

  if (str1Lower.length !== str2Lower.length) {
    return false;
  }

  let sortedStr1 = str1Lower.split("").sort().join("");
  let sortedStr2 = str2Lower.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
