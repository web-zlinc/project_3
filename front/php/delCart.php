<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    include 'DBHelper.php';

    $uid = isset($_POST["uid"]) ? $_POST["uid"] : '';


    $sql = "delete * from shoppingcart where uid=$uid";

    // 调用DBhelper中的query方法
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>