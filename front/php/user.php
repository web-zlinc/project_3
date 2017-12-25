<?php

    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";


    $lphone = isset($_GET["lphone"]) ? $_GET["lphone"] : '';

    $lpassword = isset($_GET["lpassword"]) ? $_GET["lpassword"] : '';
    
    if($lphone && $lpassword){
        $sql = "select * from user where phone = $lphone and  password =$lpassword";
    }
    $result = query($sql);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);

?>