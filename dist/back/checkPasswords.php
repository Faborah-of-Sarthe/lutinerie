<?php
require_once('functions.php');

if (!empty($_POST) && isset($_POST['slug'])):

  $currentSlug = $_POST['slug'];
  $pwdToGuess = getPointPassword($currentSlug);

  if (!isset($_POST["password"])) {
    echo json_encode([
      "status" => 0,
      "message" => "Erreur technique : pas de mot de passe à vérifer",
    ]);
  }

  if (utf8_decode(strtolower($_POST["password"])) == strtolower($pwdToGuess)) {
    registerPointRepairment($currentSlug);
    echo json_encode([
      "status" => 1,
      "message" => "Le point stratégique a bien été réparé.",
    ]);
  } else {
    echo json_encode([
      "status" => 0,
      "message" => "Raté ! Ce n'est pas le bon mot de passe.",
    ]);
  }

else:
  echo json_encode([
    "status" => 0,
    "message" => "Erreur technique : slug manquant.",
  ]);
endif;
