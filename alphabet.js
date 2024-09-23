const chars = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";
export const alphabet = [
  ...chars.split(""),
  " ",
  ...chars.toLowerCase().split(""),
];
export const inverted = [
  ...chars.split("").reverse(),
  " ",
  ...chars.toLowerCase().split("").reverse(),
];
