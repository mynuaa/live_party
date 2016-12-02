var isMobile = /mobile/i.test(navigator.userAgent);
var player = new DPlayer({
    element: document.getElementById('player'),
    autoplay: !isMobile,
    theme: '#FADFA3',
    loop: true,
    hotkey: !isMobile,
    video: {
        url: 'http://my.nuaa.edu.cn/hls/box.m3u8'
    },
    danmaku: {
        api: '/plugin.php?id=live_party:danmaku',
        token: 'mynuaa-video'
    }
});
