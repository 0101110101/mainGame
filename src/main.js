const { convertTypeAcquisitionFromJson } = require("typescript")

const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')
const m = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const gravity = 0.9


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
            x: 100,
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

const platforms = [new Platform()]
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
    platforms.forEach(platform => { platform.draw() })

    // ber.draw()
    // ber.uptade()


    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 2
    } else if (keys.left.pressed && player.position.x > 30) {
        player.velocity.x = -2
    } else if (
        keys.up.pressed) {
        player.velocity.y = -7
    } else if (
        keys.down.pressed) { player.velocity.y = 1 } else { player.velocity.x = 0 }
    if (keys.right.pressed) {
        platforms.forEach(platform => { platform.position.x += +2 })
    } else if (keys.left.pressed) {
        platforms.forEach(platform => { platform.postions.x += -2 })
    }
}

platforms.forEach(platform => {

    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width >= platform.position.x && player.position.x + player.width <= platform.position.x + platform.width + player.width && player.position.x + player.width <= platform.position.x) { player.velocity.y = 0 }
})







// console.log(platform.position.x, platform.position.y)






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