
import bricksSrc from "./images/bricks3.png"
import questionSrc from "./images/question.png"
import pipelongSrc from "./images/pipelong.png"
import pipeendSrc from "./images/pipeend.png"
import pipeend2Src from "./images/pipeend2.png"
import spikeSrc from "./images/spike.png"


const siena = document.createElement("img");
siena.src = bricksSrc;

const question = document.createElement("img");
question.src = questionSrc;

const pipelong = document.createElement("img");
pipelong.src = pipelongSrc;

const pipeend = document.createElement("img");
pipeend.src = pipeendSrc;

const pipeend2 = document.createElement("img");
pipeend2.src = pipeend2Src;

const spike = document.createElement("img");
spike.src = spikeSrc;


const map = 
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];

const size = 128;



export function findBlockUnder(posX: number, posY: number) {
  return 1320
}


export function findBlockAbove(posX: number, posY: number) {
  return 1200
}

export function findBlockRight(posX:number, posY:number){
  return 3380
}

export function findBlockLeft(posX:number, posY:number){
  return -375
}

export function MapDraw(context: CanvasRenderingContext2D, marioPosX: number, marioPosY: number) {

  const mapOffsetX = marioPosX;
  const mapOffsetY = marioPosY;

  console.log(mapOffsetX)

  for (let index = 0; index < map.length; index++) {
    const x = (index % 32);
    const y = Math.floor(index / 32);

    if (map[index] == 1) {
      context.drawImage(siena,
        x * size - mapOffsetX,
        y * size - mapOffsetY,
        size,
        size);
    }

    

    if (map[index] == 2) {
      context.drawImage(question,
        x * size - mapOffsetX,
        y * size - mapOffsetY,
        size,
        size);
    }
    

    if (map[index] == 3) {
      context.drawImage(pipelong,
        x * size - mapOffsetX,
        y * size - mapOffsetY,
        size,
        size);
    }
    
    if (map[index] == 4) {
      context.drawImage(pipeend,
        x * size - mapOffsetX,
        y * size - mapOffsetY,
        size,
        size);
    }

    if (map[index] == 5) {
      context.drawImage(pipeend2,
        x * size - mapOffsetX,
        y * size - mapOffsetY,
        size,
        size);
    }
  
    if (map[index] == 6) {
      context.drawImage(spike,
        x * size - mapOffsetX,
        y * size - mapOffsetY,
        size,
        size);
    }
  

    // if (map[index] == 0) {
    //   context.fillStyle = "#ffffff"
    //   context.fillRect(x * size - mapOffsetX, y * size, size, size);
    // }
  }

  function resize() {
    let width = document.documentElement.clientWidth;
    let maxWidth = Math.floor(document.documentElement.clientHeight / 0.5625);
    if (width > maxWidth) {
      width = maxWidth;
    }
    context.canvas.style.width = width + "px";
    context.canvas.style.height = Math.floor(width * 0.5625) + "px";
  };

  window.addEventListener("resize", resize, { passive: true });

  resize();

}