<template>
  <div class="skeleton-container">
    <CapsuleTagVue content="预警类" type="warning">
      <template v-slot:suffix>
        <span class="suffix">iii预警</span>
      </template>
    </CapsuleTagVue>
  </div>
</template>

<script>
import CapsuleTagVue from '@/component/CapsuleTag.vue';
export default {
  name: 'ShowSkeletonRender',
  components: {
    CapsuleTagVue
  },
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
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
