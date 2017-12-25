<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include 'DBHelper.php';

    $params = isset($_POST["params"]) ? $_POST["params"] : '';
    
    $goodsArr = JSON_decode($params,true);
    foreach ($goodsArr as $key => $value){
        $resKey = '(';
        $resValue = '(';
        // $value = JSON_decode($value,true);
        foreach($value as $key2 => $value2){
            
            $resKey .= "$key2,";
            $resValue .= "$value2,";
        };

        $resKey = substr($resKey,0,-1).')';
        $resValue = substr($resValue,0,-1).')';
        echo $resKey;
        echo  $resValue;
        $sql = "insert into `order` $resKey values $resValue;";
        $result = query($sql)   ;

        if($result){
            echo "ok";
        };
    }

    // echo json_encode($params, JSON_UNESCAPED_UNICODE);
?>