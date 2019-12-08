<?php
require_once('functions.php');

if ( isset($_POST['password'])):

  $bureaux = [
    'rillettes' => 'sarthe',
    'raclette' => 'savoie',
  ];

  if (array_key_exists( $_POST["password"], $bureaux)) {
    echo json_encode([
      'message' => $bureaux[$_POST['password']],
      'error' => false
    ]);
  } else {
    echo json_encode([
      'message' => 'Mauvais mot de passe !',
      'error' => true
    ]);
  }

else:
  echo json_encode('Pas de mot de passe à vérifer');
endif;
