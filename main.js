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
    ctx.clearRect(0, 0, width, height);
    fireLabel.textContent = fires.length;
    waterLabel.textContent = waters.length;
    leafLabel.textContent = leafs.length;
    for (const fire of fires) {
        fire.draw();
        fire.update();
    }
    for (const leaf of leafs) {
        leaf.draw();
        leaf.update();
    }
    for (const water of waters) {
        water.draw();
        water.update();
    }


    requestAnimationFrame(startAnimation);
}


class Fire {
    constructor(x, y, velX, velY, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
    }
    draw() {
        const img = document.getElementById('fireimg');
        ctx.drawImage(img, this.x, this.y, 10, 10);



    }
    collusion() {


    }
    update() {
        if (this.x + 10 >= width) {
            this.velX = -Math.abs(this.velX)
        }
        if (this.x - 10 <= 0) {
            this.velX = Math.abs(this.velX)
        }
        if (this.y + 10 >= height) {
            this.velY = -Math.abs(this.velY)
        }
        if (this.y - 10 <= 0) {
            this.velY = Math.abs(this.velY)
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}
while (fires.length < 50) {
    const fire = new Fire(
        random(150, 250),
        random(0, 100),
        random(-3, 3),
        random(-3, 3),
    )
    fires.push(fire);
}



class Water {
    constructor(x, y, velX, velY, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
    }
    draw() {

        const img = document.getElementById('waterimg');
        ctx.drawImage(img, this.x, this.y, 10, 10);

    }
    collusion() {

    }
    update() {
        if (this.x + 10 >= width) {
            this.velX = -Math.abs(this.velX)
        }
        if (this.x - 10 <= 0) {
            this.velX = Math.abs(this.velX)
        }
        if (this.y + 10 >= height) {
            this.velY = -Math.abs(this.velY)
        }
        if (this.y - 10 <= 0) {
            this.velY = Math.abs(this.velY)
        }
        this.x += this.velX;
        this.y += this.velY;
    }
}
while (waters.length < 50) {
    const water = new Water(
        random(250, 400),
        random(250, 400),
        random(-3, 3),
        random(-3, 3),

    )
    waters.push(water);
}
class Leaf {
    constructor(x, y, velX, velY, size, src) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.src = src;
    }
    draw() {
        const img = document.getElementById(this.src)

        ctx.drawImage(img, this.x, this.y, 10, 10);
    }
    collusion() {
        for (const fire of fires) {

        }

    }
    update() {
        if (this.x + 10 >= width) {
            this.velX = -Math.abs(this.velX)
        }
        if (this.x - 10 <= 0) {
            this.velX = Math.abs(this.velX)
        }
        if (this.y + 10 >= height) {
            this.velY = -Math.abs(this.velY)
        }
        if (this.y - 10 <= 0) {
            this.velY = Math.abs(this.velY)
        }
        this.x += this.velX;
        this.y += this.velY;
    }
}
while (leafs.length < 50) {
    const leaf = new Leaf(
        random(0, 150),
        random(250, 400),
        random(-3, 3),
        random(-3, 3),
        10,
        'leafimg'

    )
    leafs.push(leaf);
}



