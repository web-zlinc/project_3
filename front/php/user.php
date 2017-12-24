<?php

    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";


    $lphone = isset($_GET["lphone"]) ? $_GET["lphone"] : '';

    $lpassword = isset($_GET["lpassword"]) ? $_GET["lpassword"] : '';
    //登陆
    if($lphone && $lpassword){
        $sql = "select * from user where phone = $lphone and  password =$lpassword";
    }
    //注册
    $rphone = isset($_GET["rphone"]) ? $_GET["rphone"] : '';

    $rpassword = isset($_GET["rpassword"]) ? $_GET["rpassword"] : '';

    if($rphone && $rpassword){
        $sql = "insert into user (phone,password) values($rphone,$rpassword)";
    }


    //个人信息
    $pid = isset($_GET["id"]) ? $_GET["id"] : '';

    $pgender = isset($_GET["pgender"]) ? $_GET["pgender"] : '';

    $pphone = isset($_GET["pphone"]) ? $_GET["pphone"] : '';

    $pbirthday = isset($_GET["pbirthday"]) ? $_GET["pbirthday"] : '';

    $psite = isset($_GET["psite"]) ? $_GET["psite"] : '';
    
    if($pid&&$pgender&&$pphone&&$pbirthday&&$psite){
        $sql = "UPDATE user SET gender='$pgender',phone='$pphone',birthday='$pbirthday',address='$psite'' WHERE id='$id'";
    }

   
    $result = query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);

?>