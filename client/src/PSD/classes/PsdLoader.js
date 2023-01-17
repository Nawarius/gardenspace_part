import { readPsd } from 'ag-psd'

class PsdLoader {
    constructor () {
        this.psd = null
        this.imagesData = []
    }

    async init () {
        this.psd = await this._load('psd/test_task.psd')
        this.imagesData = [...this.psd.children]

        console.log(this.imagesData)
    }

    async _load (url) {
        const res = await fetch(url)
        const buffer = await res.arrayBuffer()

        const psd = readPsd(buffer)

        return psd
    }

    getImagesData () {
        return this.imagesData
    }
}

export default PsdLoader