/**
* JS - Aula6: Jogo do dado
*/
function sortear() {
	var sorteio = Math.floor(Math.random() * 6 + 1);

	switch (sorteio) {
		case 1:
			document.getElementById("face").src = "images\face1.png";
			break;
		case 2:
			document.getElementById("face").src = "images\face2.png";
			break;
		case 3:
			document.getElementById("face").src = "images\face3.png";
			break;
		case 4:
			document.getElementById("face").src = "images\face4.png";
			break;
		case 5:
			document.getElementById("face").src = "images\face5.png";
			break;
		case 6:
			document.getElementById("face").src = "images\face6.png";
			break;
		default:
			break;

	}

	var sorteio2 = Math.floor(Math.random() * 6 + 1);

	switch (sorteio2) {
		case 1:
			document.getElementById("face2").src = "images\face1.png";
			break;
		case 2:
			document.getElementById("face2").src = "images\face2.png";
			break;
		case 3:
			document.getElementById("face2").src = "images\face3.png";
			break;
		case 4:
			document.getElementById("face2").src = "images\face4.png";
			break;
		case 5:
			document.getElementById("face2").src = "images\face5.png";
			break;
		case 6:
			document.getElementById("face2").src = "images\face6.png";
			break;
		default:
			break;

	}

}