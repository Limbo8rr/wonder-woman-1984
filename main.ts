scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(randint(1, 199))
    tiles.setTileAt(location, sprites.builtin.brick)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(randint(50, 500))
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(randint(100, 1000))
    tiles.setTileAt(location, sprites.builtin.brick)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    info.changeScoreBy(1000)
})
let wonderWoman = sprites.create(img`
    . . . . . d 2 2 2 d . . . . . . 
    . . . . . 5 2 5 2 5 . . . . . . 
    . . . . . d 8 8 8 d . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . d . d . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    `, SpriteKind.Player)
let wonderwoman2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f 5 f f . . . . . . 
    . . . . f f 5 2 5 f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f f d d d d d f f . . . . 
    . . . f f d e d e d f f . . . . 
    . . f f f d d d d d f f f . . . 
    . f f f f f d d d f f f f f . . 
    . f f f f . . . . . f f f f . . 
    . . . f f . . . . . f f . . . . 
    . . . . f . . . . . f . . . . . 
    `, SpriteKind.Player)
wonderwoman2.bottom = wonderWoman.top + 3
wonderwoman2.x = wonderWoman.x
wonderwoman2.setFlag(SpriteFlag.GhostThroughWalls, true)
controller.moveSprite(wonderWoman, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(wonderWoman, assets.tile`tile1`)
scene.cameraFollowSprite(wonderWoman)
game.onUpdate(function () {
    wonderwoman2.bottom = wonderWoman.top + 3
    wonderwoman2.x = wonderWoman.x
})
