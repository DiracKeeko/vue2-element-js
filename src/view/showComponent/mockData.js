import { formatToPercent } from "js-financial-tools/modules/formatter";
import { setValueColor } from "@/util/color";

export const rankData = [
  {
    "fundCode": "001628.OF",
    "symbol": "招商体育文化休闲A",
    "rank": 1,
    "netValue": 1.7135,
    "gain": 0.0335,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "015395.OF",
    "symbol": "招商体育文化休闲C",
    "rank": 2,
    "netValue": 1.6897,
    "gain": 0.0335,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "011384.OF",
    "symbol": "南方远见回报A",
    "rank": 3,
    "netValue": 0.8286,
    "gain": 0.0255,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "011385.OF",
    "symbol": "南方远见回报C",
    "rank": 4,
    "netValue": 0.8152,
    "gain": 0.0255,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "011220.OF",
    "symbol": "南方匠心优选A",
    "rank": 5,
    "netValue": 0.6903,
    "gain": 0.0252,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "011221.OF",
    "symbol": "南方匠心优选C",
    "rank": 6,
    "netValue": 0.6786,
    "gain": 0.0252,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "007137.OF",
    "symbol": "鹏扬元合量化大盘优选A",
    "rank": 7,
    "netValue": 1.1082,
    "gain": 0.023,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "007138.OF",
    "symbol": "鹏扬元合量化大盘优选C",
    "rank": 8,
    "netValue": 1.0553,
    "gain": 0.023,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "014376.OF",
    "symbol": "东吴新能源汽车A",
    "rank": 9,
    "netValue": 1.0332,
    "gain": 0.0227,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  },
  {
    "fundCode": "014377.OF",
    "symbol": "东吴新能源汽车C",
    "rank": 10,
    "netValue": 1.0255,
    "gain": 0.0227,
    "classifyFundType": "普通股票型",
    "targetTime": "202312111436"
  }
];

export const handleRankArr = (rankArr) => {
  return rankArr.map((el, i) => {
    const { fundCode, symbol, gain, classifyFundType } = el;
    return {
      rank: i + 1,
      code: fundCode,
      name: symbol,
      profit: formatToPercent(gain, "+"),
      type: classifyFundType,
      color: setValueColor(gain)
    };
  });
};
