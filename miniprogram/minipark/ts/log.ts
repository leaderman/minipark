export const Log = {
  debug: console.debug.bind(console),
  info: console.info.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
};

export const RealtimeLog = {
  info: wx.getRealtimeLogManager().info.bind(wx.getRealtimeLogManager()),
  warn: wx.getRealtimeLogManager().warn.bind(wx.getRealtimeLogManager()),
  error: wx.getRealtimeLogManager().error.bind(wx.getRealtimeLogManager()),
};
