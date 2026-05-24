import * as Phaser from "phaser"
import { globals } from "../main"
import Button from "./Button"

class Tile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        scene.add.existing(this).setOrigin(0)

        // drag event
        this.setInteractive({ draggable: true })
        this.wrldX, this.wrldY = x, y

        // button existence
        this.button = {
            obj: null,
            vis: false
        }
        
        // cross stitch visual
        this.ripe = false
        this.level = 0
        this.tile = this.scene.add.sprite(x, y, 'crossstitch', this.level).setOrigin(0)

        this.#initializeEvents()
    }

    #initializeEvents() {
        this.on('pointerdown', () => {
            this.ripe = true
        })

        this.on('pointerup', () => {
            if (this.ripe) {
                this.level = (this.level + 1) % 6
                this.tile.setFrame(this.level)
            }
            this.ripe = false
        })

        this.on('dragstart', (e) => {
            this.wrldX = e.worldX
            this.wrldY = e.worldY
        })

        this.on('drag', (e) => {
            const hypot = Math.hypot(e.worldX - this.wrldX, e.worldY - this.wrldY)
            if (hypot > 10) {
                if (!this.button.vis) {
                    const theta = Math.atan2(e.worldY - this.wrldY, e.worldX - this.wrldX)
                    const newX = this.wrldX + (30 * Math.cos(theta))
                    const newY = this.wrldY + (30 * Math.sin(theta))
                    this.button.obj = new Button(this.scene, newX, newY, 'button', this).setScale(.07)
                    this.button.vis = true
                }
            } else if (this.button.obj != null) {
                this.button.obj.destroy()
                this.button.obj = null
                this.button.vis = false
            }
        })

        this.scene.input.on('pointerup', () => {
            if (this.button.obj != null) {
                this.button.obj.destroy()
                this.button.obj = null
                this.button.vis = false
            }
        })
    }
}

export default Tile