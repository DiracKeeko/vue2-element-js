<template>
  <div class="skeleton-container">
    <h2>看看控制台</h2>
  </div>
</template>

<script>
export default {
  name: "ShowGlobalMixin",
  components: {},
  props: {
    showSkeleton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  async mounted() {
    console.log("000");
    await this.sleepTest();
    console.log("003");
  },
  // 若不带async, "000", "003", "001", "002"
  // mounted() {
  //   console.log("000");
  //   this.sleepTest();
  //   console.log("003");
  // },
  methods: {
    async sleepTest() {
      await this.sleep(800);
      console.log("001");
      this.$message.error("它出现了");

      await this.sleep(3000);
      console.log("002");
      this.$message.success("过了3000ms,它又出现了");
    }
  }
};
</script>

<style lang="scss" scoped></style>
