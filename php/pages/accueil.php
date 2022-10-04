<?php
$accueil = "active";
$profil = "";

require_once('../../bdd/DataBase.php');
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
				include "../composants/navbar.php"
				?>
			</div>

			<div class="row mt-3">
				<div class="col">
					<div class="card" style="">
						<canvas id="myChart" width="200" height="50"></canvas>
						<div class="card-body">
							<div class="dropdown mb-2">
								<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Type de graphique
								</button>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
									<li><a class="dropdown-item active" href="#" data-value="line">Courbe</a></li>
									<li><a class="dropdown-item" href="#" data-value="doughnut">Secteur</a></li>
									<li><a class="dropdown-item" href="#" data-value="bar">Barre</a></li>
								</ul>
							</div>
							<h5 class="card-title">Silo 1</h5>
							<p class="card-text">
								<button type="button" class="btn btn-success">+1</button>
								<button type="button" class="btn btn-success">+2</button>
								<button type="button" class="btn btn-success">+5</button>
								<button type="button" class="btn btn-success">+10</button>
								<button type="button" class="btn btn-success">+50</button>
							</p>
							<p class="card-text">
								<button type="button" class="btn btn-danger">-1</button>
								<button type="button" class="btn btn-danger">-2</button>
								<button type="button" class="btn btn-danger">-5</button>
								<button type="button" class="btn btn-danger">-10</button>
								<button type="button" class="btn btn-danger">-50</button>
							</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
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