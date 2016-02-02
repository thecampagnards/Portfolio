<?php session_start();
if($_SESSION['login']== ""){
    header('Location: index.php');
}
?>

<!DOCTYPE html>
<html>
	<head>
	<title> Gestion des clients </title>
        <!-- Meta -->
		<meta charset=utf-8 />
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="js/bootstrap.js" rel="javascript">
		<script src="http://code.jquery.com/jquery.min.js"></script>
	    <script src="js/bootstrap.min.js"></script>
	    <meta Http-Equiv="Cache-Control" Content="no-cache">
<meta Http-Equiv="Pragma" Content="no-cache">
<meta Http-Equiv="Expires" Content="0">
<meta Http-Equiv="Pragma-directive: no-cache">
<meta Http-Equiv="Cache-directive: no-cache">
	    <script type="text/javascript">
            $(document).ready( function() {
          // détection de la saisie dans le champ de recherche
          $('#pseudo').keyup( function(){
            $field = $(this);
        
            if( $field.val().length > -1 )
            {
              $.ajax({
          	type : 'GET', // envoi des données en GET ou POST
        	url : 'ajax-search-client.php' , // url du fichier de traitement
        	data : 'utilisateur='+$(this).val() , // données à envoyer en  GET ou POST
        	success : function(data){ // traitements JS à faire APRES le retour d'ajax-search.php
        		$('#results').html(''); // affichage des résultats dans le bloc
        		$('#results').html(data); // affichage des résultats dans le bloc
        	}
              });
            }
          });
            });
        </script>
	    
	
	</head>

	<body>
        <section>
        <br><br>
 
        <h1 style="margin-left:15%;">Application Foyer <small>By Digital Design</small></h1>

        <br><br>
                      
             <!-- Static navbar -->
              <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <div style="height:75px;" class="navbar-header">
                    <img  style="height:75px;" class="navbar-brand" src="img/logo.png">
                  </div>
                  <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                      <li><a style="height:75px;padding-top:28px;" href="produit.php">Gestion des produits</a></li>
                      <li><a style="height:75px;padding-top:28px;" href="commande.php">Gestion des commandes </a></li>
                      <li class="active"><a style="height:75px;padding-top:28px;" href="client.php">Clients</a></li>
                    </ul>
                    <ul class="navbar-nav navbar-right ">
                        <a href="index.php"><button style="margin-top:18px;" type="submit" class="btn btn-default" >Déconnexion</button></a>
                     </ul>
                    <ul class="nav navbar-nav navbar-right ">
                        <li><a style="height:75px;padding-top:28px;"><?php echo $_SESSION['login']; ?></a></li>
                       
                     </ul>
                  </div><!--/.nav-collapse -->
                </div><!--/.container-fluid -->
              </nav>
                        <h2 style="text-align:center;">Clients</h2>
            <br><br>
	<?php
	    require('connect.php');
        if($_POST['Message'] == "Envoyer")
            {
            mysqli_query($db, 'DELETE FROM NOTIFICATION WHERE method = "1" ') or die(mysqli_error($db));
            echo '<div class="alert alert-success" role="alert"><p style="text-align:center;"> Le message à bien été envoyé </p></div>';
            mysqli_query($db,'INSERT INTO NOTIFICATION (notification, id_command, method) VALUES ("'.$_POST['message'].'",  "-1", "1")') or die(mysqli_error($db));    
            }
        if($_POST['MessagePerso'] == "Envoyer")
            {
            mysqli_query($db, 'DELETE FROM NOTIFICATION WHERE method = "2" AND login = "'.$_POST['login'].'"') or die(mysqli_error($db));
            echo '<div class="alert alert-success" role="alert"><p style="text-align:center;"> Le message à bien été envoyé </p></div>';
            mysqli_query($db,'INSERT INTO NOTIFICATION (notification, id_command,  method, login) VALUES ("'.$_POST['message'].'",  "-1", "2", "'.$_POST['login'].'" )') or die(mysqli_error($db));    
            }
        if($_POST["supprBroadcast"] == "Supprimer Broadcast")
            {
            mysqli_query($db, 'DELETE FROM NOTIFICATION WHERE method = "1" ') or die(mysqli_error($db));  
            echo '<div class="alert alert-danger" role="alert"><p style="text-align:center;"> Les messages ont bien été Supprimés </p></div>';
            }
	?>
	<div class="text-center"><br>
	<button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModal" data-whatever="'.$tabCmd['login'].'"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;Message à tous</button>
	<br /><br />
	<form action="client.php" method="post"> <input role="button" type="submit" class="btn btn-primary" value="Supprimer Broadcast" name="supprBroadcast" ></form>

	</div>
	<br>
	<div class="input-group">
        <span class="input-group-addon" id="sizing-addon2">Chercher un client</span>
        <input type="text" id="pseudo" class="form-control" placeholder="Nom du Client" aria-describedby="sizing-addon2">
    </div>
            
	
	        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">Nouveau message à tous</h4>
                  </div>
                  <div class="modal-body">
                    <form action="client.php" method="post" >
                        
                      <div class="form-group">
                        <label for="message-text" class="control-label">Message:</label>
                        <textarea class="form-control" data-whatever="message" name="message"></textarea>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                        <input role="button" type="submit" class="btn btn-primary" value="Envoyer" name="Message" >
                      </div>
                    </form>
                  </div>
                </div>
               </div>
            </div>
            <br /><br />
    <?php
        $reqUser = mysqli_query($db,'SELECT login FROM USER');
        echo 
                '<div id=results>
                <table class="table table-striped">
                    <tr>
                        <th>Login</th>
                        <th>Message</th>
                    </tr>';
                while($tabUser = mysqli_fetch_array($reqUser))
                    {
                    echo '<tr><td>'.$tabUser['login'].'</td>
                    
                        <td>
                        <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModal'.$tabUser['login'].'" ><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></button>
                        </td>
                    </tr>
                    
                    <div class="modal fade" id="exampleModal'.$tabUser['login'].'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="exampleModalLabel">Nouveau message à '.$tabUser['login'].'</h4>
                          </div>
                          <div class="modal-body">
                            <form action="client.php" method="post" >
                                
                              <div class="form-group">
                                <label for="message-text" class="control-label">Message:</label>
                                <input type="hidden" name="login" value="'.$tabUser['login'].'"/>
                                <textarea class="form-control" data-whatever="message" name="message"></textarea>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                                <input role="button" type="submit" class="btn btn-primary" value="Envoyer" name="MessagePerso" >
                              </div>
                            </form>
                          </div>
                        </div>
                       </div>
                    </div>';
                    }
                echo '</table></div>';
    ?>
    </section>
    <?php include('footer.php') ?>
    
    </body>
</html>