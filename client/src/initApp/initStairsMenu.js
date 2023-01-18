import { getImagesDataContext } from "../App"
import displayFinalMenu from "../display/displayFinalMenu"
import changeStair from "../general/changeStair"
import { Ease } from 'pixi-ease'
import { getAppContext } from "../MainComponent"

function initStairsMenu () {
    const {app} = getAppContext()
    const {imagesData} = getImagesDataContext()

    const imagesNames = imagesData.unparsed.find(i => i.name === 'menu').children.map(c => c.name)

    for (let name of imagesNames) {
        const menuSprite = app.stage.getChildByName(name)
        menuSprite.interactive = true
        menuSprite.cursor = 'pointer'
    }  

    const choosed = app.stage.getChildByName('choosed')
    const ok_btn = app.stage.getChildByName('ok')
    ok_btn.alpha = 0.8

    const substratesNames = imagesNames.filter(n => n === '1' || n === '2' || n === '3')
    const substrates = []

    for (let name of substratesNames) {
        const substrate = app.stage.getChildByName(name)
        substrates.push(substrate)
    }

    let stairNum = 2
    // Change choose/ok_btn coords 
    app.ticker.add((e) => {
        const mousePos = app.renderer.plugins.interaction.mouse.global
        for (let substrate of substrates) {
            if (!substrate.visible) return

            if (substrate.containsPoint(mousePos)) {
                if (stairNum === +substrate.name) return

                stairNum = +substrate.name

                choosed.alpha = 0.1
                choosed.position.x = substrate.position.x

                const ease = new Ease({ duration: 400, wait: 0, ease: 'easeOutQuad', repeat: 1 })
                ease.add(ok_btn, { x: substrate.position.x })

                const ease2 = new Ease({ duration: 400, wait: 0, ease: 'easeOutQuad', repeat: 1 })
                ease2.add(choosed, { alpha: 1 })

                changeStair(`new_stair_0${stairNum}`)
            }
        }
    })

    ok_btn.on('click', () => displayFinalMenu(true))

    ok_btn.on('pointerover', () => {
        const ease = new Ease({ duration: 500, wait: 0, ease: 'easeOutQuad', repeat: 1 })
        ease.add(ok_btn, { alpha: 1 })
    })

    ok_btn.on('pointerout', () => {
        const ease = new Ease({ duration: 500, wait: 0, ease: 'easeOutQuad', repeat: 1 })
        ease.add(ok_btn, { alpha: 0.8 })
    })
}

export default initStairsMenu