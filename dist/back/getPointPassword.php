<?php
require_once('functions.php');

// point concerné dans l'url
$pointId = $_POST['slug'];
$pass = getPointPassword($pointId);
echo json_encode($pass);
