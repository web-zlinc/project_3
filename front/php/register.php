<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    //注册
    $phone = isset($_GET["phone"]) ? $_GET["phone"] : '';

    $password = isset($_GET["password"]) ? $_GET["password"] : '';
    $res='';
    if($phone && $password){
        $sql = "select * from user where phone = $phone";
        $result = query($sql);
        if($result==[]){
            $sql = "insert into user (phone,password) values($phone,$password)";
            $result = excute($sql);
            $res="sucess";
        }else{
            $res="failed";
        }
    }
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>    