<?php

$content = file_get_contents('php://input');
$content = json_decode($content, true);
$danmakuCh = curl_init();

$danmakuApi = "http://my.nuaa.edu.cn/office/ajax.php?class=danmaku";
if(isset($content['token']) && ($content['token'] == 'mynuaa-video')) {
    $data['text'] = $content['text'];
    $data['username'] = $_G['username'];
    $data['uid'] = $_G['uid'];
    $data['type'] = isset($content['type']) ? $content['type'] : 'right';
    $data['color'] = isset($content['color']) ? $content['color'] : '#FFF';
    $data['token'] = $content['token'];
    $data = json_encode($data);
    $config = [
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_URL => $danmakuApi,
        CURLOPT_POST => 1
    ];
    curl_setopt_array($danmakuCh,$config);
    $content = curl_exec($danmakuCh);
    curl_close($danmakuCh);
} else if($_GET['player']){
    $lastId = (isset($_GET['lastId'])) ? intval($_GET['lastId']) : 0;
    $danmakuApi = $danmakuApi . "&lastId={$lastId}";
    $return = file_get_contents($danmakuApi);
    echo $return;
}
