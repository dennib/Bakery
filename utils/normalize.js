exports.normalizeText = text => {
  const firstChar = text.charAt(0);
  const remainingChars = text.substr(1);

  return firstChar.toUpperCase() + remainingChars.toLowerCase();
};

