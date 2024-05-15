const consonantArr = [
  "c",
  "b",
  "d",
  "đ",
  "h",
  "l",
  "k",
  "t",
  "n",
  "m",
  "v",
  "r",
  "s",
  "x",
  "p",
  "ph",
  "q",
  "qu",
  "g",
  "gh",
  "ng",
  "ngh",
  "ch",
  "tr",
  "nh",
  "th",
  "gi",
  "kh"
];

const withToneVowelArr = ["a", "o", "ô", "ơ", "e", "ê", "i", "y", "u", "ư"];
const withoutToneVowelArr = ["ă", "â"];
const vowelArr = [...withToneVowelArr, ...withoutToneVowelArr];

const toneArr = ["ˉ", "ˋ", "ˊ", "ˀ", "˜", "."]; // "ˇ", ".", "ˀ"

export { consonantArr, withToneVowelArr, withoutToneVowelArr, vowelArr, toneArr };
