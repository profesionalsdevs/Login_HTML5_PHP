<?php 
//En este archivo de administrara el registro de usuario
require_once 'connection.php';

if (isset($_POST['r_firstname'])) 
{

    $first_name = $_POST['r_firstname'];
    $last_name = $_POST['r_lasname'];
    $username = $_POST['r_usnamereg'];
    $password = sha1($_POST['r_passwreg']);

    $query = 
    "INSERT INTO users (First_name, Last_name, Username, Password) 
        VALUES ('$first_name', '$last_name', '$username', '$password')";

    $result = mysqli_query($connection, $query);

    if ($result) 
    {
        echo 1;
    } 
    else 
    {
        echo 0;
    }
}
else
{
    echo 'Were not receiving data';
}

?>