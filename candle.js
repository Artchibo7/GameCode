document.addEventListener("DOMContentLoaded", function(){
    const candle = document.getElementById("candle");
    // console.dir(candle)
    const flame = document.createElement("div");

    flame.className = "flame";
    
    candle.appendChild(flame);
});