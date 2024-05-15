<template>
  <div class="show-demo-01 d-flex jc-center">
    <div class="outline border">
      <div class="top-container border d-flex jc-center ai-center">
        <div class="compound-card d-flex jc-center ai-center">
          <div class="top-left text-primary">{{ firstLetter }}</div>
          <div class="top-right">
            <div class="top-right-sec text-success">{{ secondLetter }}</div>
            <div
              class="tone-box text-failed"
              :class="{ 'tone-box-question': thirdIndex === 3, 'tone-box-down': thirdIndex === 5 }"
            >
              {{ thirdLetter }}
            </div>
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
      <div class="footer d-flex jc-between">
        <el-button type="primary" style="width: 30%" @click="handleClick(0)">抽个声母</el-button>
        <el-button type="primary" style="width: 30%" @click="handleClick(1)">抽个韵母</el-button>
        <el-button type="primary" style="width: 30%" @click="handleClick(2)">抽个声调</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { consonantArr, withToneVowelArr, toneArr } from "./constant.js";

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
      return withToneVowelArr[secondIndex];
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
          .top-right-sec {
            width: 30px;
            text-align: center;
          }
          .tone-box {
            position: absolute;
            font-size: 44px;
            top: -10px;
            left: 8px;
          }
          .tone-box-question {
            font-size: 28px;
            top: -16px;
            left: 10px;
          }
          .tone-box-down {
            top: 16px;
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
