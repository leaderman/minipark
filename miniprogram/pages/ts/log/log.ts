import Log from "../../../minipark/ts/log";

Page({
  onLoad() {
    Log.debug("debug log");
    Log.info("info log");
    Log.warn("warn log");
    Log.error("error log");
  },
});
