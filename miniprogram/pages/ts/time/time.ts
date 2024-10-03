import Time from "../../../minipark/ts/time";

Page({
  data: {},

  async onLoad() {
    console.log("休眠开始");
    await Time.sleep(10000);
    console.log("休眠结束");
  },
});
