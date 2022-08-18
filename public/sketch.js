let canvas;
<<<<<<< HEAD
let pokemons;
=======
let screen;
let size = 100;
let user;
let bitcoin;
let catF;
let dogImg;
let usPopu;
>>>>>>> 7c9f5627ac62eb2a5f317ff4018f9584a590725f

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

<<<<<<< HEAD
    pokemons = new Pokemon();
=======
    screen = 0;

    catF = new CatFact(this);
    user = new User(this);
    bitcoin = new Bitcoin(this); 
    dogImg = new DogImg(this);
    usPopu = new UsPopulation(this);
>>>>>>> 7c9f5627ac62eb2a5f317ff4018f9584a590725f
}

function draw() {
    background(0);
    newCursor();
<<<<<<< HEAD
    pokemons.drawPokemonList();
    pokemons.drawPokeData();
    
}

function mouseClicked(){
    pokemons.getPokemonList();
    pokemons.choose();
=======
    switch (screen) {
        case 0:
            noStroke();
            fill(254,204,47);
            ellipse(100,500,size,size);
            fill(249,162,40);
            ellipse(300,500,size,size);
            fill(178,194,37);
            ellipse(500,500,size,size);
            fill(92,224,217);
            ellipse(700,500,size,size);
            fill(163,99,217);
            ellipse(900,500,size,size);
            fill(230);
            textSize(20);
            text('Random User', 40, 400);
            text('Bitcoin Value', 240, 400);
            text('Random Dog Img', 430, 400);
            text('Us Population', 640, 400);
            text('Random Cat Fact', 840, 400);
            break;
            //User
        case 1:
            ellipse(100,100,size,size);
            user.drawInfo();
            break;
        //Bitcoin
        case 2:
            bitcoin.drawInfo();
            ellipse(100,100,size,size);
            break;
        //Us Population
        case 3:
            dogImg.drawImg();
            ellipse(100,100,size,size);
            break;
        //Dog Image
        case 4:
            ellipse(100,100,size,size);
            usPopu.drawInfo();
            break;
        //Cat Fact
        case 5:
            ellipse(100,100,size,size);
            catF.drawInfo();
            break;
    }
    
}

function mousePressed(){
    console.log('mouse x: ' + mouseX + ' mouse y: ' + mouseY);
    if (screen === 0) {
        if (mouseX > 60 && mouseY > 456 && mouseX < 140 && mouseY < 541) {
            screen = 1;
            user.getUserInfo();
        }
        if (mouseX > 258 && mouseY > 456 && mouseX < 342 && mouseY < 541) {
            screen = 2;
            bitcoin.getPrice();
        }
        if (mouseX > 456 && mouseY > 456 && mouseX < 546 && mouseY < 541) {
            screen = 3;
            dogImg.getImgURL();
        }
        if (mouseX > 657 && mouseY > 456 && mouseX < 741 && mouseY < 541) {
            screen = 4;
            usPopu.getInfo();
        }
        if (mouseX > 860 && mouseY > 456 && mouseX < 943 && mouseY < 541) {
            console.log('cat fact')
            catF.getFact();
            screen = 5;
        }
    }
    if (screen !== 0) {
        if (mouseX > 60 && mouseY > 60 && mouseX < 137 && mouseY < 137) {
            screen = 0;
        }
    }
>>>>>>> 7c9f5627ac62eb2a5f317ff4018f9584a590725f
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}