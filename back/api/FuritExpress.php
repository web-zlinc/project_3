<?php

    include 'DBHelper.php';
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 7;

    $status = isset($_POST['status']) ? $_POST['status'] : '';

    $id = isset($_POST["id"]) ? $_POST["id"] : '';
    $gid = isset($_POST["gid"]) ? $_POST["gid"] : '';  
    $name = isset($_POST["name"]) ? $_POST["name"] : '';
    $price = isset($_POST["price"]) ? $_POST["price"] : '';
    $details = isset($_POST["details"]) ? $_POST["details"] : '';    
    $images = isset($_POST["images"]) ? $_POST["images"] : '';    
    $short_name = isset($_POST["short_name"]) ? $_POST["short_name"] : '';
    $inventory = isset($_POST["inventory"]) ? $_POST["inventory"] : '';
    $standard = isset($_POST["standard"]) ? $_POST["standard"] : '';
    $hot = isset($_POST["hot"]) ? $_POST["hot"] : '';
    $sale = isset($_POST["sale"]) ? $_POST["sale"] : '';    
    $type = isset($_POST["type"]) ? $_POST["type"] : '';
    
    
    if($status == 'query'){
        $sql = 'select SQL_CALC_FOUND_ROWS * from goods where ';
        
        if($id){
            $sql .='id='."'".$id."'".' and ';
        }
        if($gid){
            $sql .='gid='."'".$gid."'".' and ';
        }
        if($name){
            $sql .='name='."'".$name."'".' and ';
        }
        if($price){
            $sql .='price='."'".$price."'".' and ';
        }
        if($details){
            $sql .='details='."'".$details."'".' and ';
        }
        if($images){
            $sql .='images='."'".$images."'".' and ';
        }
        if($short_name){
            $sql .='short_name='."'".$short_name."'".' and ';
        }
        if($inventory){
            $sql .='inventory='."'".$inventory."'".' and ';
        }
        if($standard){
            $sql .='standard='."'".$standard."'".' and ';
        }
        if($hot){
            $sql .='hot='."'".$hot."'".' and ';
        }
        if($sale){
            $sql .='sale='."'".$sale."'".' and ';
        }
        if($type){
            $sql .='type='."'".$type."'".' and ';
        }
        $sql .= '1=1';
        $sql .= ' limit ';
        $sql .= ($page - 1)*$limit;
        $sql .= ', ';
        $sql .= $limit;
    
        $sql .= ';select FOUND_ROWS() as rowsCount;';
    
        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else if($status == 'update'){
        $sql = 'update goods set ';
        
        if($gid){
            $sql .="gid='{$gid}'";
        }
        if($name){
            $sql .=",name='{$name}'";
        }
        if($price){
            $sql .=",price='{$price}'";
        }
        if($details){
            $sql .=",details='{$details}'";
        }
        if($images){
            $sql .=",images='{$images}'";
        }
        if($short_name){
            $sql .=",short_name='{$short_name}'";
        }
        if($inventory){
            $sql .=",inventory='{$inventory}'";
        }
        if($standard){
            $sql .=",standard='{$standard}'";
        }
        if($hot){
            $sql .=",hot='{$hot}'";
        }
        if($sale){
            $sql .=",sale='{$sale}'";
        }
        if($type){
            $sql .=",type='{$type}'";
        }
        $sql .=" where id='{$id}'";
        
        // echo $sql;

        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'Ok';
        }
    }else if($status == 'delete'){
        $sql = 'delete from goods where id='.$id;
        
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'Ok';
        }
    }else if($status == 'insert'){
        $sql = 'insert into goods(`gid`,`hot`,`details`,`name`,`type`,`price`,`short_name`,`inventory`,`images`,`standard`,`sale`)';
        $sql .=' values ('.$gid.','.$hot.','.$details.', '.$name.', '.$type.', '.$price.', '.$short_name.', '.$inventory.', '.$images.', '.$standard.', '.$sale.')';
        
        $result = excute_oop($sql);

        if($result == '1'){
            echo 'Ok';
        }

    }

?>