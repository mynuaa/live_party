var isMobile = /mobile/i.test(navigator.userAgent);
var api = '//' + window.G.host + '/plugin.php?id=live_party:danmaku';
var dp = new DPlayer({
    element: document.getElementById('player'),
    autoplay: !isMobile,
    theme: '#FADFA3',
    loop: true,
    hotkey: !isMobile,
    video: {
        url: window.G.url,
        type: 'hls',
    },
    danmaku: {
        // use an ID that is not exists
        id: '@live@',
        api: api + '&lastId=0',
        token: 'mynuaa-video',
    },
});
// long ajax query for live danmaku
var lastId = 0;
var ajaxLag = 2;
var ajaxTimeout = 25000;
var dan = [];
var getLiveDanmaku = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                var response = JSON.parse(xhr.responseText);
                if (response.code !== 1) {
                    setTimeout(getLiveDanmaku, ajaxLag);
                }
                else {
                    dan = response.danmaku.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    if (dan.length > 0) {
                        var newId = parseInt(dan[dan.length - 1].id);
                        if (lastId < newId) {
                            lastId = newId;
                        }
                        for (var danIndex = 0; danIndex < dan.length; danIndex++) {
                            var t = dan[danIndex];
                            if (!/<\s*img/.test(t.text)) {
                                t.text = t.text.replace(/</g, '&lt;');
                                if (t) {
                                    dp.pushDanmaku(t.text, t.color, t.type);
                                }
                            }
                        }
                    }
                    getLiveDanmaku();
                }
            }
            else {
                setTimeout(getLiveDanmaku, ajaxLag);
            }
        }
    };
    var apiurl = `${api}&player=@live@&lastId=${lastId}`;
    xhr.timeout = ajaxTimeout;
    xhr.ontimeout = function () {
        setTimeout(getLiveDanmaku, ajaxLag);
    };
    xhr.open('get', apiurl, true);
    xhr.send(null);
};
getLiveDanmaku();
