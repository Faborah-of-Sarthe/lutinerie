<?php
require_once('functions.php');

$file = 'data.php';

// point modifié
// (partie qui proviendra des jeux par la suite)
$update = [
  'id' => 1,
  'repaired' => true,
];

// reprise des data et maj
require_once($file);
$points[$update['id']]['repaired'] = $update['repaired'];


// écriture dans le fichier
try {
  file_put_contents($file, $points);
} catch (\Exception $e) {
  var_dump($e->getMessage());die;
}


// envoi à mercure
$pointsJS = arrayPHPtoJS($points);
define('DEMO_JWT', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyJmb28iLCJiYXIiXSwicHVibGlzaCI6WyJmb28iXX19.afLx2f2ut3YgNVFStCx95Zm_UND1mZJ69OenXaDuZL8');

$postData = http_build_query([
    'topic' => 'http://localhost:3000/demo/books/1.jsonld',
    'data' => json_encode($pointsJS),
]);

echo file_get_contents('http://localhost:3000/.well-known/mercure', false, stream_context_create(['http' => [
    'method'  => 'POST',
    'header'  => "Content-type: application/x-www-form-urlencoded\r\nAuthorization: Bearer ".DEMO_JWT,
    'content' => $postData,
]]));
