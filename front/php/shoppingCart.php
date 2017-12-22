<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $page = isset($_GET["page"]) ? $_GET["page"] : 1;
    $limit = isset($_GET["limit"]) ? $_GET["limit"] : 10;
    $order = isset($_GET["order"]) ? $_GET["order"] : '';

    include 'DBHelper.php';

    $uid = isset($_GET["uid"]) ? $_GET["uid"] : '';


    $sql = "select * from user where uid=$uid";

    // 调用DBhelper中的query方法
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>