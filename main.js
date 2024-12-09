const button = document.getElementById('button')
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const fireLabel = document.getElementById('fire');
const waterLabel = document.getElementById('water');
const leafLabel = document.getElementById('leaf');
const fireScore = 0;
const waterScore = 0;
const leafScore = 0;
const width = canvas.width;
const height = canvas.height;
const fires = [];
const waters = [];
const leafs = [];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

button.addEventListener('click', startAnimation);
function startAnimation() {
    generateFires();
    generateWaters();
    generateLeafs();

}
class Fires {
    constructor(x, y, velX, velY, width, height) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.width = width;
        this.height = height;
    }
    draw() {

    }
    collusion() {

    }
    update() {

    }
}
class Waters {
    constructor(x, y, velX, velY, width, height) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.width = width;
        this.height = height;
    }
    draw() {

    }
    collusion() {

    }
    update() {

    }
}
class Leafs {
    constructor(x, y, velX, velY, width, height) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.width = width;
        this.height = height;
    }
    draw() {

    }
    collusion() {

    }
    update() {

    }
}



