<?php 
//En este archivo creo la conexion entre la pagina y la base de datos

//Variable que almacenara la conexion a la DB
$connection = mysqli_connect(
    'localhost', //Ubicacion del servidor
    'root',//Usuario de la BD MySQL (usualmente root)
    '',//Contraseña de la BD (usualmente vacia)
    'projects_tests'//Nombre de la Base de datos (Recomendable usar el mismo nombre)
);

?>