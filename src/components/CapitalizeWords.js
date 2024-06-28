function CapitalizeWords(str) {
  const capitalized = str.replace(/\b\w/g, (char) => char.toUpperCase());
  return capitalized.replace("-", " ");
}

export default CapitalizeWords;
