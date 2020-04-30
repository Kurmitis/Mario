import { drawMario } from "./mario"
import {
  MapDraw,
  findBlockUnder,
  findBlockAbove,
  findBlockRight,
  findBlockLeft,
} from "./level"

import backSrc from "./images/background.png";
import deathSrc from "./images/game.jpg";

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.outline = "1px solid black";
canvas.style.cursor = "none";

canvas.width = 2048;
canvas.height = 1024;

const context = canvas.getContext("2d");

context.fillStyle = "rgb(200,120,60)";





const back = new Image();
back.src = backSrc;

function drawback(
  context: CanvasRenderingContext2D,
  posX: number,
  posY: number,
) {
  context.drawImage(back, -posX / 10, -posY / 10, canvas.width * 1.5, canvas.height * 1.5);
}


window.requestAnimationFrame(renderLoop);

const sprite2 = document.createElement("img");
sprite2.src =
  "https://i.pinimg.com/originals/4b/91/1c/4b911c7d968feeaa993d24c93ddb821e.png";

let posX = 20;
let posY = 20;
let velocityY = 0;
let velocityX = 0;
let previousTime = 0;
let movementStarted = 0;
let wasMoving = false;

let keysPressed: string[] = [];


canvas.oncontextmenu = function (event) {
  event.preventDefault();
};

/** NB! `document`, nevis `canvas` */
document.addEventListener("keydown", function (e) {
  if (keysPressed.indexOf(e.key) === -1) {
    keysPressed.push(e.key);
  }
});


document.addEventListener("keyup", function (e) {
  let idx = keysPressed.indexOf(e.key);
  if (idx > -1) {
    keysPressed.splice(idx, 1);
  }
});

function renderLoop(time: number) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (previousTime === 0) {
    previousTime = time;
  }

  const deltaTime = time - previousTime;
  previousTime = time;

  moveMario(deltaTime);
  drawback(context, posX, posY);
  MapDraw(context, posX, posY);
  
  drawMario(context, 500, 500);
  // drawSprite2(time, deltaTime);


  window.requestAnimationFrame(renderLoop);
}

  

function moveMario(deltaTime: number) {
  const isMoving = keysPressed.indexOf("ArrowRight") > -1;
  if (isMoving) {
    posX += deltaTime * 0.8;
  }

  const isMovingLeft = keysPressed.indexOf("ArrowLeft") > -1;
  if (isMovingLeft) {
    posX -= deltaTime * 0.8;
    
      }


  const gridaZemMario = findBlockUnder(posX, posY)
  const isFalling = posY < gridaZemMario;
  if (isFalling) {
    velocityY += deltaTime * 0.003;
  } else {
    velocityY = 0;
    posY = gridaZemMario;
  }

  console.log (gridaZemMario)
  

  const bloksVirsMario = findBlockAbove(posX, posY);
 



  const bloksPaLabi = findBlockRight(posX, posY);
  if (posX>bloksPaLabi){
    posX=bloksPaLabi;
  }

  const bloksPaKreisi = findBlockLeft(posX, posY);
  if (posX<bloksPaKreisi){
    posX=bloksPaKreisi;
  }


  if (posY>425 && posX<100 && posY<600 ){
    posY=425;
    velocityY=0
  }

  if (posY> 1255&& posX>1600 && posX< 1900){
  

    posX=1750;
    velocityY=0;

   document.getElementById('my-text-box').innerHTML = "You died!";

   const death = new Image();
  death.src = deathSrc;

function drawdeath(
	context: CanvasRenderingContext2D,
	centerX: number,
	centerY: number,
) {
  context.drawImage(death, centerX, centerY, 1000, 1000);

}
drawdeath(context, 1000, 1000)
  }

  if (posY<1075 && posX>3250 && posY<3300 ){
    posY=1075;
    posX=3350;
    velocityY=-deltaTime * 0.003  
    document.getElementById('my-text-box').innerHTML = "You Win!";
  }

  if (posY<1075 && posX>850 && posX<1050 ){
    document.getElementById('my-text-box').innerHTML = "Nothing happens!";
  }




  const isMovingUp = keysPressed.indexOf("ArrowUp") > -1;
  if (isMovingUp && !isFalling) {
    velocityY = -1.5;
//    posY -= deltaTime * 4;
  }

  posY += deltaTime * velocityY;

}


/*
function drawSprite2(time: number, deltaTime) {
  const isMoving = keysPressed.indexOf("ArrowRight") > -1;

  const standingStillFrameIdx = 8;
  const kadri = 84;
  const columnCount = 10;
  const rowCount = 10;

  const w = Math.floor(sprite2.width / columnCount);
  const h = Math.floor(sprite2.height / rowCount);

  let frameIndex: number;

  if (isMoving) {
    wasMoving = true;
    posX += deltaTime * 0.1;
    if (movementStarted === 8) {
      movementStarted = time;
    }

    frameIndex = (Math.round((time - movementStarted) / 64) + standingStillFrameIdx) % kadri;
  } else if (wasMoving) {
    posX += deltaTime * 0.05;
    frameIndex = (Math.round((time - movementStarted) / 64) + standingStillFrameIdx) % kadri;
    // 22 = another frame where he looks like standing still
    if (frameIndex === standingStillFrameIdx || frameIndex === 11) {
      wasMoving = false;
    }
  } else {
    movementStarted = 0;
    frameIndex = standingStillFrameIdx;
  }

  context.drawImage(
    sprite2,
    w * (frameIndex % columnCount),
    h * Math.floor(frameIndex / columnCount),
    w,
    h,

    posX,
    200,

    64,
    64
  );
}

*/





