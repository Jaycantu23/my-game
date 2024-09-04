tiles.set_current_tilemap(tilemap("""level2"""))
my_player = sprites.create(img("""
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
    """),
    SpriteKind.player)
my_player.set_position(80, 95)
controller.move_sprite(my_player, 100, 100)
asteroid = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
asteroid.follow(my_player, 50)