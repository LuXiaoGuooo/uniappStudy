"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_userInfo2 = common_vendor.resolveComponent("userInfo");
  _easycom_userInfo2();
}
const _easycom_userInfo = () => "../../components/userInfo/userInfo.js";
if (!Math) {
  _easycom_userInfo();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userinfo = common_vendor.ref([
      { name: "小栗", userImage: "../../static/1.jpg" },
      { name: "小张", userImage: "../../static/2.jpeg" },
      { name: "小张", userImage: "../../static/3.jpeg" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(userinfo.value, (item, index, i0) => {
          return {
            a: "4fb44f11-0-" + i0,
            b: common_vendor.p({
              obj: item
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
