scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (Math.percentChance(20)) {
        info.startCountdown(10)
    } else if (Math.percentChance(40)) {
        game.over(false)
    } else if (Math.percentChance(70)) {
        if (game.ask("game over win?", "game over lose?")) {
            game.over(false)
        } else {
            controller.moveSprite(wonderWoman)
            controller.moveSprite(wonderwoman2)
        }
    }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
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
let wonderwoman2: Sprite = null
let wonderWoman: Sprite = null
wonderWoman = sprites.create(img`
    . . . . . d 2 2 2 d . . . . . . 
    . . . . . 5 2 5 2 5 . . . . . . 
    . . . . . d 8 8 8 d . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . d . d . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    `, SpriteKind.Player)
wonderwoman2 = sprites.create(img`
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
