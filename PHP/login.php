<?php 

require 'connection.php';

if (isset($_POST['username'])) 
{
    $username = $_POST['username'];
    $password = sha1($_POST['password']);

    $query = "SELECT * FROM users WHERE Username = '$username' AND Password = '$password'";
    $result = mysqli_query($connection, $query);

    $row = mysqli_fetch_assoc($result);

    if (mysqli_num_rows($result) > 0) 
    {
        /* $_SESSION['user'] = $user; */
        echo 1;
    }
    else
    {
        echo 0;
    }

} 
else 
{
    echo 'Dont work';
}

?>