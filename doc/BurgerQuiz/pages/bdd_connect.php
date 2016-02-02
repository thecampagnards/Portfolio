<?php

/*-------------------------------------------------------------*/
/*----CONNEXION-A-LA-BASE-DE-DONNEES - A MODIFIER (LIGNE 8)----*/
/*-------------------------------------------------------------*/

try {
	$db = new PDO('mysql:host=localhost;dbname=konstantin_sido_burgerquiz', 'konstantin', 's3curit3');

} catch (Exception $e) {
	echo $e->getMessage();
}

?>
