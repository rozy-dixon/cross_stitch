import * as Phaser from "phaser"

import { globals } from "../main"
import Tile from "../prefabs/Tile"

class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {
        this.BCKG = {
            stts: true,
            colr: '#f3f3f3'
        }
    }

    create() {
        console.log('%cKEYS SCENE :^)', globals.testColor)
        this.cameras.main.setBackgroundColor(this.BCKG.colr)

        for (let i = 0; i < 30; i++) {
            for (let j = 0; j < 30; j++) {
                new Tile(this, i * 11, j * 11, 'grid')
            }
        }
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(globals.keyS)) {
            this.savePNG()
        }

        if (Phaser.Input.Keyboard.JustDown(globals.keyG)) {
            this.toggleGrid()
        }
    }

    savePNG() {
        this.game.renderer.snapshot((image) => {
            const link = document.createElement('a')
            link.href = image.src
            link.download = 'crossstitch.png'
            link.click()
        })
    }

    toggleGrid() {
        if (this.BCKG.stts) {
            this.BCKG.stts = !this.BCKG.stts
            this.cameras.main.setBackgroundColor('#ffffff')
        } else {
            this.BCKG.stts = !this.BCKG.stts
            this.cameras.main.setBackgroundColor(this.BCKG.colr)
        }
    }
}

export default Play