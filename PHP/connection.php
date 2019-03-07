<?php 
//En este archivo creo la conexion entre la pagina y la base de datos

//Variable que almacenara la conexion a la DB
$connection = mysqli_connect(
    'bnvlxxeiyqouvuwsye9r-mysql.services.clever-cloud.com', //Ubicacion del servidor
    'upni8eo7rdcbsrx5',//Usuario de la BD MySQL (usualmente root)
    'UGLC1R2Ul7zrWslQ6YLS',//Contraseña de la BD (usualmente vacia)
    'bnvlxxeiyqouvuwsye9r'//Nombre de la Base de datos (Recomendable usar el mismo nombre)
);

?>