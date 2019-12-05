<?php

function arrayPHPtoJS($arrayPHP) {
  $arrayJS = [];
  foreach ($arrayPHP as $id => $point) {
    $arrayJS[] = array_merge(['id' => $id], $point);
  }
  return $arrayJS;
}
