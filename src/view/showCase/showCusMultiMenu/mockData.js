// menuItem -> menuArr
/* 

  1、后台管理系统  强制所有的一级菜单为"显示"状态，不允许有隐藏的一级菜单
      备注：灰度菜单必须放到某个一级菜单下方，不允许使用一级菜单做灰度。
  
  2、menuArr.length <= 6 (一个多级菜单展开后 列最多6列)
  
  3、title 
      holder类型 title.length <= 6 (holder类型的菜单最多6个字符)
      inner类型 title.length <= 8 (inner类型的菜单最多8个字符) 
      outer类型 title.length <= 8 (outer类型的菜单最多8个字符)

*/
/* 
  const menuArr = [
    menuCol1Arr, menuCol2Arr, menuCol3Arr
  ]

  menuCol1Arr = [
    {
      "index": "/home",
      "title": "首页",
      "hidden": 1,
      "menuType": "inner",
      "menuId": 41,
      "componentPath": "home/Home.vue"
    },
    {
      "index": "/watch",
      "title": "我的自选",
      "hidden": 1,
      "menuType": "inner",
      "menuId": 41,
      "componentPath": "watch/Watch.vue"
    }
  ]
*/
export const menuRes = [
  {
    "index": "/home",
    "title": "首页",
    "hidden": 0, // 0: 显示, 1: 隐藏
    "menuType": "inner", // inner: 内部路由, outer: 外部链接, holder: 占位符
    "menuId": 94,
    "metaProperties": "",
    // ↓ 原menuItem
    "menuArr": [
      [
        {
          "index": "/watch",
          "title": "我的自选",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 41,
          "componentPath": "watch/Watch.vue"
        }
      ]
    ]
  },
  {
    "index": "2",
    "title": "基金",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 2,
    "menuArr": [
      [
        {
          "index": "/publicMarket",
          "title": "公募市场",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 60,
          "componentPath": "fundResearch/publicMarket/PublicMarket.vue",
          "metaProperties":
            '{\n  "rootId": "#public-market-right-section",\n  "title": "公募市场"\n}'
        }
      ],
      [
        {
          "index": "/fundFilter",
          "title": "基金筛选",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 10,
          "componentPath": "fundResearch/fundFilter/FundFilter.vue",
          "metaProperties": '{\n  "title": "基金筛选"\n}'
        },
        {
          "index": "/fundOverview",
          "title": "基金概览",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 96,
          "componentPath": "fundResearch/fundOverview/FundOverview.vue",
          "metaProperties": ""
        },
        {
          "index": "/fundDetail",
          "title": "基金产品详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 12,
          "componentPath": "fundResearch/fundDetail/FundDetail.vue",
          "metaProperties": '{\n  "rootId": "#bf-portfolio-analysis-right-section"\n}'
        },
        {
          "index": "/fundManager",
          "title": "基金经理详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 13,
          "componentPath": "fundResearch/fundManager/FundManager.vue",
          "metaProperties": '{\n  "rootId": "#bf-portfolio-analysis-right-section"\n}'
        },
        {
          "index": "/fundCompare",
          "title": "基金对比",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 14,
          "componentPath": "fundResearch/fundCompare/FundCompare.vue",
          "metaProperties": ""
        }
      ],
      [
        {
          "index": "/dueDiligence",
          "title": "尽调报告",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 102,
          "componentPath": "fundResearch/dueDiligence/DueDiligence.vue",
          "metaProperties": ""
        },
        {
          "index": "/fundLabel",
          "title": "标签选基",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 16,
          "componentPath": "fundResearch/fundLabel/FundLabel.vue"
        },
        {
          "index": "/fundCalc",
          "title": "定投计算器",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 17,
          "componentPath": "fundResearch/fundCalc/FundCalc.vue"
        },
        {
          "index": "/fundCompany",
          "title": "基金公司详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 87,
          "componentPath": "fundResearch/fundCompany/FundCompany.vue",
          "metaProperties": '{\n  "rootId": "#bf-portfolio-analysis-right-section"\n}'
        },
        {
          "index": "/fundCompanyOverview",
          "title": "基金公司",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 101,
          "componentPath": "fundResearch/fundCompany/FundCompanyOverview.vue",
          "metaProperties": ""
        }
      ]
    ]
  },
  {
    "index": "3",
    "title": "理财",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 3,
    "menuArr": [
      [
        {
          "index": "/wmProductFilter",
          "title": "理财产品筛选",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 18,
          "componentPath": "entrustedFinance/wmProductFilter/WmProductFilter.vue"
        },
        {
          "index": "/wmProductDetail",
          "title": "理财产品详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 19,
          "componentPath": "entrustedFinance/wmProductDetail/WmProductDetail.vue"
        },
        {
          "index": "/financeFilter",
          "title": "银行业理财筛选",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 81,
          "componentPath": "entrustedFinance/productFilter/ProductFilter.vue"
        },
        {
          "index": "/windProductDetail",
          "title": "银行业理财详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 88,
          "componentPath": "entrustedFinance/windProductDetail/WindProductDetail.vue",
          "metaProperties": ""
        },
        {
          "index": "/wmpDetail",
          "title": "代销理财详情页",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 93,
          "componentPath": "entrustedFinance/wmpDetail/WmpDetail.vue",
          "metaProperties": ""
        }
      ]
    ]
  },
  {
    "index": "89",
    "title": "保险",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 89,
    "componentPath": "",
    "metaProperties": "",
    "menuArr": [
      [
        {
          "index": "/insuranceFilter",
          "title": "保险筛选",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 90,
          "componentPath": "insurance/productFilter/InsuranceFilter.vue",
          "metaProperties": ""
        },
        {
          "index": "/insuranceDetail",
          "title": "保险产品详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 91,
          "componentPath": "insurance/productDetail/InsuranceDetail.vue",
          "metaProperties": ""
        }
      ]
    ]
  },
  {
    "index": "4",
    "title": "监控",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 4,
    "menuArr": [
      [
        {
          "index": "/fundPool",
          "title": "基金池管理",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 20,
          "componentPath": "monitorManagement/fundPool/pages/PoolList.vue"
        },
        {
          "index": "/wmpProductMonitor",
          "title": "理财产品业绩监测",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 22,
          "componentPath": "monitorManagement/wmpProductMonitor/WmpProductMonitor.vue"
        },
        {
          "index": "/consignedProductMonitor",
          "title": "基金产品业绩监测",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 61,
          "componentPath": "monitorManagement/consignedFundMonitor/ConsignedFundMonitor.vue"
        },
        {
          "index": "/poolDetail",
          "title": "基金池详情页（池成分+异动监测）",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 79,
          "componentPath": "monitorManagement/fundPool/pages/PoolDetail.vue"
        }
      ],
      [
        {
          "index": "/poolRecords",
          "title": "基金池调整记录",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 80,
          "componentPath": "monitorManagement/fundPool/pages/PoolRecords.vue"
        }
      ]
    ]
  },
  {
    "index": "5",
    "title": "组合",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 5,
    "menuArr": [
      [
        {
          "index": "/portfolioManage",
          "title": "模拟组合",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 23,
          "componentPath": "portfolioManage/simulatedPortfolio/manage/Manage.vue",
          "metaProperties": '{\n  "title": "模拟组合",\n  "apiKey": "mockPortfolioApi"\n}'
        },
        {
          "index": "/portfolioAnalysis",
          "title": "模拟组合分析",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 24,
          "componentPath":
            "portfolioManage/simulatedPortfolio/portfolioAnalysis/PortfolioAnalysis.vue",
          "metaProperties":
            '{\n  "title": "模拟组合",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    }\n  ],\n  "rootId": "#bf-portfolio-analysis-right-section",\n  "apiKey": "mockPortfolioApi"\n}'
        },
        {
          "index": "/changingPositionHistory",
          "title": "模拟组合调仓记录",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 25,
          "componentPath":
            "portfolioManage/simulatedPortfolio/changingPositionHistory/ChangingPositionHistory.vue",
          "metaProperties":
            '{\n  "title": "调仓历史",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    },\n    {\n      "text": "调仓记录"\n    }\n  ],\n  "apiKey": "mockPortfolioApi"\n}'
        },
        {
          "index": "/changingPosition",
          "title": "模拟组合调仓",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 26,
          "componentPath":
            "portfolioManage/simulatedPortfolio/changingPosition/ChangingPosition.vue",
          "metaProperties":
            '{\n  "title": "组合调仓",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    },\n    {\n      "text": "调仓"\n    }\n  ],\n  "apiKey": "mockPortfolioApi"\n}'
        },
        {
          "index": "/createSimplePortfolio",
          "title": "简单创建模拟组合",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 27,
          "componentPath":
            "portfolioManage/simulatedPortfolio/createSimplePortfolio/CreateSimplePortfolio.vue",
          "metaProperties":
            '{\n  "title": "简单创建组合",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    },\n    {\n      "text": "简单创建组合"\n    }\n  ],\n  "apiKey": "mockPortfolioApi"\n}'
        },
        {
          "index": "/manualCreatePortfolio",
          "title": "手动创建模拟组合",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 28,
          "componentPath":
            "portfolioManage/simulatedPortfolio/manualCreatePortfolio/ManualCreatePortfolio.vue",
          "metaProperties":
            '{\n  "title": "手动创建组合",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    },\n    {\n      "text": "手动创建"\n    }\n  ],\n  "apiKey": "backTestApi"\n}'
        },
        {
          "index": "/fundConfiguration",
          "title": "基金配置创建模拟组合",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 29,
          "componentPath":
            "portfolioManage/simulatedPortfolio/fundConfiguration/FundConfiguration.vue",
          "metaProperties":
            '{\n  "title": "组合基金配置",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    },\n    {\n      "text": "基⾦配置"\n    }\n  ],\n  "apiKey": "backTestApi"\n}'
        },
        {
          "index": "/fromAboveToBelowCreatePortfolio",
          "title": "自上而下创建模拟组合",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 30,
          "componentPath":
            "portfolioManage/simulatedPortfolio/fromAboveToBelowCreatePortfolio/FromAboveToBelowCreatePortfolio.vue",
          "metaProperties":
            '{\n  "title": "组合自上而下",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    },\n    {\n      "text": "自上而下"\n    }\n  ],\n  "apiKey": "backTestApi"\n}'
        }
      ],
      [
        {
          "index": "/retreatSchemeList",
          "title": "回测列表",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 31,
          "componentPath": "portfolioManage/simulatedPortfolio/manage/Manage.vue"
        },
        {
          "index": "/backTestDetail",
          "title": "回测详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 32,
          "componentPath":
            "portfolioManage/simulatedPortfolio/portfolioAnalysis/BackTestPortfolioAnalysis.vue",
          "metaProperties":
            '{\n  "title": "回测基本信息",\n  "breadCrumbData": [\n    {\n      "pathName": "retreatSchemeList",\n      "text": "模拟组合"\n    }\n  ],\n  "rootId": "#bf-portfolio-analysis-right-section",\n  "apiKey": "backTestApi"\n}'
        },
        {
          "index": "/changePortfolioInfo",
          "title": "组合调仓",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 33,
          "componentPath":
            "portfolioManage/simulatedPortfolio/changePortfolioInfo/ChangePortfolioInfo.vue",
          "metaProperties":
            '{\n  "title": "组合调仓",\n  "breadCrumbData": [\n    {\n      "pathName": "portfolioManage",\n      "text": "模拟组合"\n    }\n  ],\n  "apiKey": "backTestApi"\n}'
        },
        {
          "index": "/portfolioOnSaleAnalysis",
          "title": "在售组合分析",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 43
        },
        {
          "index": "/onSaleChangingPositionHistory",
          "title": "在售组合调仓记录",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 44
        },
        {
          "index": "/competitionList",
          "title": "比赛专区",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 34,
          "componentPath": "portfolioManage/competitionArea/competitionList/CompetitionList.vue",
          "metaProperties":
            '{\n  "title": "比赛专区",\n  "breadCrumbData": [\n    {\n      "pathName": "competitionList",\n      "text": "比赛专区"\n    }\n  ],\n  "apiKey": "mockPortfolioApi"\n}'
        },
        {
          "index": "/competitionDetail",
          "title": "比赛详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 35,
          "componentPath":
            "portfolioManage/competitionArea/competitionDetail/CompetitionDetail.vue",
          "metaProperties":
            '{\n  "title": "比赛详情",\n  "breadCrumbData": [\n    {\n      "pathName": "competitionList",\n      "text": "比赛专区"\n    }\n  ]\n}'
        },
        {
          "index": "/competitionDetailList",
          "title": "比赛排行榜信息",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 36,
          "componentPath":
            "portfolioManage/competitionArea/competitionDetailList/CompetitionDetailList.vue",
          "metaProperties":
            '{\n  "title": "比赛排行榜信息",\n  "breadCrumbData": [\n    {\n      "pathName": "competitionList",\n      "text": "比赛专区"\n    }\n  ]\n}'
        },
        {
          "index": "/competitionDetailOverview",
          "title": "比赛预览介绍",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 37,
          "componentPath":
            "portfolioManage/competitionArea/competitionDetailOverview/CompetitionDetailOverview.vue",
          "metaProperties": '{\n  "title": "比赛预览介绍"\n}'
        }
      ]
    ]
  },
  {
    "index": "/market",
    "title": "行情",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 7,
    "componentPath": "marketCenter/stockMarket/StockMarket.vue",
    "menuArr": [
      [
        {
          "index": "/indexDetail",
          "title": "指数行情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 38,
          "componentPath": "marketCenter/indexDetail/IndexDetail.vue"
        },
        {
          "index": "/stockDetail",
          "title": "个股详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 39,
          "componentPath": "marketCenter/stockDetail/StockDetail.vue",
          "metaProperties": '{\n  "rootId": "#bf-portfolio-analysis-right-section"\n}'
        },
        {
          "index": "/stockMarket",
          "title": "股票行情",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 99,
          "componentPath": "marketCenter/stockMarket/StockMarket.vue",
          "metaProperties": ""
        },
        {
          "index": "/bondMarket",
          "title": "债券行情",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 98,
          "componentPath": "marketCenter/bondMarket/BondMarket.vue",
          "metaProperties": ""
        },
        {
          "index": "/futuresMarket",
          "title": "期货行情",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 103,
          "componentPath": "marketCenter/futuresMarket/FuturesMarket.vue",
          "metaProperties": ""
        }
      ]
    ]
  },
  {
    "index": "8",
    "title": "内参",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 8,
    "menuArr": [
      [
        {
          "index": "/strategyCenterArticle",
          "title": "策略文章中心",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 67,
          "componentPath": "strategyCenter/strategyCenterLayout/components/Article.vue",
          "metaProperties": '{\n  "title": "文章中心"\n}'
        },
        {
          "index": "/createStrategyAllocation",
          "title": "策略配置",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 68,
          "componentPath":
            "strategyCenter/strategyCenterManagement/createStrategyAllocation/CreateStrategyAllocation.vue",
          "metaProperties": '{\n  "title": "策略配置"\n}'
        },
        {
          "index": "/strategyAllocationDetail/:id",
          "title": "策略配置详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 71,
          "componentPath": "strategyCenter/strategyCenterManagement/StrategyAllocationDetail.vue",
          "metaProperties":
            '{\n  "title": "策略详情",\n  "breadCrumbData": [\n    {\n      "pathName": "strategyCenterManagement",\n      "text": "策略中⼼配置"\n    },\n    {\n      "text": "详情页"\n    }\n  ]\n}'
        },
        {
          "index": "/strategyCenterApprove",
          "title": "策略审批中心",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 69,
          "componentPath": "strategyCenter/StrategyCenter.vue"
        },
        {
          "index": "/strategyApprove/:id",
          "title": "审批策略",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 70,
          "componentPath": "strategyCenter/strategyCenterApprove/StrategyApproveDetail.vue",
          "metaProperties":
            '{\n  "title": "策列审批",\n  "breadCrumbData": [\n    {\n      "pathName": "strategyCenterApprove",\n      "text": "策略中⼼配置审批"\n    },\n    {\n      "text": "详情页"\n    }\n  ]\n}'
        },
        {
          "index": "/fundWarehouse",
          "title": "基金库",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 21,
          "componentPath": "reference/fundWarehouse/FundWarehouse.vue"
        },
        {
          "index": "/reference",
          "title": "投研内参",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 40,
          "componentPath": "reference/reference/Reference.vue"
        },
        {
          "index":
            "https://gw.oa.cmbchina.com/Login/Jump.aspx?SysID=1160&NextAction=/research/report/inner/all",
          "title": "招银研究",
          "hidden": 1,
          "menuType": "outer",
          "menuId": 78
        },
        {
          "index": "/strategyCenter",
          "title": "策略中心",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 62,
          "componentPath": "strategyCenter/StrategyCenter.vue",
          "metaProperties": '{\n  "title": "策略中心"\n}'
        },
        {
          "index": "/strategyCenterManagement",
          "title": "策略配置中心",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 63,
          "componentPath": "strategyCenter/StrategyCenter.vue",
          "metaProperties": '{\n  "title": "策略配置中心"\n}'
        },
        {
          "index": "/strategyCenterHistory",
          "title": "历史策略",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 66,
          "componentPath": "strategyCenter/strategyCenterHistory/StrategyHistory.vue",
          "metaProperties":
            '{\n  "title": "历史策略",\n  "breadCrumbData": [\n    {\n      "pathName": "strategyCenter",\n      "text": "策略中心"\n    },\n    {\n      "text": "历史策略"\n    }\n  ]\n}'
        }
      ]
    ]
  },
  {
    "index": "/label",
    "title": "标签",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 104,
    "componentPath": "label/LabelIndex.vue",
    "metaProperties": ""
  },
  {
    "index": "/communityHome",
    "title": "社区",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 64,
    "componentPath": "community/home/Home.vue",
    "menuArr": [
      [
        {
          "index": "/communitySearchHome",
          "title": "搜索页",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 73,
          "componentPath": "community/home/SearchHome.vue"
        },
        {
          "index": "/communityPersonCenter",
          "title": "个人中心",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 74,
          "componentPath": "community/personCenter/PersonCenter.vue"
        },
        {
          "index": "/communityPostEditor",
          "title": "发帖",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 75,
          "componentPath": "community/post/PostArticle.vue"
        },
        {
          "index": "/communityPostPreview",
          "title": "预览",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 76,
          "componentPath": "community/post/PreviewArticle.vue"
        },
        {
          "index": "/communityPostDetails",
          "title": "帖子详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 77,
          "componentPath": "community/post/PostDetail.vue"
        }
      ]
    ]
  },
  {
    "index": "/productManagementCenter",
    "title": "产品管理中心",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 120,
    "menuArr": [
      [
        {
          "index": "/myProductManagement",
          "title": "我的产品管理",
          "hidden": 0,
          "menuType": "inner",
          "menuId": 107,
          "componentPath": "productManagementCenter/myProductManagement/MyProductManagement.vue",
          "metaProperties": '{\n  "title": "我的产品管理"\n}'
        },
        {
          "index": "/newFundProductEvent",
          "title": "新增基金事件",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 2439,
          "componentPath":
            "productManagementCenter/myProductManagement/fund/NewFundProductEvent.vue",
          "metaProperties": '{\n  "title": "新增基金事件"\n}'
        },
        {
          "index": "/fundApprovalDetail",
          "title": "基金审批详情",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 5170,
          "componentPath":
            "productManagementCenter/myProductManagement/fund/fundApprovalDetail/FundApprovalDetail.vue",
          "metaProperties": '{\n  "title": "基金审批详情"\n}'
        },
        {
          "index": "/processingFundProductEvent",
          "title": "处理基金事件",
          "hidden": 1,
          "menuType": "inner",
          "menuId": 7619,
          "componentPath":
            "productManagementCenter/myProductManagement/fund/fundToProcess/FundProcessing.vue",
          "metaProperties": '{\n  "title": "处理基金事件"\n}'
        }
      ]
    ]
  }
];
