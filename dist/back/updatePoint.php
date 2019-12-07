<?php
require_once('functions.php');

// point modifié
// (partie qui proviendra des jeux par la suite)
$pointToUpdate = 'sacramento';

// sauvegarde SQL
registerPointRepairment($pointToUpdate);

// on reprend toutes les données
$points = getAllPoints();

// et on les envoie à mercure
define('DEMO_JWT', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyJmb28iLCJiYXIiXSwicHVibGlzaCI6WyJmb28iXX19.afLx2f2ut3YgNVFStCx95Zm_UND1mZJ69OenXaDuZL8');
$postData = http_build_query([
    'topic' => 'http://localhost:3000/demo/books/1.jsonld',
    'data' => json_encode($points),
]);

echo file_get_contents('http://localhost:3000/.well-known/mercure', false, stream_context_create(['http' => [
    'method'  => 'POST',
    'header'  => "Content-type: application/x-www-form-urlencoded\r\nAuthorization: Bearer ".DEMO_JWT,
    'content' => $postData,
]]));
