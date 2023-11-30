<template>
  <div class="card-with-title">
    <CardWithSlot :content-loading="contentLoading">
      <template v-slot:topLeft>
        <div class="card-title">
          <slot name="titlePrefix"></slot>
          {{ cardTitle }}
          <slot name="titleSuffix"></slot>
        </div>
      </template>
      <template v-slot:topRight>
        <slot name="topRight"></slot>
      </template>
      <template v-slot:contentContainer>
        <slot name="contentContainer"></slot>
      </template>
    </CardWithSlot>
  </div>
</template>

<script>
import CardWithSlot from "@/component/CardWithSlot.vue";

export default {
  name: "CardWithTitle",
  components: {
    CardWithSlot
  },
  props: {
    cardTitle: {
      type: String,
      default: ""
    },
    contentLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.card-with-title {
  ::v-deep .card-header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 20px;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #484848;
  }
}
</style>
