function isPalindrome(sentence) {
  // Normalize the string by converting it to lowercase and removing non-alphanumeric characters
  const normalizedStr = sentence.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = normalizedStr.split("").reverse().join("");
  return normalizedStr === reversedStr;
}

module.exports = isPalindrome;
