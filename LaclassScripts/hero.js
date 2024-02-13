const warrior = document.getElementById("warrior");
const swordSound = document.getElementById("swordSound")

let count = 1;

let warriorPosition = 75;

warrior.style.right = `${warriorPosition}px`;

const moveWarrior = () => {
  warrior.style.right = `${warriorPosition}px`;
  if (count < 9) {
    warriorPosition += 75;
    count += 1;
    setTimeout(() => {
      requestAnimationFrame(() => moveWarrior());
    }, 10);
  } else if (count >= 9) {
    count = 1;
    warriorPosition = 75;
    // setTimeout(() => {
    //     requestAnimationFrame(()=>moveWarrior())

    // }, 600);
  }
}

moveWarrior();
window.addEventListener("click", () =>{
  swordSound.currentTime = 0;
  swordSound.play();
});
window.addEventListener("click", (moveWarrior));

// <====================================================================> //

const perso = document.getElementById("perso");
let posX = 100;
let posY = 0;
const bruitDePas = document.getElementById("bruitdepas");
const cadre = document.getElementById("cadre");

const movePerso = (direction) =>{

  // const limiteGauche = 0;
  // const limiteDroite = cadre.offsetWidth - perso.offsetWidth;
    switch(direction){
        case "q":
            posX -= 10;
            // posX = Math.max(posX, limiteGauche);
            playBruitDePas();
            break;
        case "d":
            posX += 10;
            // posX = Math.min(posX, limiteDroite);
            playBruitDePas();
            break;
        default:
            break;
    }
    perso.style.left = posX + "px";
}

const playBruitDePas = () =>{
  bruitDePas.pause();
  bruitDePas.curentTime = 0;
  bruitDePas.play();
}
document.addEventListener("keydown", function(event){
    movePerso(event.key);
});
