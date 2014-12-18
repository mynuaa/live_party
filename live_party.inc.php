<?php

if (!defined('IN_DISCUZ')) die();

if (isset($_GET['ajax'])) {
	$content = file_get_contents('php://input');
	if ($_G['uid'] == 0) die();
	$data = array(
		'm' => 'p',
		'c' => $content,
		'a' => $_G['username']
	);
	$data_string = json_encode($data);
	if (strpos($_SERVER['HTTP_HOST'], 'nuaa') !== false) $ch = curl_init('http://zfjwx.sinaapp.com/ajax.php');
	else $ch = curl_init('http://localhost/zfj/wechat/1/ajax.php');
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json',
		'Content-Length: ' . strlen($data_string)
	));
	curl_exec($ch);
}
else {
	$plugPosi = "source/plugin/live_party";
	$url = $_G['cache']['plugin']['live_party']['netConnectionUrl'];
	$ver = isset($_GET['ver']) ? $_GET['ver'] : -1;
	include template("live_party:live_party");
}

?>