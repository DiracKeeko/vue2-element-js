<template>
  <div class="vxe-grid">
    <vxe-grid v-bind="gridOptions1">
      <template #toolbar_buttons>
        <vxe-button @click="gridOptions1.align = 'left'">居左</vxe-button>
        <vxe-button @click="gridOptions1.align = 'center'">居中</vxe-button>
        <vxe-button @click="gridOptions1.align = 'right'">居右</vxe-button>
      </template>
    </vxe-grid>

    <div id="height-case">
      <div class="mt-5">:show-overflow="false"</div>
      <vxe-grid :show-overflow="false" :height="200" :columns="tableCols" :data="tableData">
      </vxe-grid>

      <div class="mt-5">:show-overflow="true"</div>
      <vxe-grid :show-overflow="true" :height="200" :columns="tableCols" :data="tableData">
      </vxe-grid>

      <vxe-grid
        :show-overflow="true"
        :height="200"
        :rowConfig="{ height: 56, isHover: false }"
        :columns="tableCols"
        :data="tableData"
      >
      </vxe-grid>
    </div>
  </div>
</template>

<script>
const tableCols = [
  { type: "seq", width: 50 },
  { field: "name", title: "Name", width: 50 },
  { field: "sex", title: "Sex", showHeaderOverflow: true, width: 50 },
  {
    field: "age",
    title: "新的col111111111111111111col111111111111111111",
    showHeaderOverflow: true,
    width: 50
  },
  { field: "address", title: "Address", width: 50 }
];
const tableData = [
  {
    id: 10001,
    name: "Test1",
    nickname: "T1",
    role: "Develop",
    sex: "Man",
    age: 0,
    address: "Shenzhen"
  },
  {
    id: 10002,
    name: "Test2",
    nickname: "T2",
    role: "Test",
    sex: "Women",
    age: 22,
    address: "Guangzhou"
  },
  {
    id: 10003,
    name: "Test3",
    nickname: "T3",
    role: "PM",
    sex: "Man",
    age: 100,
    address: "Shanghai"
  },
  {
    id: 10004,
    name: "Test4",
    nickname: "T4",
    role: "Designer",
    sex: "Women",
    age: 70,
    address: "Shenzhen"
  },
  {
    id: 10005,
    name: "Test5",
    nickname: "T5",
    role: "Develop",
    sex: "Women",
    age: 10,
    address: "Shanghai"
  },
  {
    id: 10006,
    name: "Test6",
    nickname: "T6",
    role: "Designer",
    sex: "Women",
    age: 90,
    address: "Shenzhen"
  },
  {
    id: 10007,
    name: "Test7",
    nickname: "T7",
    role: "Test",
    sex: "Man",
    age: 5,
    address: "Shenzhen"
  },
  {
    id: 10008,
    name: "Test8",
    nickname: "T8",
    role: "Develop",
    sex: "Man",
    age: 80,
    address: "Shenzhen"
  }
];
export default {
  name: "ShowVxeTable",
  components: {},
  data() {
    return {
      tableCols,
      tableData,
      gridOptions1: {
        border: true,
        resizable: false,
        showOverflow: true,
        height: 300,
        align: "left",
        toolbarConfig: {
          slots: {
            // 自定义工具栏模板
            buttons: "toolbar_buttons"
          }
        },
        columns: tableCols,
        data: tableData
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home-page {
  margin: 200px 0 0 0;
}

#height-case {
  ::v-deep {
    // ## 注意 overflow开启 与 不开启  设置表格高度的样式是不一样的

    // ↓ 设置了 :show-overflow="false" 且沒有省略发生时生效
    // .vxe-table--body-wrapper {
    //   .vxe-body--row {
    //     .vxe-body--column {
    //       height: 20px;
    //       padding: 0;
    //     }
    //   }
    // }

    // ↓ 设置了 :show-overflow="true" 且发生了省略时生效
    .vxe-table--body {
      .vxe-body--column {
        height: 35px;
        padding: 0;
        .vxe-cell {
          height: 35px;
          padding: 0;
        }
      }
    }
  }
}
</style>
