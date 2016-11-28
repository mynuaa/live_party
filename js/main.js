var useHotKey = !/mobile/i.test(navigator.userAgent);
var player = new DPlayer({
    element: document.getElementById('player'),
    autoplay: false,
    theme: '#FADFA3',
    loop: false,
    hotkey: useHotKey,
    video: {
        url: 'http://my.nuaa.edu.cn/hls/hls/away.m3u8'
    },
    danmaku: {
        id: '',
        api: '/office/ajax.php?class=danmaku',
        token: 'mynuaa-video',
    }
});
