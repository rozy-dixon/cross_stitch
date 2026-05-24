import * as Phaser from "phaser"

import { globals } from "../main"

class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        this.load.spritesheet('grid', '/assets/grid.png', { frameWidth: 11, frameHeight: 11 })
        this.load.spritesheet('crossstitch', '/assets/tileset.png', { frameWidth: 11, frameHeight: 11 })
        this.load.spritesheet('button', '/assets/button.png', { frameWidth: 294, frameHeight: 275 })
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', globals.testColor)

        // moving through
        this.scene.start('playScene')
    }
}

export default Load