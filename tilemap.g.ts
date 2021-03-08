// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`100010000909090909090909090909090b080a0909090a0a0a0a0a0a0909090909080a0901080808080808080308080808080a090909090909080909090a080a0906090909060909090409090609080a090909090909090808080909090a08050909090909080803090809090808080408060a0909080a0909050a090809090909080a0909050a0909080a090809090909080a090a080a0909080a09080a090306080a090a08080409080a09040a0907080409090a080a0809030909080a0909090909090906090809080909080805030808080209090908090805080406090909090909090909040909080a09090909090909090909090c0805080a0909090909090909`, img`
2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
. . . . . . . . . . . . . . 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 . 2 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 . . 2 2 2 2 
2 . . . 2 . 2 2 . . . . . . 2 2 
2 . 2 2 2 . 2 2 . 2 2 2 2 . 2 2 
2 . 2 2 2 . 2 2 . 2 2 2 2 . 2 2 
2 . 2 2 2 . 2 2 . 2 2 . . . 2 2 
2 . . . 2 . 2 2 . 2 2 . . . 2 2 
2 . 2 . 2 . 2 2 . 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 2 . . . . . . . . 
2 2 2 . 2 . . . . . 2 2 2 2 2 2 
2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestOpen,sprites.builtin.brick,sprites.dungeon.darkGroundCenter,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "myTile":
            case "tile4":return tile4;
            case "myTile0":
            case "tile5":return tile5;
            case "myTile1":
            case "tile6":return tile6;
            case "myTile2":
            case "tile7":return tile7;
            case "myTile3":
            case "tile8":return tile8;
            case "myTile4":
            case "tile9":return tile9;
            case "myTile5":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
