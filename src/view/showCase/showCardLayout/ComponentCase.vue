<template>
  <div>
    <CardWithSlot :cut-line="true" class="card-self">
      <template #topLeft> 左上角 </template>
      <template #topRight> 右上角 </template>
      <template #contentContainer>
        <div class="container-self">内容区</div>
      </template>
    </CardWithSlot>

    <CardWithTitle card-title="近期业绩排行" :cut-line="true" class="card-self">
      <template #topRight> 右上角 </template>
      <template #contentContainer>
        <div class="container-self">内容区</div>
      </template>
    </CardWithTitle>

    <RankCard></RankCard>
  </div>
</template>

<script>
import CardWithSlot from "@/component/CardWithSlot.vue";
import CardWithTitle from "@/component/CardWithTitle.vue";

import RankCard from "./RankCard.vue";

export default {
  name: "ComponentCase",
  components: {
    CardWithSlot,
    CardWithTitle,
    RankCard
  }
};
</script>

<style scoped>
.card-self {
  width: 600px;
  height: 400px;
  margin: 100px 60px;
}
.container-self {
  width: 300px;
  height: 200px;
  margin: 80px auto;
}
</style>
