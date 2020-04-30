import marioSrc from "./images/8mario_burned.png";

/*
const canvas = document.createElement("canvas2");
document.body.appendChild(canvas);

canvas.style.outline = "1px solid black";
canvas.style.cursor = "none";

*/

const mario = new Image();
mario.src = marioSrc;

export function drawMario(
	context: CanvasRenderingContext2D,
	centerX: number,
	centerY: number,
) {
	context.drawImage(mario, centerX, centerY, 100, 100);
}


/*
let posX = 20


function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '38') {
		mario.posX += deltaTime * 0.05;
	}
	else if (e.keyCode == '40') {
		// down arrow
	}
	else if (e.keyCode == '37') {
		// left arrow
	}
	else if (e.keyCode == '39') {
		// right arrow
	}

}

*/


