<?php
// check post + ajax
if(!$_SERVER["REQUEST_METHOD"] == "POST" || empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
  http_response_code(400);
  die('Mauvaise requète.');
}
// check des champs
if(empty($_POST['sujet']) || empty($_POST['message']) || empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  die('Veuillez revoir les champs.');
} else {
  $to = 'konstantin.sidorenko@orange.fr';
  $subject = 'Contact depuis le portfolio';
  $message = "De: ".$_POST['email']."\n Sujet: ".$_POST['sujet']."\nMessage: ".$_POST['message'];
  $headers = 'From: contact@konstantin-sidorenko.fr';
  // envoi du mail
  if(!mail($to, $subject, $message)){
    http_response_code(400);
    die('Une erreur est survenue lors de l\'envoi du mail.');
  }
  echo 'Votre message a été envoyé !';
}
?>
