<?php
include_once "DataBase.php";
$db = new DataBase();
$servername = $db->getServername();
$username = $db->getUserame();
$password = $db->getPassword();
$databasename = $db->getDatabasename();

$conn = new mysqli($servername, $username, $password, $databasename);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}


//$tab = array();
//
//$sql = new DataBase();
//
//$tab = $sql->getData('historique_silo', '1');
//
//return $tab;

/*$sql = new DataBase();

$sql = "SELECT * FROM `historique_silo` WHERE id_silo = 1;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	// output data of each row
	while($row = $result->fetch_assoc()) {
		echo "Quantité: " . $row["quantite"]. "<br>";
	}
} else {
	echo "0 results";
}
$conn->close();*/