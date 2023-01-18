import { Ease } from 'pixi-ease'
import displayStairsMenu from '../display/displayStairsMenu'
import { getAppContext } from '../MainComponent'

function initHammer () {
    const {app} = getAppContext()

    const hammer = app.stage.getChildByName('icon_hammer')
    hammer.visible = false
    hammer.interactive = true
    hammer.cursor = 'pointer'
    hammer.scale.set(0.1)
    
    hammer.on('pointerdown', () => {
        hammer.removeAllListeners()

        const ease = new Ease({ duration: 400, wait: 0, ease: 'easeInOutQuad', repeat: 1 })
        ease.add(hammer, { scale: 0.1 })

        ease.once('complete', () => hammer.visible = false)

        displayStairsMenu(true)
    })

    hammer.on('pointerover', () => {
        const ease = new Ease({ duration: 400, wait: 0, ease: 'easeOutQuad', repeat: 1 })
        ease.add(hammer, { scale: 1.1 })
    })

    hammer.on('pointerout', () => {
        const ease = new Ease({ duration: 400, wait: 0, ease: 'easeOutQuad', repeat: 1 })
        ease.add(hammer, { scale: 1 })
    })

    setTimeout(() => {
        hammer.visible = true

        const ease = new Ease({ duration: 1000, wait: 0, ease: 'easeOutQuad', repeat: 1 })
        ease.add(hammer, { scale: 1 })
    }, 1000)
}

export default initHammer