<?php
    include 'DBHelper.php';
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    $sql = "select id,username,type from admin where username='{$username}' and password='{$password}'";
    
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>