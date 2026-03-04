function toggleOutlines(enabled) {
	let tiles = document.querySelectorAll(".tile .tile-inner");
	if (enabled) {
		for (let i = 0; i < tiles.length; i++) {
			tiles[i].classList.remove("tile-no-outline");
		}
	} else {
		for (let i = 0; i < tiles.length; i++) {
			tiles[i].classList.add("tile-no-outline");
		}
	}
}

function onOutlinesCheckToggle() {
	var outlinesCheck = document.getElementById("outlines-check");
	toggleOutlines(outlinesCheck.checked);
}


function freezeGifs(enabled) {
	let tiles = document.querySelectorAll(".tile .tile-inner");
	if (enabled) {
		for (let i = 0; i < tiles.length; i++) {
			if (parseInt(tiles[i].textContent) > 64) {
				tiles[i].parentElement.classList.add(`tile-${tiles[i].textContent}-still`);
			}
		}
	} else {
		for (let i = 0; i < tiles.length; i++) {
			if (parseInt(tiles[i].textContent) > 64) {
				tiles[i].parentElement.classList.remove(`tile-${tiles[i].textContent}-still`);
			}
		}
	}
}

function onFreezeCheckToggle() {
	var freezeCheck = document.getElementById("freeze-check");
	freezeGifs(freezeCheck.checked);
}
