<?php
$accueil = "active";
$profil = "";

include_once('../../bdd/DataBase.php');


?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/svg+xml" href="../../images/favicon.png" />
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
		<link href="../../style/main.css" rel="stylesheet">
		<title>Workshop 2022</title>
	</head>
	<body>
		<div class="container-fluid">
			<div class="row">
				<?php
				include "../composants/navbar.php";
				?>
			</div>
			
			<div class="row">
				<div class="col my-2">
					<form action="../../bdd/insert_silo" method="POST" class="formulaire_ajout">
						<input type="text" name="nom" size="10" placeholder="Nom">
<!--						<input type="text" name="type" size="10" placeholder="Type">-->
						<select name="type" id="pet-select" required>
							<option value="">Type de silo</option>
							<option value="Céréale">Céréale</option>
							<option value="Vin">Vin</option>
						</select>
						<input type="number" name="capacite_max" size="10" placeholder="Capacité maximale">
						<button class="btn btn-light text-success" type="submit">Créer</button>
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col my-2">
					<form action="../../bdd/insert_silo_vin" method="POST" class="formulaire_ajout formulaire_ajout2">
						<input type="text" name="nom" size="10" placeholder="Nom">
						<select name="type" id="pet-select" required>
							<option value="">Type de silo</option>
							<option value="Céréale">Céréale</option>
							<option value="Vin">Vin</option>
						</select>
						<input type="number" name="capacite_max" size="10" placeholder="Capacité maximale">
						<button class="btn btn-light text-success" type="submit">Créer</button>
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col my-2">
					<form action="../../bdd/insert_silo.php_elevage" method="POST" class="formulaire_ajout formulaire_ajout3">
						<input type="text" name="nom" size="10" placeholder="Nom">
						<select name="type" id="pet-select" required>
							<option value="">Type de silo</option>
							<option value="Céréale">Céréale</option>
							<option value="Vin">Vin</option>
						</select>
						<input type="number" name="capacite_max" size="10" placeholder="Capacité maximale">
						<button class="btn btn-light text-success" type="submit">Créer</button>
					</form>
				</div>
			</div>

			<div class="row mt-3 containerjs">
			</div>
		</div>

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0/axios.min.js" integrity="sha512-26uCxGyoPL1nESYXHQ+KUmm3Maml7MEQNWU8hIt1hJaZa5KQAQ5ehBqK6eydcCOh6YAuZjV3augxu/5tY4fsgQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		<script type="module" src="../../js/script.js"></script>
	</body>
</html>