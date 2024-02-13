window.addEventListener("DOMContentLoaded", function(){
    const rulesButton = document.getElementById("regles");
    const rulesContainer = document.getElementById("container")

    rulesButton.addEventListener("click", function(){
        if(rulesContainer.style.display === "none") {
            rulesContainer.style.display = "block";
            rulesButton.textContent = "Masquer les règles du jeu";
        }else {
            rulesContainer.style.display = "none";
            rulesButton.textContent = "Afficher les règles du jeu;"
        }

    })
})