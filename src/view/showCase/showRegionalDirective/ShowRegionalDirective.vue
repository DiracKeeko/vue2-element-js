<template>
  <div class="show-regional-directive">
    <el-button v-copy="textCase">点我复制</el-button>
    <div>
      {{ textCase }}
    </div>
  </div>
</template>

<script>
import copyDirective from "@/directive/copyDirective.js";

export default {
  name: "ShowRegionalDirective",
  components: {},
  directives: {
    copy: copyDirective
  },
  props: {
    showSkeleton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textCase: "这是一段文本"
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
