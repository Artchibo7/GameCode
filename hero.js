const warrior = document.getElementById("warrior");

const audio = new Audio("audios/coup d'épée.mp3")

console.dir(warrior);
let count = 1;
let warriorPosition = 75;
warrior.style.right = `${warriorPosition}px`;
const moveWarrior = () => {
  warrior.style.right = `${warriorPosition}px`;
  console.log(warrior.style.right);
  console.log(count);
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
window.addEventListener("click", (moveWarrior));




const perso = document.getElementById("perso");
let posX = 130;

const movePerso = (direction) =>{
    switch(direction){
        case "q":
            posX -= 10;
            break;
        case "d":
            posX += 10;
            break;
        default:
            break;
    }
    perso.style.left = posX + "px";
}

document.addEventListener("keydown", function(event){
    movePerso(event.key);
});










// écriture ternaire Owz

// let count1 = "1";
    // if(count1 === 0){
    //     console.log("patate");
    // }else{
    //     console.log("chiffre n'est pas compris entre 0 et 1");
    // }

// count1 === 0 ? console.log("patate") : console.log("chiffre n'est pas compris entre 0 et 1");

// if(count1 === 0){
//     console.log("patate");
// }else if(count1 ===1){
//     console.log("tomate");
// }else{
//     console.log("error");
// }

// count1 === 0 ? console.log("patate") : count1 === 1 ? console.log("tomate") : console.log("error");


//  .map .filter

// let array = ["banane", "orange", "poire"]

// const banane = 






