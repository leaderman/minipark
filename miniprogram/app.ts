import Log from "./minipark/ts/log";

App<IAppOption>({
  globalData: {},
  onLaunch: function () {
    Log.info("App launched");

    Log.debug("App launched", new Date().toISOString());
  },
});
