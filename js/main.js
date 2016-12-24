var isMobile = /mobile/i.test(navigator.userAgent);
var player = new DPlayer({
    element: document.getElementById('player'),
    autoplay: !isMobile,
    theme: '#FADFA3',
    loop: true,
    hotkey: !isMobile,
    video: {
        url: 'http://oiorb2mdc.bkt.clouddn.com/9.m3u8',
    },
    danmaku: {
        api: 'http://' + location.host + '/plugin.php?id=live_party:danmaku',
        token: 'mynuaa-video',
        ajaxTimeout: 25000,
        ajaxLag: 0,
    },
});
