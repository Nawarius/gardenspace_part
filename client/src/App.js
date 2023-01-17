import { useEffect, useState } from 'react'
import MainComponent from './MainComponent'
import PsdLoader from './PSD/classes/PsdLoader'

function App() {

  const [loading, setLoading] = useState(true)
  const [imagesData, setImagesData] = useState([])

  useEffect(() => {
    const loadAndParsePsd = async () => {
      const PsdLoaderInst = new PsdLoader()
      await PsdLoaderInst.init()
      
      const imgData = PsdLoaderInst.getImagesData()
      
      setImagesData(imgData)
      setLoading(false)
    }

    loadAndParsePsd()
    
  }, [])

  return <>
    {loading && <div style = {{width: '100%', height: '100%', textAlign: 'center'}}>Loading...</div>}
    {!loading && <MainComponent imagesData = {imagesData} />}
  </>
}

export default App;
