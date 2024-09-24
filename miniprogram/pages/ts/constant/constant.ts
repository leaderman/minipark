import Constant from "../../../minipark/ts/constant";
import MiniProgram from "../../../minipark/ts/miniprogram";
import { Log } from "../../../minipark/ts/log";

Page({
  onLoad() {
    MiniProgram.setNavigationBarTitle("常量");

    Log.info("空字符串", Constant.EMPTY);
    Log.info("空格", Constant.SPACE);
  },
});
