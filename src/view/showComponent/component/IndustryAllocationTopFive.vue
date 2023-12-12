<template>
  <div class="industry-allocation-top-five">
    <svg-icon icon-class="arrow-up-red"></svg-icon>
    <svg-icon icon-class="arrow-down-green"></svg-icon>
  </div>
</template>

<script>
export default {
  name: 'IndustryAllocationTopFive',
  components: {
  },
  props: {
    basicData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.industry-allocation-top-five {
}
</style>