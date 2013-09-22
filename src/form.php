<?php
//var_dump($_POST);

				    // registramos en la base
					$errorDB = false;
					$link =  mysqli_connect('localhost', 'avon', 'avon**123','inscripciones');
					if (mysqli_connect_errno()) {
						$errorDB = true;
					}
					
					$apellido       = mysqli_real_escape_string($link, utf8_decode($_REQUEST['apellido']));
					$nombres 	    = mysqli_real_escape_string($link, utf8_decode($_REQUEST['nombres']));
					$fechanac       = mysqli_real_escape_string($link, $_REQUEST['dia'].'/'.$_REQUEST['mes'].'/'.$_REQUEST['ano']);
					$tipodoc		= mysqli_real_escape_string($link, $_REQUEST['tipoDoc']);
					$numerodoc      = mysqli_real_escape_string($link, utf8_decode($_REQUEST['numeroDoc']));
					$calle			= mysqli_real_escape_string($link, utf8_decode($_REQUEST['calle']));
					$ciudad			= mysqli_real_escape_string($link, utf8_decode($_REQUEST['ciudad']));
					$partido		= mysqli_real_escape_string($link, utf8_decode($_REQUEST['partido']));
					$localidad		= mysqli_real_escape_string($link, utf8_decode($_REQUEST['localidad']));
					$tel			= mysqli_real_escape_string($link, $_REQUEST['tel']);
					$email			= mysqli_real_escape_string($link, $_REQUEST['email']);
					$revendedora	= mysqli_real_escape_string($link, $_REQUEST['revendedora']);
					$numerocuenta	= mysqli_real_escape_string($link, $_REQUEST['numeroCuenta']);

					$sql = "insert into inscriptos (apellido,nombres,fechanac,tipodoc,numerodoc,calle,ciudad,partido,localidad,tel,email,revendedora,numerocuenta) 
							values('{$apellido}','{$nombres}','{$fechanac}','{$tipodoc}','{$numerodoc}','{$calle}','{$ciudad}','{$partido}','{$localidad}','{$tel}','{$email}','{$revendedora}','{$numerocuenta}')";
					$res = mysqli_query($link,$sql);
					//echo $sql;
					if($errorDB or !$res) {
						echo "ERR";
					} else {	
							echo "OK";
					}


?>