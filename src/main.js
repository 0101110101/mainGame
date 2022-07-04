const { convertTypeAcquisitionFromJson } = require("typescript")

const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')
const m = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const gravity = 0.7


class Clayer {
    constructor() {
        this.position = {
            x: 200,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 10
        this.height = 50


    }
    draw() {

        m.fillStyle = 'blue'
        m.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    uptade() {
        this.draw()
    }

}

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 50
        this.height = 50


    }
    draw() {

        c.fillStyle = 'black'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    uptade() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity

        else this.velocity.y = 0
    }



}
class Platform {
    constructor() {
        this.position = {
            x: 0,
            y: 500

        }
        this.width = 200,
            this.height = 50
    }
    draw() {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const ber = new Clayer()
    // ber.position =
const player = new Player()
const platform = new Platform()
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

}


function ccordinate() {

    if (player.velocity.x + player.velocity.y == 0) { console.log('Cordinates : ' + player.position.x + '     ' + Math.floor(player.position.y)) }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    m.clearRect(0, 0, canvas.width, canvas.height)
    player.uptade()
    platform.draw()
        // ber.draw()
        // ber.uptade()


    if (keys.right.pressed) {
        player.velocity.x = 2
    } else if (keys.left.pressed) {
        player.velocity.x = -2
    } else if (
        keys.up.pressed) {
        player.velocity.y = -7
    } else if (
        keys.down.pressed) { player.velocity.y = 1 } else { player.velocity.x = 0 }

    if (player.position.y + player.height + player.velocity.y >= platform.position.y + platform.height - 50) { player.velocity.y = 0 }
    if (player.position.x + player.width >= platform.position.x + platform.width + 45) { player.velocity.y = 2 }

    ccordinate()
}



console.log(platform.position.x, platform.position.y)






animate()


window.addEventListener('keydown', ({ keyCode }) => {

    switch (keyCode) {
        case 87:
            console.log('up')
            keys.up.pressed = true

            break
        case 65:
            console.log('left')
            keys.left.pressed = true
            break
        case 83:
            console.log('down')
            keys.down.pressed = true
            break
        case 68:
            console.log('right')
            keys.right.pressed = true

            break


    }

})
window.addEventListener('keyup', ({ keyCode }) => {

    switch (keyCode) {
        case 87:
            console.log('up')
                // player.velocity.y = 0
            keys.up.pressed = false
            break
        case 65:
            console.log('left')
            keys.left.pressed = false
                // player.velocity.x = 0
            break
        case 83:
            console.log('down')
            keys.down.pressed = false

            break
        case 68:
            console.log('right')
            keys.right.pressed = false

            break



    }

})