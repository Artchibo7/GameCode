class Image{
    #src;

    constructor(){
        this.src = 'Images/bat.png';
        this.addImageToDom();
        this.playSound();
    }


    get src(){
        return this.#src;
    }
    set src(src){
        this.#src = src;
    }

    addImageToDom(){
        const newImg = document.createElement("img");
        newImg.src = this.src;
        newImg.style.zIndex = 10000;
        newImg.classList.add("batFly");
        newImg.style.width = "50px";
        newImg.style.position = "absolute";
        newImg.style.right = "100px";
        document.body.appendChild(newImg);

    }

    playSound(){
        const batSound = document.getElementById("batsound");
        batSound.play();
    }
}


const myImage = new Image();
