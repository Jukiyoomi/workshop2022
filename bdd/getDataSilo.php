<?php

require_once ('getData.php');

$test = new DataBase();
$test = $test->getData_silo('silo', 1);
echo json_encode($test);