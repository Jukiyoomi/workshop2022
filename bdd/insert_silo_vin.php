<?php
require "DataBase.php";
$db = new DataBase();
if (isset($_POST['type']) && isset($_POST['nom']) && isset($_POST['capacite_max'])) {
	if ($db->dbConnect()) {
		if ($db->insert_silo("silo", $_POST['type'], $_POST['nom'], $_POST['capacite_max'])) {
			echo "Insertion réussie";
		} else echo "Insertion fail";
	} else echo "Error: Database connection";
} else echo "All fields are required";
