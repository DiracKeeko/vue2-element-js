<template>
  <div class="rank-card">
    <CardWithTitle card-title="基金近1月业绩排行" class="card-self">
      <template #contentContainer>
        <UnderscoreSwitch
          v-model="curTypeKey"
          :tab-key-list="typeKeyList"
          :tab-label-list="typeLabelList"
        ></UnderscoreSwitch>
        <div class="container-self">内容区</div>
      </template>
    </CardWithTitle>
  </div>
</template>

<script>
import CardWithTitle from "@/component/CardWithTitle.vue";
import UnderscoreSwitch from "@/component/UnderscoreSwitch.vue";

export default {
  name: "TemplateName",
  components: {
    CardWithTitle,
    UnderscoreSwitch
  },
  props: {
    basicData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      curTypeKey: "stock",
      typeKeyList: ["stock", "bond", "sharp", "marco"],
      typeLabelList: ["股票", "债券", "夏普比率", "宏观"]
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.rank-card {
  width: 600px;
  height: 400px;
  margin: 100px 60px;
}
</style>
