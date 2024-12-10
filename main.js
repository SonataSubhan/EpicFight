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
        fire.collusion();
        fire.update();
    };
    for (const water of waters) {
        water.draw();
        water.collusion();
        water.update();
    };
    for (const leaf of leafs) {
        leaf.draw();
        leaf.collusion();
        leaf.update();
    };


    requestAnimationFrame(startAnimation);
}

class Fires {
    constructor(x, y, velX, velY, size, src) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.src = src;
    }
    draw() {
        const image = document.getElementById('fireimg');

        ctx.drawImage(image, this.x, this.y, 10, 10)

    }
    collusion() {
        for (let i = waters.length - 1; i >= 0; i--) {
            const water = waters[i];
            const dx = this.x - water.x;
            const dy = this.y - water.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + water.size) {
                // Toqquşmada Fire qalib gəlir, Water silinir
                waters.splice(i, 1);
                fires.push(new Fires(water.x, water.y, water.velX, water.velY, water.size, 'fireimg'));
            }
        }

    }
    update() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x + this.velX > width || this.x - this.size < 0) {
            this.velX = -this.velX;
        }
        if (this.y + this.velY > height || this.y - this.size < 0) {
            this.velY = -this.velY;
        }

    }
}
class Waters {
    constructor(x, y, velX, velY, size, src) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.src = src;
    }
    draw() {
        const image = document.getElementById('waterimg');

        ctx.drawImage(image, this.x, this.y, 10, 10)

    }
    collusion() {
        for (let i = leafs.length - 1; i >= 0; i--) {
            const leaf = leafs[i];
            const dx = this.x - leaf.x;
            const dy = this.y - leaf.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + leaf.size) {
                // Toqquşmada Water qalib gəlir, Leaf silinir
                leafs.splice(i, 1);
                waters.push(new Waters(leaf.x, leaf.y, leaf.velX, leaf.velY, leaf.size, 'waterimg'));
            }
        }
    }
    update() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x + this.velX > width || this.x - this.size < 0) {
            this.velX = -this.velX;
        }
        if (this.y + this.velY > height || this.y - this.size < 0) {
            this.velY = -this.velY;
        }

    }
}
class Leafs {
    constructor(x, y, velX, velY, size, src) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.src = src;
    }
    draw() {
        const image = document.getElementById('leafimg');

        ctx.drawImage(image, this.x, this.y, 10, 10)

    }
    collusion() {
        for (let i = fires.length - 1; i >= 0; i--) {
            const fire = fires[i];
            const dx = this.x - fire.x;
            const dy = this.y - fire.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + fire.size) {
                // Toqquşmada Leaf qalib gəlir, Fire silinir
                fires.splice(i, 1);
                leafs.push(new Leafs(fire.x, fire.y, fire.velX, fire.velY, fire.size, 'leafimg'));
            }
        }
    }
    update() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x + this.velX > width || this.x - this.size < 0) {
            this.velX = -this.velX;
        }
        if (this.y + this.velY > height || this.y - this.size < 0) {
            this.velY = -this.velY;
        }

    }
}
for (let i = 0; i < 50; i++) {
    fires.push(new Fires(random(150, 250), random(0, 150), random(-2, 2), random(-2, 2), 10, 'fireimg'));
    waters.push(new Waters(random(50, 150), random(250, 400), random(-2, 2), random(-2, 2), 10, 'waterimg'));
    leafs.push(new Leafs(random(350, 400), random(250, 400), random(-2, 2), random(-2, 2), 10, 'leafimg'));
}