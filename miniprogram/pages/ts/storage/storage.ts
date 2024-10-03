import LocalStorage from "../../../minipark/ts/local_storage";

Page({
  data: {},

  onLoad() {
    LocalStorage.set("name", "value");

    const value = LocalStorage.get<string>("name");
    console.log(value);

    // Storage.set("name", "");

    // const value2 = Storage.get<string>("name2");
    // console.log(value2);

    LocalStorage.remove("name");

    // const value3 = Storage.get<string>("name");
    // console.log(value3);

    LocalStorage.clear();
  },
});
