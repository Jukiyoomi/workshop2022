<?php
require "DataBase.php";
$db = new DataBase();
if (isset($_POST['id_silo']) && isset($_POST['quantite'])) {
    if ($db->dbConnect()) {
        if ($db->insert("historique_silo", $_POST['id_silo'], $_POST['quantite'])) {
            echo "Données envoyées avec succès";
        } else echo "Echec d'envoie des données";
    } else echo "Error: Database connection";
} else echo "All fields are required";
