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

    <div class="bg-white p-5">
      <AsideTab v-model="curSelectKey" :tab-key-list="labelArr" :tab-label-list="labelArr">
        <template #contentContainer>
          {{ curSelectKey }}
        </template>
      </AsideTab>
    </div>

    <AsideTabBaseOnEl v-model="curSelectKey" :label-arr="labelArr" class="mt-5">
      <template #contentContainer>
        {{ curSelectKey }}
      </template>
    </AsideTabBaseOnEl>
    <RankCard></RankCard>
  </div>
</template>

<script>
import CardWithSlot from "@/component/CardWithSlot.vue";
import CardWithTitle from "@/component/CardWithTitle.vue";
import AsideTab from "@/component/AsideTab.vue";

import AsideTabBaseOnEl from "./AsideTabBaseOnEl.vue";
import RankCard from "./RankCard.vue";

export default {
  name: "ShowCardLayout",
  components: {
    CardWithSlot,
    CardWithTitle,
    AsideTab,
    AsideTabBaseOnEl,
    RankCard
  },
  data() {
    return {
      curSelectKey: "配置管理",
      labelArr: ["用户管理", "配置管理", "角色管理", "定时任务"]
    }
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
