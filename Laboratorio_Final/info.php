<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Formulario</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

    <h1>Datos de los usuarios</h1>
            <?php

            //Conexion
            $servername="localhost";
            $username="root";
            $password="";
            $dbname="laboratorio";

            //Crear conexion
            $conn = new mysqli($servername, $username, $password, $dbname);

            //Comprobar conexion
            if($conn ->connect_error){
                die("Error al conectar con la base de datos: " .$conn->connect_error);
            }


            $consulta="SELECT *FROM `usuario`";
            $resultado = $conn->query($consulta);
            ?>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Email</th>
                        <th>Nombre de Usuario</th>
                    </tr>
            <?php
            //Mostramos los registros
            while($row = $resultado->fetch_array()) {
                
                echo "<tr><td>" . $row['Nombre'] . "</td>";
                echo "<td>" . $row['PrimerApellido'] . "</td>";
                echo "<td>" . $row['SegundoApellido'] . "</td>";
                echo "<td> " . $row['Email'] . "</td>";
                echo "<td>" . $row['NonUsuario'] . "</td></tr>";
            }
            $resultado->free_result();
            $conn->close();
            ?>
            </table>
    <div class="bloques">
            <div class="zona">
            <button type="submit" name="crear" id="crear"><a href="index.html" target="_self">Crear Cuenta</a></button>
            </div>
            <div class="zona">
            <button type="submit" name="sesion" id="sesion"><a href="cuenta.html" target="_self">Iniciar Sesion</a></button>
            </div>
    </div>
</body>
</html>