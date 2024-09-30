/**
 * 小程序 API。
 */
const MiniProgram = {
  setNavigationBarTitle(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.setNavigationBarTitle({
        title,
        success: () => resolve(),
        fail: (error) => reject(error),
      });
    });
  },
};

export default MiniProgram;
