<template>
  <div class="rank-list-item" @click="item.code && handleClick(item.code)">
    <div class="rank-list-item__left">
      <span :style="{ color: setRankColor(item.rank) }">
        {{ item.rank }}
      </span>
    </div>
    <div class="rank-list-item__right">
      <div class="item-title">
        <span class="item-title__name" :title="item.name">
          {{ item.code && item.code.split(".")[0] }} {{ item.name }}
        </span>
      </div>
      <div class="item-profit">
        <span class="text-grey mr-2">{{ statement }}</span>
        <span class="item-profit__value" :style="{ color: item.color }">{{ item.profit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { setRankColor } from "@/util/color";

export default {
  name: "RankListItem",
  components: {},
  props: {
    statement: {
      type: String,
      default: "收益率"
    },
    item: {
      type: Object,
      default: () => ({})
    },
    jumpFunction: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    setRankColor,
    handleClick(code) {
      this.$emit("clickRankItem", code);
    }
  }
};
</script>

<style lang="scss" scoped>
.rank-list-item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 82px;
  padding: 1.25rem 1.45rem;

  .rank-list-item__left {
    width: 2rem;
    font-size: 1.25rem;
    color: #333;
  }
  .rank-list-item__right {
    width: calc(100% - 2rem);
    .item-title {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      color: #333;
      .item-title__name {
        margin-right: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .item-profit {
      font-size: 0.88rem;
    }
  }
}
.rank-list-item:hover {
  cursor: pointer;
  background-color: var(--hover-bg-color);
  .item-title__name {
    color: var(--primary-color);
  }
}
</style>
