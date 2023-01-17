
class PsdExtractor {

    extractSingle (imagesData, imageName) {
        return imagesData.find(i => i.name === imageName)
    }

    extractAllFromFolder (imagesData, folderName) {
        return imagesData.find(i => i.name === folderName).children
    }

    extractSingleFromFolder (imagesData, folderName, imageName) {
        return imagesData.find(i => i.name === folderName).children.find(i => i.name === imageName)
    }
}

export default new PsdExtractor()