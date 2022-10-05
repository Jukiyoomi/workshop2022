<?php
$accueil = "";
$profil = "active";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../../images/favicon.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	<link rel="stylesheet" href="../../style/main.css"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Workshop 2022</title>
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <?php
        include "../composants/navbar.php"
        ?>
    </div>
	<div class="row">
		<h2>Veuillez choisir votre profil</h2>
	</div>
	<div class="row">
		<div class="dimension_profil col mx-4 viti">
			<img src="../../images/Viticulteur.png">
		</div>
		<div class="dimension_profil col agri">
			<img src="../../images/Agriculteur.png">
		</div>
		<div class="dimension_profil col mx-4 elev">
			<img src="../../images/Eleveur.png">
		</div>
	</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script src="../../js/profils.js"></script>
</body>
</html>






