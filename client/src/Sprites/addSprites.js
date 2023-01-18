import * as PIXI from 'pixi.js'
import { getImagesDataContext } from '../App'
import { getAppContext } from '../MainComponent'

function addSprites () {
    const {app} = getAppContext()
    const {imagesData} = getImagesDataContext()

    for (let item of imagesData.parsed) {
        const sprite = PIXI.Sprite.from(item.canvas)
        sprite.name = item.name
        sprite.position.set(item.left, item.top)
        sprite.alpha = item.opacity

        app.stage.addChild(sprite)
    }
}

export default addSprites