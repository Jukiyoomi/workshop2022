<?php
require "DataBase.php";
$db = new DataBase();
$data = json_decode(file_get_contents("php://input"));

if (isset($data->type) && isset($data->nom) && isset($data->capacite_max)) {
	if ($db->dbConnect()) {
		if ($db->insert_silo("silo", $data->type, $data->nom, $data->capacite_max)) {
			header("Location: ../php/pages/accueil.php");
		} else echo "Insertion fail";
	} else echo "Error: Database connection";
} else echo "All fields are required";
