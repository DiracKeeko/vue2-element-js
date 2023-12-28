<template>
  <div class="skeleton-container">
    <div v-for="(item, index) in dataArr" :key="index">
      <div class="item d-flex mb-4">
        <div class="item-name">{{ item.name }}</div>
        <div v-color="item.gain" class="item-gain mr-2">{{ item.gain }}</div>
        <div v-color-bg="item.gain" style="width: 20px; height: 20px;">bg</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowGlobalDirective",
  components: {},
  props: {
    showSkeleton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dataArr: [
        { name: "易方达", gain: -0.28 },
        { name: "华夏", gain: 0.12 },
        { name: "中信证券", gain: 0.05 }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
