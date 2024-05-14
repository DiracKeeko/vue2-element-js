<template>
  <div class="show-demo-01 d-flex jc-center">
    <div class="outline border">
      <div class="top-container border d-flex jc-center ai-center">
        <div class="compound-card d-flex jc-center ai-center">
          <div class="top-left text-primary">{{ firstLetter }}</div>
          <div class="top-right">
            <div class="text-success">{{ secondLetter }}</div>
            <div class="tone-box text-failed">{{ thirdLetter }}</div>
          </div>
        </div>
      </div>
      <div class="mid-container mt-5 d-flex jc-between">
        <div class="mid-item border d-flex jc-center ai-center">
          <div class="text-primary">{{ firstLetter }}</div>
        </div>
        <div class="mid-item border d-flex jc-center ai-center">
          <div class="text-success">{{ secondLetter }}</div>
        </div>
        <div class="mid-item border d-flex jc-center ai-center">
          <div class="text-failed">{{ thirdLetter }}</div>
        </div>
      </div>
      <div class="footer d-flex">
        <el-button type="primary" @click="handleClick(0)">抽个声母</el-button>
        <el-button type="primary" @click="handleClick(1)">抽个韵母</el-button>
        <el-button type="primary" @click="handleClick(2)">抽个声调</el-button>
      </div>
    </div>
  </div>
</template>

<script>
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

const withToneVowelArr = ["a", "o", "ô", "ơ", "e", "ê", "i", "y", "u", "ư"]
const withoutToneVowelArr = ["ă", "â"];
const vowelArr = [...withToneVowelArr, ...withoutToneVowelArr];

const toneArr = ["ˉ", "ˋ", "ˊ", "ˀ", "~", "·", ];

export default {
  name: "ShowDemo01",
  components: {},
  data() {
    return {
      firstIndex: undefined,
      secondIndex: undefined,
      thirdIndex: undefined
    };
  },
  computed: {
    firstLetter() {
      const { firstIndex } = this;
      if (firstIndex === undefined) {
        return "";
      }
      return consonantArr[firstIndex];
    },
    secondLetter() {
      const { secondIndex } = this;
      if (secondIndex === undefined) {
        return "";
      }
      return vowelArr[secondIndex];
    },
    thirdLetter() {
      const { thirdIndex } = this;
      if (thirdIndex === undefined) {
        return "";
      }
      return toneArr[thirdIndex];
    }
  },
  watch: {},
  methods: {
    handleClick(index) {
      const arr = [consonantArr, withToneVowelArr, toneArr];
      const curArr = arr[index];
      const len = curArr.length;
      const newIndex = Math.floor(Math.random() * len);

      const indexArr = ["firstIndex", "secondIndex", "thirdIndex"];
      const indexKey = indexArr[index];

      this[indexKey] = newIndex;
    }
  }
};
</script>

<style lang="scss" scoped>
.show-demo-01 {
  .outline {
    width: 40%;
    min-width: 400px;
    height: 60vh;
    min-height: 500px;
    padding: 20px 25px;
    .top-container {
      height: 40%;
      font-size: 55px;
      .compound-card {
        width: 100px;
        height: 80px;
        line-height: 80px;
        .top-right {
          position: relative;
          .tone-box {
            position: absolute;
            font-size: 44px;
            top: -20px;
            left: 5px;
          }
        }
      }
    }
    .mid-container {
      width: 100%;
      height: 40%;
      .mid-item {
        width: 30%;
        height: 80%;
        > div {
          font-size: 50px;
          text-align: center;
        }
      }
    }
  }
  .border {
    border: 1px solid var(--light-color);
    border-radius: 8px;
    box-shadow: 0 0 5px 0px var(--grey-color);
  }
}
</style>
