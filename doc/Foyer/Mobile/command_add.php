<?php
    require('../connect.php');
    
    /*
    $_POST['login'] = 'troll18';
    $_POST['date'] = '8h29%;8h49';
    $_POST['command'] = '2%;1%+20%;11%+22%;5';
    */
    
    //On regarde si l'user existe sinon on l'ajoute
    $reqExistUser = mysqli_query($db,'SELECT * FROM USER WHERE login = "'.$_POST['login'].'" ') or die(mysqli_error($db));
    $tabExistUser = mysqli_fetch_array($reqExistUser);
    if(count($tabExistUser) == 0)  mysqli_query($db,'INSERT INTO USER (login) VALUES ("'.$_POST['login'].'")');
    
    //Pour avoir periode_debut et periode_fin
    $periode = explode("%;", $_POST['date']);
    
    //On créé la commande
    mysqli_query($db, 'INSERT INTO COMMAND (login, state, periode_debut, periode_fin) VALUES ("'.$_POST['login'].'", "1", "'.$periode[0].'", "'.$periode[1].'")') or die(mysqli_error($db));
    
    //On récupère l'id_commande de la commande créé
	$req_id_cmd = mysqli_query($db,'SELECT id_commande FROM COMMAND WHERE login = \''.$_POST['login'].'\' ORDER BY time DESC') or die(mysqli_error($db));
    $id_cmd =  mysqli_fetch_array($req_id_cmd);
    
    //On sépare les différents produits/qtt 
    $command = explode("%+", $_POST['command']);
    
    for($i=0;$i<count($command);$i++)
        {
        //Pour chaque produit/qtt les insert dans la BDD
        $prodQtt = explode("%;", $command[$i]);  
        mysqli_query($db, 'INSERT INTO PRODUCT_COMMAND (quantity, id_product, id_commande) VALUES ("'.$prodQtt[1].'", "'.$prodQtt[0].'",  "'.$id_cmd['id_commande'].'")') or die(mysqli_error($db));
        }
    //pour les notifs
    mysqli_query($db,'INSERT INTO NOTIFICATION (login, notification, id_command, method) VALUES ("'.$_POST['login'].'", "Votre commande est en cours de validation", "'.$id_cmd['id_commande'].'", "0")') or die(mysqli_error($db));
    
    //On renvoie l'id de la commande créé    
    echo $id_cmd['id_commande'];
        
?>