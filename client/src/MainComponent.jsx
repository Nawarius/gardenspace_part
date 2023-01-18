import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'
import addSprites from './Sprites/addSprites'
import initEnterMenu from './initApp/initEnterMenu'
import initStairsMenu from './initApp/initStairsMenu'
import initStairs from './initApp/initStairs'
import initHammer from './initApp/initHammer'
import displayStairsMenu from './display/displayStairsMenu'

export let getAppContext = () => {}

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

        getAppContext = () => ({ app })

        // Add all sprites from psd data
        addSprites(imagesData.parsed, app)

        // Init state of app
        initEnterMenu(app)
        initHammer(app)
        initStairs(app)
        initStairsMenu(app)

        displayStairsMenu(false)

    }, [])

    return <>
        <canvas id = 'pixi-canvas' style = {{width: '100%', height: '100%', position: 'fixed'}}></canvas>
    </>
}

export default MainComponent