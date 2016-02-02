<?php
if(isset($_POST) && isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])){
	if(!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['message'])){
		$destinataire = "konstantin.sidorenko@orange.fr";
		$sujet = "Demande de contact Portfolio";
		$message = "Nom : ".$_POST['nom']."\r\n";
		$message = "Adresse email : ".$_POST['email']."\r\n";
		$message = "Message : ".$_POST['message']."\r\n";
		$entete = 'From: '.$_POST['email']."\r\n".
		'Reply-To: '.$_POST['email']."\r\n".
		'X-Mailer: PHP/'.phpversion();
		if (mail($destinataire,$sujet,$message,$entete)){
			//header('Refresh: 4; url=index.htm');
			echo '<META http-equiv="refresh" content="3; URL=index.htm">';
			echo '<div align="center"> Message envoyé !<br><br> Redirection vers la page d\'accueil ...';
		} else {
			//header('Refresh: 4; url=contact.htm');
			echo '<META http-equiv="refresh" content="3; URL=contact.htm">';
			echo '<div align="center"> Une erreur est survenue lors de l\'envoi du formulaire par email <br><br> Redirection vers la page contact ...';
		}
	}
exit();
}
?>