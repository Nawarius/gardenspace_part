import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'
import addSprites from './Sprites/addSprites'
import { Ease } from 'pixi-ease'
import initEnterMenu from './EnterMenu/initEnterMenu'

const MainComponent = ({imagesData}) => {

    useEffect(() => {
        const app = new PIXI.Application({
            view: document.getElementById("pixi-canvas"),
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 'black',
            width: window.innerWidth,
            height: window.innerHeight
        })

        addSprites(imagesData, app)

        initEnterMenu(app)

    }, [])

    return <>
        <canvas id = 'pixi-canvas' style = {{width: '100%', height: '100%', position: 'fixed'}}></canvas>
    </>
}

export default MainComponent