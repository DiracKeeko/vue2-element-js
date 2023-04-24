<template>
  <div class="skeleton-container">
    <div class="list-container">
      <div class="list-item" v-for="(fundItem, index) in skeletonArr" :key="index">
        <div class="fund-info">
          <div class="fund-info-top">
            <span class="fund-name">{{ fundItem.fundName }}</span>
            <span class="fund-code">{{ fundItem.orderBookId }}</span>
          </div>
          <div class="fund-info-bottom">
            <span class="fund-info-item fund-manager">
              <span class="item-title">基金经理: </span>
              <span class="item-intro">{{ fundItem.fundManager }}</span>
            </span>
            <span class="fund-info-item fund-type">
              <span class="item-title">基金类型: </span>
              <span class="item-intro">{{ fundItem.fundType }}</span>
            </span>
            <span class="fund-info-item subordinative-productPool">
              <span class="item-title">所属产品池: </span>
              <span class="item-intro">{{ fundItem.subordinativeProductPool }}</span>
            </span>
            <span class="fund-info-item cur-risk-classification">
              <span class="item-title">当前产品分类: </span>
              <span class="item-intro">{{ fundItem.curRiskClassification }}</span>
            </span>
            <span class="fund-info-item next-risk-classification">
              <span class="item-title">调整后产品分类: </span>
              <span class="item-intro">{{ fundItem.nextRiskClassification }}</span>
            </span>
          </div>
        </div>
        <div class="incident-type-list">
          <div
            class="incident-type-item"
            v-for="incidentTypeItem in fundItem.incidentTypeArr"
            :key="incidentTypeItem.incidentType"
          >
            <div class="incident-type">
              <span class="incident-type-name">{{ incidentTypeItem.incidentName }}</span>
              <span class="incident-type-count">({{ incidentTypeItem.incidentCount }})</span>
            </div>
            <div
              class="incident"
              v-for="incidentItem in incidentTypeItem.incidentArr"
              :key="incidentItem.incidentId"
            >
              <div class="incident-top">
                <span class="incident-id">{{ incidentItem.incidentId }}</span>
                <template v-if="incidentItem.isChanged">
                  <CapsuleTagVue
                    :type="incidentItem.incidentOriginLevel"
                    :content="incidentItem.incidentOriginLabel"
                  >
                  </CapsuleTagVue>
                  调整为
                  <CapsuleTagVue
                    :type="incidentItem.incidentChangedLevel"
                    :content="incidentItem.incidentChangedLabel"
                  >
                  </CapsuleTagVue>
                </template>
                <template v-else>
                  <CapsuleTagVue
                    :type="incidentItem.incidentOriginLevel"
                    :content="incidentItem.incidentOriginLabel"
                  >
                  </CapsuleTagVue>
                </template>
              </div>
              <div class="incident-middle">
                <span class="incident-trigger-time">{{ incidentItem.triggerTime }}</span>
                <span class="incident-detail">{{ incidentItem.detail }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CapsuleTagVue from "@/component/CapsuleTag.vue";
export default {
  name: "ShowSkeletonRender",
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
    return {
      skeletonArr: [
        {
          fundName: "华夏成长",
          orderBookId: "000001",
          fundManager: "王泽实，万方方",
          fundType: "灵活配置型",
          subordinativeProductPool: "二级产品池",
          curRiskClassification: "正常类",
          nextRiskClassification: "关注类",
          incidentTypeArr: [
            {
              incidentType: "drawdown",
              incidentName: "回撤事件",
              incidentCount: 2,
              incidentArr: [
                {
                  incidentId: "A00521",
                  isChanged: true, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  incidentChangedLevel: "warning",
                  incidentChangedLabel: "关注类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                },
                {
                  incidentId: "A00522",
                  // isChanged: false, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                }
              ]
            },
            {
              incidentType: "basicInfoChange",
              incidentName: "基础信息变更事件",
              incidentCount: 1,
              incidentArr: [
                {
                  incidentId: "A00523",
                  isChanged: true, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  incidentChangedLevel: "warning",
                  incidentChangedLabel: "关注类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                },
                {
                  incidentId: "A00524",
                  isChanged: false, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                }
              ]
            }
          ]
        },
        {
          fundName: "易方达蓝筹",
          orderBookId: "005827",
          fundManager: "张坤",
          fundType: "偏股混合型",
          subordinativeProductPool: "二级产品池",
          curRiskClassification: "正常类",
          nextRiskClassification: "关注类",
          incidentTypeArr: [
            {
              incidentType: "drawdown",
              incidentName: "回撤事件",
              incidentCount: 2,
              incidentArr: [
                {
                  incidentId: "A00521",
                  isChanged: true, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  incidentChangedLevel: "warning",
                  incidentChangedLabel: "关注类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                },
                {
                  incidentId: "A00522",
                  // isChanged: false, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                }
              ]
            },
            {
              incidentType: "basicInfoChange",
              incidentName: "基础信息变更事件",
              incidentCount: 1,
              incidentArr: [
                {
                  incidentId: "A00523",
                  isChanged: true, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  incidentChangedLevel: "warning",
                  incidentChangedLabel: "关注类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                },
                {
                  incidentId: "A00524",
                  isChanged: false, // 不一定有这个key
                  changeReason: "调整原因: 市场发布新规", // 不一定有这个key
                  incidentOriginLevel: "danger",
                  incidentOriginLabel: "预警类",
                  triggerTime: "2020-03-01 12:00:00",
                  detail: "近三月最大回撤超过10%"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.list-item {
  border-bottom: 1px solid blue;
  padding: 10px;
  background-color: #fff;
  .fund-info {
    background-color: #eaeaeae5;
    padding: 15px;
    .fund-info-item {
      margin: 0 10px 0 0;
      .item-intro {
        margin: 0 0 0 2px;
      }
    }
  }
  .incident-type-list {
    padding: 0 15px;
    .incident-type-item {
      padding: 15px 0;
      border-bottom: 1px solid #eaeaea;
    }
  }
}
</style>
