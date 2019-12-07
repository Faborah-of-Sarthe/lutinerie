<?php
require_once('functions.php');

// point concerné dans l'url
$pointId = $_GET['id'];

$point = getPointFromId($pointId);
echo json_encode($point);
