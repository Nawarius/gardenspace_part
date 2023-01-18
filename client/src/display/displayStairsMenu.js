import { getImagesDataContext } from "../App"
import { getAppContext } from "../MainComponent"

function displayStairsMenu (bool) {
    const {app} = getAppContext()
    const {imagesData} = getImagesDataContext()

    const imagesNames = imagesData.unparsed.find(i => i.name === 'menu').children.map(c => c.name)

    for (let name of imagesNames) {
        const menuSprite = app.stage.getChildByName(name)
        menuSprite.visible = bool
    }  
}

export default displayStairsMenu