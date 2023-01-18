
function initStairsMenu (unparsedImagesData, app) {
    const imagesNames = unparsedImagesData.find(i => i.name === 'menu').children.map(c => c.name)

    for (let name of imagesNames) {
        const menuSprite = app.stage.getChildByName(name)
        menuSprite.visible = false
    }  
}

export default initStairsMenu