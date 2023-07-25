<template>
  <div class="icon-stage">
    <el-input
      v-model="name"
      class="icon-stage-input-icon"
      suffix-icon="el-icon-search"
      placeholder="请输入图标名称"
      @input="filterIcons"
    ></el-input>
    <ul class="icon-stage-list">
      <li v-for="(item, index) in showList" :key="index" @click="selectedIcon(item)">
        <i class="icon-item" :class="[item]" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { elementIcons } from './constant.js';

export default {
  name: 'IconStage',
  data() {
    return {
      name: '',
      iconList: [...elementIcons], // totalList
      showList: [] // iconList after filter
    };
  },
  mounted() {
    this.filterIcons();
  },
  methods: {
    filterIcons() {
      if (this.name) {
        this.showList = this.iconList.filter((item) => item.includes(this.name));
      } else {
        this.showList = this.iconList.slice(0);
      }
    },
    selectedIcon(name) {
      this.$emit('selected', name);
    },
    reset() {
      this.name = '';
      this.showList = this.iconList;
    }
  }
};
</script>

<style scoped>
.icon-stage {
  height: 300px;
  overflow: hidden;
}
.icon-stage-input-icon {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
}
.icon-stage-list {
  height: 100%;
  overflow: scroll;
}
.icon-stage-list li {
  float: left;
  margin: 10px 10px;
  cursor: pointer;
  list-style-type: none;
}
.icon-item {
  font-size: 20px;
  color: #1b5fc5;
  cursor: pointer;
}
</style>
