<?php

require_once ('getData.php');

$test = new DataBase();
$test = $test->getData('historique_silo', 1);
echo json_encode($test);