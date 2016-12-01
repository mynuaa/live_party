<?php

if (!defined('IN_DISCUZ')) die();

	$plugPosi = "source/plugin/live_party";
	$url = $_G['cache']['plugin']['live_party']['netConnectionUrl'];
	$ver = isset($_GET['ver']) ? $_GET['ver'] : -1;
	include template("live_party:live_party");
