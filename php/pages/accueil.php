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

			<div class="row mt-3">
				<div class="col">
					<div class="card" style="">
						<canvas id="myChart" width="200" height="50"></canvas>
						<div class="card-body pb-0">
							<div class="dropdown mb-2">
								<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Type de graphique
								</button>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
									<li class="dropdown-item" data-value="line">Courbe</li>
									<li class="dropdown-item" data-value="bar">Barre</li>
									<li class="dropdown-item" data-value="doughnut">Secteur</li>
								</ul>
							</div>
							<h5 class="card-title">Silo 1</h5>
							<p class="card-text">
								<form action="../../bdd/insert_quantite_silo.php" method="POST">
									<div class="row">
										<div class="col btn_center">
											<button type="submit" class="btn btn-success my-1" name="quantite" value="1">+1</button>
											<button type="submit" class="btn btn-success my-1" name="quantite" value="2">+2</button>
											<button type="submit" class="btn btn-success my-1" name="quantite" value="5">+5</button>
											<button type="submit" class="btn btn-success my-1" name="quantite" value="10">+10</button>
											<button type="submit" class="btn btn-success my-1" name="quantite" value="50">+50</button>
										</div>
										<div class="col btn_center">
											<button type="submit" class="btn btn-danger my-1" name="quantite" value="-1">-1</button>
											<button type="submit" class="btn btn-danger my-1" name="quantite" value="-2">-2</button>
											<button type="submit" class="btn btn-danger my-1" name="quantite" value="-5">-5</button>
											<button type="submit" class="btn btn-danger my-1" name="quantite" value="-10">-10</button>
											<button type="submit" class="btn btn-danger my-1" name="quantite" value="-50">-50</button>
										</div>
									</div>
									<input type="hidden" value="1" name="id_silo"/>
								</form>
								<form action="../../bdd/insert_quantite_silo.php" method="POST">
									<div class="row">
										<div class="col mt-3">
											<input type="text" name="quantite" size="10" placeholder="Personnalisé">
											<button class="btn btn-primary">Valider</button>
										</div>
									</div>
									<input type="hidden" value="1" name="id_silo"/>
								</form>
							</p>
						</div>
					</div>
				</div>

				<?php
					require ('../../bdd/getData.php');

					$test = new DataBase();
					$test = $test->getData('historique_silo', 1);
					var_dump($test);
				?>

				<div class="col">
					<div class="card" style="">
						<img src="../../images" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		<script type="module" src="../../js/script.js"></script>
	</body>
</html>