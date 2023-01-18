import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'
import addSprites from './Sprites/addSprites'
import initFinalMenu from './initApp/initFinalMenu'
import initStairsMenu from './initApp/initStairsMenu'
import initStairs from './initApp/initStairs'
import initHammer from './initApp/initHammer'
import displayStairsMenu from './display/displayStairsMenu'
import displayFinalMenu from './display/displayFinalMenu'

export let getAppContext = () => {}

const MainComponent = () => {

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
        addSprites()

        // Init state of app
        initFinalMenu()
        initHammer()
        initStairs()
        initStairsMenu()

        displayFinalMenu(false)
        displayStairsMenu(false)

    }, [])

    return <>
        <canvas id = 'pixi-canvas' style = {{width: '100%', height: '100%', position: 'fixed'}}></canvas>
    </>
}

export default MainComponent