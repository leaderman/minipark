import Throttle from "../../../minipark/ts/throttle";

Page({
  onLoad() {
    const id = "myButton";
    console.log("undefined:", Throttle.isThrottling(this, id));

    Throttle.startThrottle(this, id);
    console.log("after start:", Throttle.isThrottling(this, id));

    Throttle.endThrottle(this, id);
    console.log("after end:", Throttle.isThrottling(this, id));
  },
});
