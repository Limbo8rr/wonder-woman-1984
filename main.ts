scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(randint(0, 199))
    tiles.setTileAt(location, sprites.builtin.brick)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(randint(0, 500))
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(randint(50, 1000))
    tiles.setTileAt(location, sprites.builtin.brick)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    info.changeScoreBy(randint(0, 1000))
})
let mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(mySprite, myTiles.tile1)
scene.cameraFollowSprite(mySprite)
