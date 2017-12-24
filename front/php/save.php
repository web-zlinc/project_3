<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    //个人信息
    $id = isset($_GET["id"]) ? $_GET["id"] : '';

    $gender = isset($_GET["gender"]) ? $_GET["gender"] : '';

    $phone = isset($_GET["phone"]) ? $_GET["phone"] : '';

    $brithday = isset($_GET["brithday"]) ? $_GET["brithday"] : '';

    $site = isset($_GET["site"]) ? $_GET["site"] : '';
    

    if($id&&$gender&&$phone&&$brithday&&$site){
        $sql = "update user set gender='$gender',phone='$phone',brithday='$brithday',address='$site' where uid='$id'";
    }
    $result = query($sql);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>    