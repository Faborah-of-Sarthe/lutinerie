<?php
require_once('functions.php');

if (!empty($_POST) && isset($_POST['slug'])):

  $currentSlug = $_POST['slug'];
  $pwdToGuess = getPointPassword($currentSlug);

  if (!isset($_POST["password"])) {
    echo json_encode('Pas de mot de passe à vérifer');
  }

  if ($_POST["password"] == $pwdToGuess) {
    registerPointRepairment($currentSlug);
    echo json_encode(1);
  } else {
    echo json_encode(0);
  }

else:
  echo json_encode('Pas de slug à vérifer');
endif;
