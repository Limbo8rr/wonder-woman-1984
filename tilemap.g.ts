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
            case "level":return tiles.createTilemap(hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0d080c0b0b0b0c0c0c0c0c0c0b0b0b0b0b080c0b01080808080808080308080808080c0b0b0b0b0b0b0809090b0c080c0b030b0b0a060b0b0b04090b0609080c0b0b0b0b0a0b0b08080809090b0c08050b0b0b0b0a0808030b080b0b0808080408080c0b0b080c0b0b050c0b080b0b0b0b080c0b0b050c0b0b080c0b080b0b0b0b080c0b0c080c0b0b080c0b080c0b0306080c0b0c0808040b080c0b040c0b0708040b0b0c080c080b030b0b080c0b0b0b0b0b0b0b060b080b080b0b08080503080808020b0b0b080b08050804090b0b0b0b0b0b0b0b0b040b0b080c0b0b0b0b0b0b0b0b0b0b0b0e0805080c0b0b0b0b0b0b0b0b`, img`
2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
. . . . . . . . . . . . . . 2 2 
2 2 2 2 2 . . . 2 2 . 2 2 . 2 2 
. . 2 2 2 . . 2 2 2 . 2 2 2 2 2 
. 2 2 . . . . . 2 2 . . 2 2 2 2 
. . . . 2 . 2 2 . . . . . . 2 2 
2 . 2 2 2 . 2 2 . 2 2 2 . . 2 2 
2 . 2 2 2 . 2 2 . 2 2 2 . . 2 2 
2 . 2 2 2 . 2 2 . 2 2 . . . 2 2 
2 . . . 2 . 2 2 . 2 2 . . . 2 2 
2 . 2 . 2 . 2 2 . 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 2 . . . . . . . . 
2 2 2 . 2 . . . . . 2 2 2 2 2 2 
2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestOpen,sprites.builtin.brick,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,myTiles.tile4,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
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
