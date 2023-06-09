<?php

//Conexion
$servername="localhost";
$username="root";
$password="";
$dbname="laboratorio";

session_start();


   //Crear conexion
   $conn = new mysqli($servername, $username, $password, $dbname);

   //Comprobar conexion
   if($conn ->connect_error){
       die("Error al conectar con la base de datos: " .$conn->connect_error);
   }


$login = $_POST['login'];
$clave = $_POST['clave'];

$consulta="SELECT COUNT(*) AS contar FROM usuario WHERE NonUsuario = '$login' and Contraseña= '$clave'";

$resultado = $conn->query($consulta);
$array= mysqli_fetch_array($resultado);

//Comprobar si en array tiene algun valor
if($array['contar']>0){
    echo "Bienvenido  ".$login;
}else{
    echo"Datos incorrectos";
    //Redirigimos para que vuelva a meter los datos
    include 'cuenta.html';
    die;
}
$conn->close();
?>