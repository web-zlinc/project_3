<?php
    include 'DBHelper.php';
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;
    $limit = isset($_POST["limit"]) ? $_POST["limit"] : 7;

    $status = isset($_POST['status']) ? $_POST['status'] : '';

    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $uid = isset($_POST['uid']) ? $_POST['uid'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $gender = isset($_POST['gender']) ? $_POST['gender'] : '';
    $brithday = isset($_POST['brithday']) ? $_POST['brithday'] : '';
    $portrait = isset($_POST['portrait']) ? $_POST['portrait'] : '';
    $address = isset($_POST['address']) ? $_POST['address'] : '';
    
    
    if($status == 'query'){
        $sql = 'select SQL_CALC_FOUND_ROWS * from user where ';
        
        if($id){
            $sql .='id='."'".$id."'".' and ';
        }
        if($uid){
            $sql .='uid='."'".$uid."'".' and ';
        }
        if($phone){
            $sql .='phone='."'".$phone."'".' and ';
        }
        if($password){
            $sql .='password='."'".$password."'".' and ';
        }
        if($gender){
            $sql .='gender='."'".$gender."'".' and ';
        }
        if($brithday){
            $sql .='brithday='."'".$brithday."'".' and ';
        }
        if($portrait){
            $sql .='portrait='."'".$portrait."'".' and ';
        }
        if($address){
            $sql .='address='."'".$address."'".' and ';
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
        $sql = 'update user set ';
        
        if($uid){
            $sql .="uid='{$uid}'";
        }
        if($phone){
            $sql .=",phone='{$phone}'";
        }
        if($password){
            $sql .=",password='{$password}'";
        }
        if($gender){
            $sql .=",gender='{$gender}'";
        }
        if($brithday){
            $sql .=",brithday='{$brithday}'";
        }
        if($portrait){
            $sql .=",portrait='{$portrait}'";
        }
        if($address){
            $sql .=",address='{$address}'";
        }
        
        $sql .=" where id={$id}";
        
        // echo $sql;
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'Ok';
        }
    }else if($status == 'delete'){
        $sql = 'delete from user where id='.$id;
        
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'Ok';
        }
    }else if($status == 'insert'){
        $sql = 'insert into user(`uid`,`phone`,`password`,`gender`,`brithday`,`portrait`,`address`)';
        $sql .=' values ('."'".$uid."'".','."'".$phone."'".','."'".$password."'".','."'".$gender."'".','."'".$brithday."'".','."'".$portrait."'".','."'".$address."'".')';

        
        $result = excute_oop($sql);

        if($result == '1'){
            echo 'Ok';
        }

    }



?>