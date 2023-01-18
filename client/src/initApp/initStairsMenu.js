import { getImagesDataContext } from "../App"

function initStairsMenu (app) {
    const {imagesData} = getImagesDataContext()

    const imagesNames = imagesData.unparsed.find(i => i.name === 'menu').children.map(c => c.name)

    for (let name of imagesNames) {
        const menuSprite = app.stage.getChildByName(name)
        menuSprite.interactive = true
        menuSprite.cursor = 'pointer'
    }  

    const choosed = app.stage.getChildByName('choosed')
    const ok_btn = app.stage.getChildByName('ok')

    const substratesNames = imagesNames.filter(n => n === '1' || n === '2' || n === '3')
    const substrates = []

    for (let name of substratesNames) {
        const substrate = app.stage.getChildByName(name)
        substrates.push(substrate)
    }

    // Change choose/ok_btn coords 
    app.ticker.add((e) => {
        const mousePos = app.renderer.plugins.interaction.mouse.global
        for (let substrate of substrates) {
            if (substrate.containsPoint(mousePos)) {
                choosed.position.set(substrate.position.x, substrate.position.y)
                ok_btn.position.x = substrate.position.x
            }
        }
    })

}

export default initStairsMenu