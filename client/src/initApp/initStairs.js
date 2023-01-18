
function initStairs (app) {
    const stairs = app.stage.children.filter(i => i.name.includes('stair'))
    const oldStair = stairs.find(i => i.name === 'old_stair')

    for (let stair of stairs) stair === oldStair ? stair.visible = true : stair.visible = false
}

export default initStairs