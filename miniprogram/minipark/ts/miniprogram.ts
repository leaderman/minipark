const MiniProgram = {
  setNavigationBarTitle: (title: string) => {
    return new Promise((resolve, reject) => {
      wx.setNavigationBarTitle({
        title,
        success: resolve,
        fail: reject,
      });
    });
  },
};

export default MiniProgram;
