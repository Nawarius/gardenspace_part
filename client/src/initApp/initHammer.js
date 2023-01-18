import { Ease } from 'pixi-ease'

function initHammer (app) {
    const hammer = app.stage.getChildByName('icon_hammer')
    hammer.visible = false
    hammer.interactive = true
    hammer.cursor = 'pointer'

    hammer.on('pointerover', () => {
        const ease = new Ease({ duration: 400, wait: 0, ease: 'easeInBack', repeat: 1 })
        ease.add(hammer, { scale: 1.1 })
    })

    hammer.on('pointerout', () => {
        const ease = new Ease({ duration: 400, wait: 0, ease: 'easeInBack', repeat: 1 })
        ease.add(hammer, { scale: 1 })
    })
}

export default initHammer