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
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            width: window.innerWidth,
            height: window.innerHeight
        })

        app.view.style.background = 'black'
        app.view.style.position = 'fixed'
        document.getElementById('root').appendChild(app.view)

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

    return <></>
}

export default MainComponent