class BarreDeVie {
    #vie;
    #color;
    #id;

    constructor(vie = 100, color = "green", id){
        this.vie = vie;
        this.color = color;
        this.id = id;
        
        this.creerHTML();
    }

    get vie(){
        return this.#vie;
    }
    set vie(vie){
        this.#vie = vie;
    }

    get color(){
        return this.#color;
    }
    set color(color){
        this.#color = color;
    }

    get id(){
        return this.#id;
    }
    set id(id){
        this.#id = id;
    }

    get newDiw(){
        return document.getElementById(this.id);
    }

    creerHTML(){
        let newDiv = document.createElement("div");
        newDiv.id = this.id;
        document.body.appendChild(newDiv);

        newDiv = document.getElementById(this.id);

        let barre = document.createElement("div");
        barre.id = "barre-" + this.id;
        barre.style.border = "5px solid yellow";
        barre.style.height = "20px";
        barre.style.width = "200px";
        barre.style.backgroundColor = this.color;
        barre.textContent = "Barre de vie";

        newDiv.appendChild(barre);
    }
}

const barreDeVie = new BarreDeVie(100, "green", "vie1");