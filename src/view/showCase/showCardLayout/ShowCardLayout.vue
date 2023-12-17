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
          <div>
            <component
              :is="curRankItem"
              v-for="(item, index) in rankArr"
              :key="index"
              :basic-data="item"
            ></component>
          </div>
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

import { rankArr } from "./mock.js";
import AsideTabBaseOnEl from "./AsideTabBaseOnEl.vue";
import RankCard from "./RankCard.vue";
import ManagerItem from "./rankItem/ManagerItem.vue";

export default {
  name: "ShowCardLayout",
  components: {
    CardWithSlot,
    CardWithTitle,
    AsideTab,
    AsideTabBaseOnEl,
    RankCard,
    ManagerItem
  },
  data() {
    return {
      curSelectKey: "基金",
      labelArr: ["基金", "基金经理", "理财", "保险", "贵金属", "股票"],
      rankArr
    };
  },
  computed: {
    curRankItem() {
      return "ManagerItem";
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
