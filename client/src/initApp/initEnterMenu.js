import { Ease } from 'pixi-ease'

function initEnterMenu (app) {
    const layer2 = app.stage.getChildByName('Layer 2')
    layer2.position.x = window.innerWidth / 2 - layer2.width / 2

    const layer3 = app.stage.getChildByName('Layer 3')
    layer3.width = window.innerWidth
    layer3.height = window.innerHeight

    const btn = app.stage.getChildByName('btn')
    btn.anchor.set(0.5)
    btn.position.x = window.innerWidth / 2 
    btn.position.y += btn.height / 2
    btn.interactive = true
    btn.cursor = 'pointer'

    const hammer = app.stage.getChildByName('icon_hammer')

    btn.on('pointerover', () => {
        const ease = new Ease({ duration: 400, wait: 0, ease: 'easeInBack', repeat: 1 })
        ease.add(btn, { scale: 1.1 })
    })

    btn.on('pointerout', () => {
        const ease = new Ease({ duration: 400, wait: 0, ease: 'easeInBack', repeat: 1 })
        ease.add(btn, { scale: 1 })
    })

    btn.on('pointerdown', () => {
        layer2.visible = false
        layer3.visible = false
        btn.visible = false

        setTimeout(() => hammer.visible = true, 2000)
    })
}

export default initEnterMenu