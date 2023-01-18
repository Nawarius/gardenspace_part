import { getAppContext } from "../MainComponent"

function changeStair (stairName) {
    const {app} = getAppContext()

    const newStairs = app.stage.children.filter(s => s.name.includes('new_stair'))

    for (let stair of newStairs) {
        if (stair.name === stairName) stair.visible = true
        else stair.visible = false

        stair.alpha = 0.5
    }
}

export default changeStair