class Pokemon {
    constructor(){
        this.index = undefined;
        this.pokemonList = [];
        this.spritesList = [];
        this.sprite;
    }

    async getPokemonList() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9');
        const result = await response.json();
        const data = await result;
        const {results} = data;
        results.forEach(async result => {
            this.getPokemon(result);
        });
    }

    async getPokemon(res) {
        const API = res.url;
        const response = await fetch(API);
        const pokeData = await response.json();
        this.pokemonList.push(pokeData);
        console,log(pokeData);

        const spriteURL = pokeData.sprites.other["official-artwork"].front_default;
        this.sprite = loadImage(spriteURL);
        this.spritesList.push(this.sprite);
    }

    choose(){
        for (let i = 0; i < this.pokemonList.length; i++) {
            if (dist(mouseX, mouseY, 100, 100 + 108 * i) < 50) {
                this.index = this.pokemonList[i];
                console.log(this.index);
            }
        }
    }

    drawPokemonList() {
        for (let i = 0; i < this.pokemonList.length; i++) {
            textSize(18);
            fill(255);
            text(this.pokemonList[i].name.toUpperCase(),250,100 + 110 * i);
            imageMode(CENTER);
            image(this.spritesList[i], 130, 100 + 108 * i, 120,120);
        }
    }

    drawPokeData() {
        if (this.index !== undefined) {
            const {id, name, height, weight} = this.index;
            textSize(35);
            const dx = 600;
            text('ID: ' + id, dx, 400,)
            text('Name: ' + name, dx, 450,)
            text('Height: ' + height, dx, 500,)
            text('Weight: ' + weight, dx, 550,)
            text('Type: ' + this.index.types[0].type.name, dx, 600,)
        }
    }

}