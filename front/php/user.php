<?php

    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";


    $lphone = isset($_GET["lphone"]) ? $_GET["lphone"] : '';

    $lpassword = isset($_GET["lpassword"]) ? $_GET["lpassword"] : '';

    $rphone = isset($_GET["rphone"]) ? $_GET["rphone"] : '';

    $rpassword = isset($_GET["rpassword"]) ? $_GET["rpassword"] : '';
    
    if($lphone && $lpassword){
        $sql = "select * from user where phone = $lphone and  password =$lpassword";
    }
    
    if($rphone && $rpassword){
        $sql = "insert into user (phone,password) values($rphone,$rpassword)";
    }

    $result = query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);

?>