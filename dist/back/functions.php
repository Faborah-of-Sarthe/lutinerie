<?php
header("Access-Control-Allow-Origin: *");
require("config.php");

function connectToDB() {
  try {
    $db_connect = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
  }
  catch (PDOException $e) {
  	die("Erreur en se connectant à la BD: " . $e->getMessage());
  }
  return $db_connect;
}

function getAllPoints() {
  $sql = "SELECT slug, label, repaired, latitude, longitude FROM points";
  $db = connectToDB();
  $query = $db->query($sql);
  $points = $query->fetchAll(PDO::FETCH_ASSOC);
  return $points;
}

function getPointFromId($pointId) {
  $db = connectToDB();
  $query = $db->prepare("SELECT slug, label, repaired, latitude, longitude FROM points WHERE slug = :slug");
  $query->bindParam(':slug', $pointId, PDO::PARAM_STR, 12);
  $query->execute();
  $point = $query->fetchAll(PDO::FETCH_ASSOC);
  return $point;
}
function getPointPassword($pointId) {
  $db = connectToDB();
  $query = $db->prepare("SELECT password FROM points WHERE slug = :slug");
  $query->bindParam(':slug', $pointId, PDO::PARAM_STR, 12);
  $query->execute();
  $result = $query->fetch(PDO::FETCH_NUM);
  // Seul le premier resultat va nous intéresser
  return $result[0];
}

function registerPointRepairment($pointId) {
  // 1 - enregistrement BDD
  $db = connectToDB();
  $query = $db->prepare("UPDATE points SET repaired = 1 WHERE slug = :slug");
  $query->bindParam(':slug', $pointId, PDO::PARAM_STR, 12);
  $query->execute();

  // 2 - on reprend toutes les données
  $points = getAllPoints();

  // 3 - et on les envoie à mercure
  define('DEMO_JWT', MERCURE_TOKEN);
  $postData = http_build_query([
      'topic' => MERCURE_POINTS_TOPIC,
      'data' => json_encode($points),
  ]);
  file_get_contents(MERCURE_URL, false, stream_context_create(['http' => [
      'method'  => 'POST',
      'header'  => "Content-type: application/x-www-form-urlencoded\r\nAuthorization: Bearer ".DEMO_JWT,
      'content' => $postData,
  ]]));
}
