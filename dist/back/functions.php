<?php
function connectToDB() {
  require("config.php");
  try {
    $db_connect = new PDO("mysql:host=" . $host . ";dbname=" . $dbname, $user, $pass);
  }
  catch (PDOException $e) {
  	die("Erreur en se connectant à la BD: " . $e->getMessage());
  }
  return $db_connect;
}

function getAllPoints() {
  $sql = "SELECT * FROM points";
  $db = connectToDB();
  $query = $db->query($sql);
  $points = $query->fetchAll(PDO::FETCH_ASSOC);
  return $points;
}

function getPointFromId($pointId) {
  $db = connectToDB();
  $query = $db->prepare("SELECT * FROM points WHERE slug = :slug");
  $query->bindParam(':slug', $pointId, PDO::PARAM_STR, 12);
  $query->execute();
  $point = $query->fetchAll(PDO::FETCH_ASSOC);
  return $point;
}

function registerPointRepairment($pointId) {
  $db = connectToDB();
  $query = $db->prepare("UPDATE points SET repaired = 1 WHERE slug = :slug");
  $query->bindParam(':slug', $pointId, PDO::PARAM_STR, 12);
  $query->execute();
}
