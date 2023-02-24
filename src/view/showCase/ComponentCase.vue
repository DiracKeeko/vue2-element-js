<template>
  <CardWithSlot :cut-line="true" class="card-self">
    <template #topLeft> 左上角 </template>
    <template #topRight> 右上角 </template>
    <template #contentContainer>
      <div class="container-self">内容区</div>
    </template>
  </CardWithSlot>
</template>

<script>
import CardWithSlot from "@/component/CardWithSlot.vue";
export default {
  name: "ComponentCase",
  components: {
    CardWithSlot
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
