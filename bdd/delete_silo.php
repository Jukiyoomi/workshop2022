<?php
require "DataBase.php";
$db = new DataBase();
if (isset($_POST['id'])) {
	if ($db->dbConnect()) {
		if ($db->delete("silo", $_POST['id'])) {
			echo "Suppression effectuée";
		} else {
			echo "Erreur de suppresion";
		}
	} else echo "Error: Database connection";
} else echo "All fields are required";
