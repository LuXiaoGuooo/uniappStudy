"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.index.showToast({
      title: "操作成功",
      icon: "error"
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
