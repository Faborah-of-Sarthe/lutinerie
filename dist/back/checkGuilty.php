<?php
require_once('functions.php');

if (!empty($_POST) && isset($_POST['guilty'])):

  $guilty = $_POST['guilty'];


  if (utf8_decode(strtolower($guilty)) == 'timbale') {
    define('DEMO_JWT', MERCURE_TOKEN);
    $postData = http_build_query([
        'topic' => MERCURE_POINTS_TOPIC,
        'data' => json_encode(['type' => 'final']),
    ]);
    file_get_contents(MERCURE_URL, false, stream_context_create(['http' => [
        'method'  => 'POST',
        'header'  => "Content-type: application/x-www-form-urlencoded\r\nAuthorization: Bearer ".DEMO_JWT,
        'content' => $postData,
    ]]));
    echo json_encode([
      "status" => 1,
      "message" => "Bravo.",
    ]);
  } else {
    echo json_encode([
      "status" => 0,
      "message" => "Raté ! Ce n'est pas le bon coupable.",
    ]);
  }

else:
  echo json_encode([
    "status" => 0,
    "message" => "Erreur technique : Il manque un nom de coupable.",
  ]);
endif;
