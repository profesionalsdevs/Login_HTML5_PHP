<?php 
//En este archivo de administrara el registro de usuario
require_once 'connection.php';

if (isset($_POST['username'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['second_name'];
    $username = $_POST['username'];
    $password = sha1($_POST['password']);

    $query = 
    "INSERT INTO users (First_name, Last_name, Username, Password) 
        VALUES ($first_name, $last_name, $username, $password)";
    $result = mysqli_query($connection, $query);

    if ($result) {
        echo 1;
    } else {
        echo 0;
    }
}

?>