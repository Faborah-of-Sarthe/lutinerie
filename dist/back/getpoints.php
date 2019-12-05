<?php

require_once('data.php');
require_once('functions.php');

$pointsJS = arrayPHPtoJS($points);

echo json_encode($pointsJS);
