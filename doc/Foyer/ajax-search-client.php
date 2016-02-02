<?php
 include ('connect.php');
//recherche des résultats dans la base de données

if($_GET['utilisateur']!=""){

	$var = mysqli_real_escape_string($db,$_GET['utilisateur']);
	$var = addcslashes($var, '%_');
	$var = trim($var);
	$var = htmlspecialchars($var);
    
    $reqUser = mysqli_query($db,"SELECT login FROM USER WHERE login LIKE '".$var."%'");

}else{
        $reqUser = mysqli_query($db,'SELECT login FROM USER');
}

echo '
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
                echo '</table>';

?>
