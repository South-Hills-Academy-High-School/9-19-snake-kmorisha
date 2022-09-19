controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = -1
    vy = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 1
    vy = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (atefoodflag == 0 && snakehead.overlapsWith(snakefood)) {
        snakebody.unshift(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player))
        snakebody[0].setPosition(foodx - updatevx * 10 + 2, foody - updatevy * 10 + 2)
        foodx = randint(0, 15) * 10
        foody = randint(0, 11) * 10
    }
    atefoodflag += 1
})
let snakeheady = 0
let snakeheadx = 0
let updatevy = 0
let updatevx = 0
let vy = 0
let vx = 0
let foody = 0
let foodx = 0
let snakefood: Sprite = null
let snakehead: Sprite = null
let atefoodflag = 0
let snakebody: Sprite[] = []
snakebody = []
atefoodflag = 0
snakehead = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
snakehead.setFlag(SpriteFlag.AutoDestroy, true)
snakefood = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Food)
foodx = 80
foody = 60
vx = 1
vy = 0
game.onUpdate(function () {
    for (let value of snakebody) {
        if (!(value == snakebody[1]) && !(value == snakebody[0]) && snakehead.overlapsWith(value)) {
            game.over(false)
        }
    }
    if (snakeheadx < 0 || (snakeheadx > 160 || (snakeheady < 0 || snakeheady > 120))) {
        game.over(false)
    }
})
game.onUpdate(function () {
    snakehead.setPosition(snakeheadx + 2, snakeheady + 2)
    snakefood.setPosition(foodx + 2, foody + 2)
    if (snakeheadx % 10 == 0 && snakeheady % 10 == 0) {
        snakebody.unshift(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            . . . . . . 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player))
        snakebody[0].setPosition(snakeheadx + 2, snakeheady + 2)
        snakebody.pop().destroy()
        updatevx = vx
        updatevy = vy
        atefoodflag = 0
    }
    snakeheadx += updatevx
    snakeheady += updatevy
})
