<?php

require_once ('getData.php');

$test = new DataBase();
$test = $test->getData_silo('silo');
echo json_encode($test);