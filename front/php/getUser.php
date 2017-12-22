<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include 'DBHelper.php';

    $phone = isset($_GET["phone"]) ? $_GET["phone"] : '';



    $sql = "select * from goods,`user`,shoppingcart where `user`.phone =$phone and `user`.uid = shoppingcart.uid and  shoppingcart.gid= goods.gid ;";

    // 调用DBhelper中的query方法
    $result = query($sql);


    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>

