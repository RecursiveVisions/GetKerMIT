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


function disableAnimations(enabled) {
	let tiles = document.querySelectorAll(".tile .tile-inner");
	if (enabled) {
		// add tile-N-still class
		for (let i = 0; i < tiles.length; i++) {
			if (parseInt(tiles[i].textContent) > 64) {
				tiles[i].parentElement.classList.add(`tile-${tiles[i].textContent}-still`);
			}
		}

		// hide roses overlay
		let rosesOverlay = document.getElementById("rose-overlay");
        rosesOverlay.style.display = "none";
	} else {
		// remove tile-N-still class
		for (let i = 0; i < tiles.length; i++) {
			if (parseInt(tiles[i].textContent) > 64) {
				tiles[i].parentElement.classList.remove(`tile-${tiles[i].textContent}-still`);
			}
		}

		// hide roses overlay
		let rosesOverlay = document.getElementById("rose-overlay");
        rosesOverlay.style.display = "block";
	}
}

function onFreezeCheckToggle() {
	var freezeCheck = document.getElementById("freeze-check");
	disableAnimations(freezeCheck.checked);
}
