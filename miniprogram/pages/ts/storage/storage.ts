import Storage from "../../../minipark/ts/storage";

Page({
  data: {},

  onLoad() {
    Storage.set("name", "value");

    const value = Storage.get<string>("name");
    console.log(value);

    // Storage.set("name", "");

    // const value2 = Storage.get<string>("name2");
    // console.log(value2);

    Storage.remove("name");

    // const value3 = Storage.get<string>("name");
    // console.log(value3);

    Storage.clear();
  },
});
