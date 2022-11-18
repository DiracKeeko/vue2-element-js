<template>
  <span>
    <el-tooltip v-if="multiRowTip" :placement="placement">
      <div slot="content">
        <span v-for="(item, index) in tip" :key="index">
          <span> {{ item }} </span> <br />
        </span>
      </div>
      <i class="tip-icon-color" :class="iconName" :style="{ cursor: 'pointer', color: color }"></i>
    </el-tooltip>
    <el-tooltip v-else :content="tip" :placement="placement">
      <i class="tip-icon-color" :class="iconName" :style="{ cursor: 'pointer', color: color }"></i>
    </el-tooltip>

    <span style="margin-right: 8px">{{ label }}</span>
  </span>
</template>
<script>
export default {
  name: 'CusTip',
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    iconName: {
      type: String,
      default: 'el-icon-question'
    },
    content: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#606266'
    }
  },
  data() {
    return {};
  },
  computed: {
    multiRowTip() {
      return this.content.includes('#br#'); // true || false
    },
    haveLabel() {
      return this.content.includes('###');
    },
    label() {
      if (this.haveLabel) {
        return this.content.split('###')[0];
      }
      return '';
    },
    tip() {
      // content ->  [label ###] tip
      // multiRowContent ->  [label ###] tip1 #br# tip2
      let tip = '';
      if (this.haveLabel) {
        [, tip] = this.content.split('###');
      } else {
        tip = this.content;
      }
      if (this.multiRowTip) {
        return tip.split('#br#');
      }
      return tip;
    }
  }
};
</script>
