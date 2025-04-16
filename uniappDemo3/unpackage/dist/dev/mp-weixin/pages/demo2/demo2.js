"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo2",
  setup(__props) {
    common_vendor.index.showNavigationBarLoading();
    common_vendor.index.setNavigationBarTitle({
      title: "老子demo3",
      success: (res) => {
        common_vendor.index.__f__("log", "at pages/demo2/demo2.vue:14", res);
      }
    });
    setTimeout(() => {
      common_vendor.index.hideNavigationBarLoading();
    }, 2e3);
    common_vendor.index.setTabBarItem({
      index: 1,
      text: "老子变了"
    });
    function goDemo2() {
      common_vendor.index.navigateTo({
        url: "/pages/demo3/demo3"
      });
    }
    function goIndex() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goDemo2),
        b: common_vendor.o(goIndex)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo2/demo2.js.map
