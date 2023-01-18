import { readPsd } from 'ag-psd'

class PsdLoader {
    constructor () {
        this.psd = null
        this.imagesData = {
            parsed: [],
            unparsed: []
        }
    }

    async init () {
        this.psd = await this._load('psd/test_task.psd')
        this._setImageDataRecursive(this.psd.children)

        this.imagesData.unparsed = this.psd.children

        console.log(this.imagesData)
    }

    async _load (url) {
        const res = await fetch(url)
        const buffer = await res.arrayBuffer()

        const psd = readPsd(buffer)

        return psd
    }

    _addImageData (imageData) {
        this.imagesData.parsed.push(imageData)
    }

    _setImageDataRecursive (imagesDataArr) {
        for (let child of imagesDataArr) {
            if (child.children) this._setImageDataRecursive(child.children)
            if (child.canvas) this._addImageData(child)
        }
    }

    getImagesData () {
        return this.imagesData
    }
}

export default PsdLoader