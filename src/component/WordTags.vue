<template>
  <div id="word-tags-container" @click="emitClick" style="cursor: pointer" v-loading="loading">
    <div class="word-tags">
      <div v-for="(item, index) in checkedItemList" :key="index" class="tag-checked-name">
        {{ item }}
      </div>
      <div v-if="checkedItemList.length === 0" class="plusSign">+</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WordTags",
  props: {
    remoteMethod: { type: Function, default: () => {} },
    checkedItemList: {
      type: Array,
      default: () => [],
      required: true
    },
    loading: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  methods: {
    emitClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
#word-tags-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid var(--light-grey-color);
  border-radius: 2px;
  width: 560px;
  height: 32px;
  padding: 0 15px;
  background-color: var(--white-color);
  ::v-deep {
    .el-loading-mask {
      background-color: var(--light-color);
    }
    .el-loading-spinner {
      top: 50%;
      margin-top: 0;
      transform: translate(0, -50%);
    }
  }
}

.word-tags {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.tag-checked-name {
  display: inline-block;
  position: relative;
  height: 20px;
  margin: 0 6px 0 0;
  padding: 0 8px;
  font: 12px/20px "Microsoft YaHei", Arial, sans-serif;
  border: 1px solid #d8dce6;
  border-radius: 1px;
}
.tag-checked-name:first-of-type {
  margin-left: 2px;
}
.plusSign {
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: #bcb9b9;
}
</style>
