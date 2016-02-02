<?php
function db_connect()
{	
	$host="localhost"; // Host name
	$username="konstantin"; // Mysql username
	$password="s3curit3"; // Mysql password
	$db_name="konstantin_sido_bibliotheque"; // Database name
	try
	{
		//$db = new PDO('mysql:host=172.17.7.211;dbname=cinema', 'cir2', 'isen');
		$db = mysqli_connect($host,$username,$password,$db_name);
	}
	catch(Exception $e)
	{
		die('Erreur : ' . $e->getMessage());
	}
	return $db;
}
?>