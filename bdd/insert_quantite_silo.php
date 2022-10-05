<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
require "DataBase.php";
$db = new DataBase();
$data = json_decode(file_get_contents("php://input"));
if (isset($data->id_silo) && isset($data->quantite)) {
    if ($db->dbConnect()) {
        if ($db->insert("historique_silo", $data->id_silo, $data->quantite)) {
            echo "Données envoyées avec succès";
        } else echo "Echec d'envoie des données";
    } else echo "Error: Database connection";
} else echo "All fields are required";
