import MiniProgram from "../../../minipark/ts/miniprogram";

Page({
  async onShow() {
    const rect = await MiniProgram.getRect("rect");
    console.log(`left: ${rect.left}`);
    console.log(`right: ${rect.right}`);
    console.log(`top: ${rect.top}`);
    console.log(`bottom: ${rect.bottom}`);
    console.log(`width: ${rect.width}`);
    console.log(`height: ${rect.height}`);
  },
});
