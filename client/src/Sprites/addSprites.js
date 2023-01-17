import * as PIXI from 'pixi.js'

function addSprites (images = [], app) {
    for (let item of images) {
        const sprite = PIXI.Sprite.from(item.canvas)
        sprite.position.set(item.left, item.top)

        app.stage.addChild(sprite)
    }
}

export default addSprites