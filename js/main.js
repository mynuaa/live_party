var isMobile = /mobile/i.test(navigator.userAgent);
var player = new DPlayer({
    element: document.getElementById('player'),
    autoplay: !isMobile,
    theme: '#FADFA3',
    loop: true,
    hotkey: !isMobile,
    video: {
        url: 'http://211.65.102.6:8080/hls/box.m3u8'
    },
    danmaku: {
        id: '1',
        api: '/plugin.php?id=live_party:danmaku',
        token: 'mynuaa-video'
    }
});
