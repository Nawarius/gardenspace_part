import { getAppContext } from "../MainComponent"

function displayFinalMenu (bool) {
    const {app} = getAppContext()

    const sprites = app.stage.children.filter(s => s.name === 'Layer 2' || s.name === 'Layer 3' || s.name === 'btn')
    for (let s of sprites) s.visible = bool
}

export default displayFinalMenu