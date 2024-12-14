let tilemap2: tiles.TileMapData = null
let tilemap1: tiles.TileMapData = null
let TilemapNumber = 1
let algo = assets.tile`myTile26`
forever(function () {
    if (TilemapNumber == 1) {
        tilemap1 = tilemap`nivel0`
        tilemap2 = tilemap`nivel0`
        tileUtil.connectMaps(tilemap1, tilemap2, algo)
    }
    tiles.placeOnRandomTile(null, assets.tile`transparency8`)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency8`)
})
