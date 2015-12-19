<?php

if (!defined('IN_DISCUZ')) die();

if (isset($_GET['ajax'])) {
	$input = file_get_contents('php://input');
	$content = json_decode($input, true);
	switch ($content['m']) {
		case 'getPWData':
			break;
		case 'sendPWData':
			if ($_G['uid'] == 0) die();
			break;
	}
	if (strpos($_SERVER['HTTP_HOST'], 'nuaa') !== false) $ch = curl_init('http://zfjoffice.sinaapp.com/ajax.php');
	else $ch = curl_init('http://localhost/wechat/ajax.php');
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json',
		'Content-Length: ' . strlen($input)
	));
	header('Content-type: application/json');
	echo curl_exec($ch);
}
else {
	$plugPosi = "source/plugin/live_party";
	$url = $_G['cache']['plugin']['live_party']['netConnectionUrl'];
	$ver = isset($_GET['ver']) ? $_GET['ver'] : -1;
	include template("live_party:live_party");
}
