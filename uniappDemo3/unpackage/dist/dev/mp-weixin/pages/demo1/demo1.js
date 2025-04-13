"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo1",
  setup(__props) {
    function removeBtn() {
      common_vendor.index.showModal({
        title: "是否删除",
        content: "我是谁",
        success: (res) => {
          if (res.confirm)
            common_vendor.index.showToast({ title: "删除成功" });
        }
      });
    }
    let arrs = ["大学", "高中", "大专"];
    function chooseBtn() {
      common_vendor.index.showActionSheet({
        itemList: arrs,
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/demo1/demo1.vue:23", arrs[res.tapIndex]);
          common_vendor.index.__f__("log", "at pages/demo1/demo1.vue:24", res);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(removeBtn),
        b: common_vendor.o(chooseBtn)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo1/demo1.js.map
