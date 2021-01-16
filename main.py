def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile2, on_overlap_tile)

def on_overlap_tile2(sprite, location):
    music.ba_ding.play()
    info.change_score_by(20)
    tiles.set_tile_at(location, sprites.builtin.brick)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_blue_crystal,
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    music.ba_ding.play()
    info.change_score_by(randint(0, 500))
    tiles.set_tile_at(location, sprites.dungeon.dark_ground_center)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile3)

def on_overlap_tile4(sprite, location):
    music.ba_ding.play()
    info.change_score_by(10)
    tiles.set_tile_at(location, sprites.builtin.brick)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile4)

def on_overlap_tile5(sprite, location):
    tiles.set_tile_at(location, sprites.dungeon.chest_closed)
    info.change_score_by(randint(0, 1000))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile5)

mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . f f 5 f f . . . . . . 
            . . . . f f 5 2 5 f f . . . . . 
            . . . f f 2 2 2 2 2 f f . . . . 
            . . . f f d d d d d f f . . . . 
            . . . f f d e d e d f f . . . . 
            . . f f f d d d d d f f f . . . 
            . f f f f f d d d f f f f f . . 
            . f f f f d 2 2 2 d f f f f . . 
            . . . f f 5 2 5 2 5 f f . . . . 
            . . . . f d 8 8 8 d f . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . d . d . . . . . . . 
            . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 150, 150)
scene.set_background_color(11)
tiles.set_tilemap(tilemap("""
    level
"""))
tiles.place_on_random_tile(mySprite, myTiles.tile1)
scene.camera_follow_sprite(mySprite)