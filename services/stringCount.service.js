function countCharacters(string) {
  console.log(string)
  var letterCount = (string.match(/[a-zA-Z]/g) || []).length;
  var symbolCount = (string.match(/[^a-zA-Z0-9\s]/g) || []).length;
  var numericCount = (string.match(/\d/g) || []).length;

  return {
    letters: letterCount,
    symbols: symbolCount,
    numerics: numericCount
  };
}

module.exports = countCharacters
