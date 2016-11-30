<?php

$content = file_get_contents('php://input');
$content = json_decode($content, true);
if(isset($content['token']) && ($content['token'] == 'mynuaa-video')) {
    $pw_content = $content['text'];
    $pw_author = '2';
    $pw_msgid = '2';
    $pw_type = isset($content['type']) ? $content['type'] : 'right';
    $pw_color = isset($content['color']) ? $content['color'] : '#FFF';
    $pw_avatar_url = '3';
} else if($_GET['id']){
    if ($lastId == 0) {
        $sql = "SELECT 
          `pw_content` AS `text`,
          `pw_author` AS `author`,
          `pw_type` AS `type`,
          `pw_color` AS `color`,
          1 AS `time`
          FROM `pw_post` WHERE `pw_id` = {$player} ORDER BY `pw_unique_id` DESC LIMIT 10";
    } else {
        $sql = "SELECT `pw_content` AS `text`,
          `pw_author` AS `author`,
          `pw_type` AS `type`,
          `pw_color` AS `color`,
          1 AS `time`
          FROM `pw_post` WHERE `pw_id` = {$player} AND `pw_unique_id` > {$lastId}";
    }
}
echo '0';