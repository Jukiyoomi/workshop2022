<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");

require "DataBase.php";
$db = new DataBase();
$data = json_decode(file_get_contents("php://input"));

echo json_encode($data);

if (isset($data->id_silo)) {
	if ($db->dbConnect()) {
		if ($db->delete("silo", $data->id_silo)) {
			echo "Suppression effectuée";
		} else {
			echo "Erreur de suppresion";
		}
	} else echo "Error: Database connection";
} else echo "All fields are required";
