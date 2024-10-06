const Throttle = {
  isThrottling<
    TData extends WechatMiniprogram.Page.DataOption,
    TCustom extends WechatMiniprogram.Page.CustomOption
  >(
    page: WechatMiniprogram.Page.Instance<TData, TCustom>,
    id: string
  ): boolean {
    const throttle = page.data[id];
    if (throttle === undefined) {
      return false;
    }

    return throttle;
  },

  startThrottle<
    TData extends WechatMiniprogram.Page.DataOption,
    TCustom extends WechatMiniprogram.Page.CustomOption
  >(page: WechatMiniprogram.Page.Instance<TData, TCustom>, id: string): void {
    page.setData({ [id]: true } as Partial<TData>);
  },

  endThrottle<
    TData extends WechatMiniprogram.Page.DataOption,
    TCustom extends WechatMiniprogram.Page.CustomOption
  >(page: WechatMiniprogram.Page.Instance<TData, TCustom>, id: string): void {
    page.setData({ [id]: false } as Partial<TData>);
  },
};

export default Throttle;
