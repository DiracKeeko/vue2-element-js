<template>
  <div class="card-with-slot">
    <div class="card-header">
      <div>
        <slot name="topLeft"></slot>
      </div>
      <div>
        <slot name="topRight"></slot>
      </div>
    </div>

    <div v-if="cutLine" class="cut-line"></div>

    <div v-loading="contentLoading" class="card-content" element-loading-background="rgba(255, 255, 255, 0.8)">
      <slot name="contentContainer"></slot>
    </div>

    <div class="card-footer">
      <slot name="footerContainer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWithSlot",
  props: {
    cardHeader: {
      type: Boolean,
      default: false
    },
    cutLine: {
      type: Boolean,
      default: false
    },
    contentLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.card-with-slot {
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  background-color: #fff;

  .card-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 20px;
  }

  .card-content {
    position: relative;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    color: #666666;
  }
}
.cut-line {
  border-bottom: 1px solid #eee;
}
</style>
