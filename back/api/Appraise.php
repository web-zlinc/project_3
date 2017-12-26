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
    $gid = isset($_POST['gid']) ? $_POST['gid'] : '';
    $content = isset($_POST['content']) ? $_POST['content'] : '';
    $username = isset($_POST['username']) ? $_POST['username'] : '';    
    
    if($status == 'query'){
        $sql = 'select SQL_CALC_FOUND_ROWS * from appraise where ';
        
        if($id){
            $sql .='id='."'".$id."'".' and ';
        }
        if($gid){
            $sql .='gid='."'".$gid."'".' and ';
        }
        if($content){
            $sql .='content='."'".$content."'".' and ';
        }
        if($username){
            $sql .='username='."'".$username."'".' and ';
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
        $sql = 'update appraise set ';
        
        if($gid){
            $sql .="gid='{$gid}'";
        }
        if($content){
            $sql .=",content='{$content}'";
        }
        if($username){
            $sql .=",username='{$username}'";
        }
        
        $sql .=" where id={$id}";
        
        // echo $sql;
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'Ok';
        }
    }else if($status == 'delete'){
        $sql = 'delete from appraise where id='.$id;
        
        $result = excute_oop($sql);
        
        if($result == '1'){
            echo 'Ok';
        }
    }else if($status == 'insert'){
        $sql = 'insert into appraise(`gid`,`content`,`username`)';
        $sql .=' values ('."'".$gid."'".','."'".$content."'".','."'".$username."'".')';

        
        $result = excute_oop($sql);

        if($result == '1'){
            echo 'Ok';
        }

    }

?>