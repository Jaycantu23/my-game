let my_player: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(my_player)
my_player = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f f f f f f f f f . . . 
    . . . 2 2 2 4 4 4 2 2 2 . . . . 
    . . . . 4 2 2 2 2 2 4 . . . . . 
    . . . . . 4 4 2 4 4 . . . . . . 
    `, SpriteKind.Player)
my_player.setPosition(80, 95)
controller.moveSprite(my_player, 100, 100)
let asteroid = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
asteroid.follow(my_player, 50)
