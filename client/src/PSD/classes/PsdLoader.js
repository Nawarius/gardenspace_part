import { readPsd } from 'ag-psd'
import axios from 'axios'

class PsdLoader {
    constructor () {
        this.psd = null
        this.imagesData = {
            parsed: [],
            unparsed: []
        }
    }

    async init (url, loadingCb) {
        this.psd = await this._load(url, loadingCb)
        this._setImageDataRecursive(this.psd.children)

        this.imagesData.unparsed = this.psd.children

        console.log(this.imagesData)
    }

    async _load (url, loadingCb) {
        const resData = await axios.get(url, {
            responseType: 'arraybuffer',
            onDownloadProgress: (p) => loadingCb((p.loaded / p.total * 100).toFixed(0))
        })

        const buffer = resData.data
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