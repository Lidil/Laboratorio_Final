<?php

//Conexion

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "laboratorio";



if($_POST){

    $nombre= $_POST['nombre'];
    $primer_apellido = $_POST['primer_apellido'];
    $segundo_apellido = $_POST['segundo_apellido'];
    $email = $_POST['email'];
    $login = $_POST['login'];
    $clave = $_POST['clave'];

    //Validar que esten todos los datos

    if(empty($nombre) || empty($primer_apellido)||empty($segundo_apellido) || empty($email) || empty($login) || empty($clave)){
        echo" Por favor, complete todos los campos requeridos.";

    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "El email no es válido.";
        include 'index.html';
    }elseif(strlen($clave)<4||strlen($clave)>8){
        echo"La contraseña tiene que tener entre 4 y 8 caracteres.";
        include 'index.html';
    }else{
           //Crear conexion
            $conn = new mysqli($servername, $username, $password, $dbname);

            //Comprobar conexion
            if($conn ->connect_error){
                die("Error al conectar con la base de datos: " .$conn->connect_error);
            }

            //Comprobar si el email existe

            $emailExiste = false;
            $emailQuery = "SELECT * FROM usuario WHERE email='$email'";
            $resultadoEmail = $conn->query($emailQuery);

            if($resultadoEmail->num_rows>0){
                $emailExiste=true;
            }

            //si esta registrado
            if($emailExiste){
                echo "El email ya esta registrado.";
            }else{
                //Metemos los datos en la base de datos
                $sql = "INSERT INTO usuario (Nombre, PrimerApellido, SegundoApellido, Email, NonUsuario, Contraseña)
                VALUES ('$nombre','$primer_apellido','$segundo_apellido','$email','$login','$clave')";
                
                if($conn->query($sql)===true){
                    echo "Registro realizado con exito.";
                    include 'index.html';
                }else{
                    echo"Error en el registro:".$conn->error;
                }
            }
        $conn->close();
    }
 

}
?>