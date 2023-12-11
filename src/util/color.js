const setValueColor = (
  val,
  baseVal = 0,
  defaultColor = "#999999",
  biggerColor = "#FF2323",
  lowerColor = "#3cb62c"
) => {
  let res = defaultColor;
  val > baseVal && (res = biggerColor);
  val < baseVal && (res = lowerColor);
  return res;
};

const setRankColor = (rank, defaultColor = "#999999") => {
  switch (rank) {
    case 1:
      return "#FF0A0A";
    case 2:
      return "#FF8B47";
    case 3:
      return "#EEB558";
    default:
      return defaultColor;
  }
}

export { setValueColor, setRankColor };
