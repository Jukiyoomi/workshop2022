const container = document.querySelector('.containerjs')

export default function createCard(nom, id) {
	container.innerHTML += 
		`
<div class="col-6">
	<div class="card card_css mb-4" style="">
		<canvas class="myChart old-${id} chart-${id}" width="200" height="50"></canvas>
		<div class="card-body pb-0">
			<div class="dropdown mb-2">
				<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Type de graphique</button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li class="dropdown-item" data-value="bar">Barre</li>
					<li class="dropdown-item" data-value="line">Courbe</li>
					<li class="dropdown-item" data-value="doughnut">Secteur</li>
				</ul>
			</div>
			<h5 class="card-title">${nom}</h5>
			<p class="card-text">
				<form action="../../bdd/insert_quantite_silo.php" id="add_value" class="row" method="POST">
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
					<input type="hidden" value="${id}" name="id_silo"/>
				</form>
				<div class="row">
				<div class="col mt-3">
					<form action="../../bdd/insert_quantite_silo.php" id="add_custom_value" method="POST">
						<input type="number" name="quantite" size="10" placeholder="Personnalisé">
						<button class="btn btn-primary" type="submit">Valider</button>
				</div>
					<input type="hidden" value="${id}" name="id_silo"/>
					</form>
					<div class="col mt-3">
						<form action="../../bdd/delete_silo.php" method="post">
							<button class="btn btn-danger supprimer" type="submit" name="id" value="${id}">Supprimer</button>
					</div>
						</form>
				</div>
			</p>
		</div>
	</div>
</div>`
		
}	