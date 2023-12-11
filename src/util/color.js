const setValueColor = (
  val,
  baseVal = 0,
  defaultColor = "#999",
  biggerColor = "#FF2323",
  lowerColor = "#3cb62c"
) => {
  let res = defaultColor;
  val > baseVal && (res = biggerColor);
  val < baseVal && (res = lowerColor);
  return res;
};

export { setValueColor };
