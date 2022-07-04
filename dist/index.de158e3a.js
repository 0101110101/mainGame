const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gravity = 0.8;
class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 30;
        this.height = 30;
    }
    draw() {
        c.fillStyle = "orange";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    uptade() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
        else this.velocity.y = 0;
    }
}
class Platform {
    constructor(){
        this.position = {
            x: 0,
            y: 1300
        };
        this.width = 222, this.height = 40;
    }
    draw() {
        c.fillStyle = "green";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
const player = new Player();
const platform = new Platform();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
    down: {
        pressed: false
    }
};
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.uptade();
    platform.draw();
    if (keys.right.pressed) player.velocity.x = 2;
    else if (keys.left.pressed) player.velocity.x = -2;
    else if (keys.up.pressed) player.velocity.y = -10;
    else if (keys.down.pressed) player.velocity.y = 1;
    else player.velocity.x = 0;
    if (player.height + player.position.y <= platform.position.y && player.position.x + player.height >= platform.height + platform.position.y) player.velocity.y = 0;
    if (player.height + player.position.y >= platform.position.y && player.position.x + player.width <= platform.width + platform.position.x) player.velocity.y = 0;
// console.log(player.position.x, player.position.y)
}
animate();
window.addEventListener("keydown", ({ keyCode  })=>{
    switch(keyCode){
        case 87:
            console.log("up");
            keys.up.pressed = true;
            break;
        case 65:
            console.log("left");
            keys.left.pressed = true;
            break;
        case 83:
            console.log("down");
            keys.down.pressed = true;
            break;
        case 68:
            console.log("right");
            keys.right.pressed = true;
            break;
    }
});
window.addEventListener("keyup", ({ keyCode  })=>{
    switch(keyCode){
        case 87:
            console.log("up");
            // player.velocity.y = 0
            keys.up.pressed = false;
            break;
        case 65:
            console.log("left");
            keys.left.pressed = false;
            break;
        case 83:
            console.log("down");
            keys.down.pressed = false;
            break;
        case 68:
            console.log("right");
            keys.right.pressed = false;
            break;
    }
});

//# sourceMappingURL=index.de158e3a.js.map
