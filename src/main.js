import * as Phaser from "phaser"
import Load from "./scenes/Load"
import Keys from "./scenes/Keys"
import Play from "./scenes/Play"

'use strict'

// game config
let config = {
    parent: 'crossstitch',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 330,
    height: 330,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    zoom: Math.min((window.innerHeight/330)-.1, (window.innerWidth/330)-.1),
    scene: [ Load, Play, Keys ]
}

// game variables
const game = new Phaser.Game(config)
// convenience variables
const centerX = game.config.width/2
const centerY = game.config.height/2
const width = game.config.width
const height = game.config.height
const tileSize = 11
// log variables
const testColor = "color: #91aa86"
const goodColor = "color: #cfd1af"
const badColor = "color: #c088ae"
// key variables
let keyS, keyG
// TODO: key variables here

export const globals = {
    centerX,
    centerY,
    width,
    height,
    tileSize,
    testColor,
    goodColor,
    badColor,
    keyS,
    keyG
}