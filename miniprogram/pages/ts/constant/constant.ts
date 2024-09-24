import Constant from "../../../minipark/ts/constant";

Page({
  onLoad() {
    wx.setNavigationBarTitle({
      title: "常量",
    });

    console.log(Constant.EMPTY);
    console.log(Constant.SPACE);
  },
});
