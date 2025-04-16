"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    function goBack() {
      common_vendor.index.navigateBack();
    }
    common_vendor.index.setStorageSync("name", "小李");
    common_vendor.index.setStorageSync("age", "20");
    let myName = common_vendor.index.getStorageSync("name");
    common_vendor.index.__f__("log", "at pages/demo3/demo3.vue:16", myName);
    const res = common_vendor.index.getStorageInfoSync();
    common_vendor.index.__f__("log", "at pages/demo3/demo3.vue:19", res);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo3/demo3.js.map
