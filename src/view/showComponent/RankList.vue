<template>
  <div class="rank-list">
    <el-row>
      <el-col :span="12">
        <div v-for="(item, index) in dataListLeft" :key="index">
          <RankListItem :item="item" statement="实时"></RankListItem>
        </div>
      </el-col>
      <el-col :span="12">
        <div v-for="(item, index) in dataListRight" :key="index">
          <RankListItem :item="item" statement="实时"></RankListItem>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RankListItem from "@/component/RankListItem.vue";

export default {
  name: "RankList",
  components: {
    RankListItem
  },
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    dataListLeft() {
      return this.dataList.slice(0, 5);
    },
    dataListRight() {
      return this.dataList.slice(5, 10);
    }
  }
};
</script>
