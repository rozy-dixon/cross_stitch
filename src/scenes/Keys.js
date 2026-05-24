import * as Phaser from "phaser"

import { globals } from "../main"

class Keys extends Phaser.Scene {
    constructor() {
        super({ key: 'keysScene', active: true })
    }

    create() {
        // running checks
        console.log('%cKEYS SCENE :^)', globals.testColor)
        window.localStorage ? console.log('%cLocal storage supported by this cat! (^･･^=)~', globals.goodColor) : console.log('%cLocal storage not supported by this cat ~(=^･･^)', globals.badColor)

        globals.cursors = this.input.keyboard.createCursorKeys()
        globals.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        globals.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G)
    }
}

export default Keys