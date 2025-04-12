"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "userInfo",
  props: {
    obj: {
      type: Object,
      default() {
        return { name: "没有被定义", userImage: "../../static.logo.png" };
      }
    }
  },
  setup(__props) {
    common_vendor.index.__f__("log", "at components/userInfo/userInfo.vue:32", props.userImage);
    common_vendor.computed(() => props.userName + "@");
    return (_ctx, _cache) => {
      return {
        a: __props.obj.userImage,
        b: common_vendor.t(__props.obj.name)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/userInfo/userInfo.js.map
