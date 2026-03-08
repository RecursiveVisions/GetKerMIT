let gameManager = null;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

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
    if (document.body.classList.contains("post-game")) {
      document.getElementById("rose-overlay").style.display = "none";
    }
	} else {
		// remove tile-N-still class
		for (let i = 0; i < tiles.length; i++) {
			if (parseInt(tiles[i].textContent) > 64) {
				tiles[i].parentElement.classList.remove(`tile-${tiles[i].textContent}-still`);
			}
		}

		// show roses overlay
    if (document.body.classList.contains("post-game")) {
      document.getElementById("rose-overlay").style.display = "block";
    }
	}
}

function onFreezeCheckToggle() {
	var freezeCheck = document.getElementById("freeze-check");
	disableAnimations(freezeCheck.checked);
}
