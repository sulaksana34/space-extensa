const entPlayer = document.querySelector(".entity.player");
const enemyTeritory = document.querySelector(".space-arena .enemy-teritory");

let posX = 0;
let posY = 0;
let maxLeft = document.body.offsetWidth - (document.body.offsetWidth / 0.68);
let maxRight = document.body.offsetWidth * 47 / 100;
let dir = "L";

document.addEventListener("keydown", e => {
  switch(true) {
    case e.key == 'a' && posX > maxLeft:
      posX -= 15;
			break;
    case e.key == 'd' && posX < maxRight:
			posX += 15;
			break;
    default:
			break;
  }

	entPlayer.style.left = `${posX}px`;
})

setInterval(() => {
  let etPos = Number(enemyTeritory.style.left.split("px")[0]);

  if(etPos > -200 && dir === "L") {
    etPos -= 40;
    enemyTeritory.style.left = `${etPos}px`;

    if(etPos === -200)
      dir = "R";
  } else if(etPos < 200 && dir === "R") {
    etPos += 40;
    enemyTeritory.style.left = `${etPos}px`;

    if(etPos === 200)
      dir = "L";
  }
}, 2000);