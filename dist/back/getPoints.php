<?php
require_once('functions.php');

$pointsPHP = getAllPoints();

echo json_encode($pointsPHP);
