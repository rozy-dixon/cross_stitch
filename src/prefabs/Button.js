import * as Phaser from "phaser"
import { globals } from "../main"

class Button extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, parent) {
        super(scene, x, y, texture)
        this.parent = parent
        scene.add.existing(this)

        this.setInteractive({ draggable: true })

        this.#initializeEvents()
    }

    #initializeEvents() {
        this.on('pointerover', () => {
            this.setScale(.1)
        })

        this.on('pointerup', () => {
            this.parent.level = 0
            this.parent.tile.setFrame(this.parent.level)
            this.parent.button.obj.destroy()
            this.parent.button.obj = null
            this.parent.button.vis = false
        })
    }
}

export default Button