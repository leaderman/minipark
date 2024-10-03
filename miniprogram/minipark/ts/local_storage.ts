import { Constant } from "@typescript-park/balm";

/**
 * 数据缓存。
 */
const LocalStorage = {
  /**
   * 设置缓存中的键值，值不能为空字符串，否则会抛出错误。
   * @param {string} key 键。
   * @param {unknown} value 值。
   */
  set<T = unknown>(key: string, value: T): void {
    if (value === Constant.EMPTY) {
      throw new Error("value cannot be empty");
    }

    wx.setStorageSync(key, value);
  },

  /**
   * 获取缓存中的键值，如果键不存在，则抛出错误。
   * @param {string} key 键。
   * @returns {unknown} 值。
   */
  get<T = unknown>(key: string): T {
    const value = wx.getStorageSync(key);
    if (value === Constant.EMPTY) {
      throw new Error("key not found");
    }

    return value;
  },

  /**
   * 删除缓存中的键值。
   * @param {string} key 键。
   */
  remove(key: string): void {
    wx.removeStorageSync(key);
  },

  /**
   * 清除缓存。
   */
  clear(): void {
    wx.clearStorageSync();
  },
};

export default LocalStorage;
