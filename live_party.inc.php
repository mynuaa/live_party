<?php

if (!defined('IN_DISCUZ')) die();

	$plugPosi = "source/plugin/live_party";
	$plugVars = $_G['cache']['plugin']['live_party'];
	// $url = $plugVars['netConnectionUrl'];
	$url = isset($_GET['stream']) ? $_GET['stream'] : $plugVars['netConnectionUrl'];
	$host = $plugVars['host'];
	$title = $plugVars['title'];
	$ver = isset($_GET['ver']) ? $_GET['ver'] : -1;
	$thumbnails = $plugVars['thumbnails'];
	include template("live_party:live_party");
