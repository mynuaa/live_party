var useHotKey = !/mobile/i.test(navigator.userAgent);
var player = new DPlayer({
    element: document.getElementById('player'),
    autoplay: true,
    theme: '#FADFA3',
    loop: true,
    hotkey: useHotKey,
    video: {
        url: 'http://my.nuaa.edu.cn/hls/hls/away.m3u8'
    },
    danmaku: {
        id: '1',
        api: 'plugin.php?id=live_party:danmaku',
        token: 'mynuaa-video'
    }
});
