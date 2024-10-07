/**
 * 小程序 API。
 */
const MiniProgram = {
  /**
   * 检查登录态 session_key 是否过期。
   * @returns {Promise<boolean>} 未过期返回 true，过期返回 false。
   */
  checkSession(): Promise<boolean> {
    return new Promise((resolve) => {
      wx.checkSession({
        success: () => resolve(true),
        fail: () => resolve(false),
      });
    });
  },

  /**
   * 调用接口获取登录凭证（code）。
   * @returns {Promise<string>} 登录凭证 code。
   */
  login(): Promise<string> {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => resolve(res.code),
        fail: (error) => reject(error),
      });
    });
  },

  /**
   * 动态设置当前页面的标题。
   * @param {string} title 标题。
   */
  setNavigationBarTitle(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.setNavigationBarTitle({
        title,
        success: () => resolve(),
        fail: (error) => reject(error),
      });
    });
  },

  /**
   * 显示成功消息提示框。
   * @param {string} title 标题。
   * @returns {Promise<void>} 成功返回 true，失败返回 false。
   */
  showSuccessToast(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.showToast({
        title,
        icon: "success",
        success: () => resolve(),
        fail: (error) => reject(error),
      });
    });
  },

  /**
   * 显示失败消息提示框。
   * @param {string} title 标题。
   * @returns {Promise<void>} 成功返回 true，失败返回 false。
   */
  showErrorToast(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.showToast({
        title,
        icon: "error",
        success: () => resolve(),
        fail: (error) => reject(error),
      });
    });
  },

  /**
   * 开始下拉刷新。
   */
  startPullDownRefresh(): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.startPullDownRefresh({
        success: () => resolve(),
        fail: (error) => reject(error),
      });
    });
  },

  /**
   * 停止当前页面下拉刷新。
   */
  stopPullDownRefresh(): Promise<void> {
    return new Promise((resolve, reject) => {
      wx.stopPullDownRefresh({
        success: () => resolve(),
        fail: (error) => reject(error),
      });
    });
  },
};

export default MiniProgram;
