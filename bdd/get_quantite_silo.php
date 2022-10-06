<?php

require_once ('getData.php');


$test = new DataBase();
$data = json_decode(file_get_contents("php://input"));

if (isset($data->id_silo)) {
	if ($test->dbConnect()) {
		if ($test = $test->getData('historique_silo', $data->id_silo)) {
			echo json_encode($test);
		} else echo "Echec d'envoie des données";
	} else echo "Error: Database connection";
} else echo "All fields are required";
