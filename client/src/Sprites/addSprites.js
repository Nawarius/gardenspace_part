import * as PIXI from 'pixi.js'

function addSprites (images = [], app) {
    for (let item of images) {
        const sprite = PIXI.Sprite.from(item.canvas)
        sprite.name = item.name
        sprite.position.set(item.left, item.top)
        sprite.alpha = item.opacity

        app.stage.addChild(sprite)
    }
}

export default addSprites