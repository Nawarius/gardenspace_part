import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'
import PsdExtractor from './PSD/classes/PsdExtractor'
import addSprites from './Sprites/addSprites'

const MainComponent = ({imagesData}) => {

    useEffect(() => {
        const app = new PIXI.Application({
            view: document.getElementById("pixi-canvas"),
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0x6495ed,
            width: window.innerWidth,
            height: window.innerHeight
        })

        const back = PsdExtractor.extractSingle(imagesData, 'back')
        const back_sprite = PIXI.Sprite.from(back.canvas)
        back_sprite.position.set(back.left, back.top)

        app.stage.addChild(back_sprite)

        const decCenter = PsdExtractor.extractAllFromFolder(imagesData, 'dec_2')
        const stairs = PsdExtractor.extractAllFromFolder(imagesData, 'stair')
        const menuItems = PsdExtractor.extractAllFromFolder(imagesData, 'menu')

        const austin = PsdExtractor.extractSingle(imagesData, 'Austin')
        const dec1 = PsdExtractor.extractSingle(imagesData, 'dec_1')
        const hammer = PsdExtractor.extractSingle(imagesData, 'icon_hammer')

        addSprites([...decCenter, ...stairs, ...menuItems, austin, dec1, hammer], app)

    }, [])

    return <>
        <canvas id = 'pixi-canvas' style = {{width: '100%', height: '100%', position: 'fixed'}}></canvas>
    </>
}

export default MainComponent