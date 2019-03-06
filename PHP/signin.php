<?php 

/* require 'connection.php'; */

echo "Hello";

if (isset($_POST['username'])) 
{
    $username = $_POST['username'];
    $password = shal($_POST['password']);

    $query = "SELECT * FROM users WHERE Username = '$username' AND Password = '$password'";
    $result = mysqli_query($connection, $query);

    var_dump($result);

    if (mysqli_num_rows($result) > 0) 
    {
        $_SESSION['user'] = $user;
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