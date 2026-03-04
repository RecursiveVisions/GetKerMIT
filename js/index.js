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
