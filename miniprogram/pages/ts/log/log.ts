import { Log, RealtimeLog } from "../../../minipark/ts/log";

Page({
  onLoad() {
    Log.debug("debug log");
    Log.info("info log");
    Log.warn("warn log");
    Log.error("error log");

    RealtimeLog.info("realtime info log");
    RealtimeLog.warn("realtime warn log");
    RealtimeLog.error("realtime error log");
  },
});
