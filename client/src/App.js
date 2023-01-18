import { useEffect, useState } from 'react'
import MainComponent from './MainComponent'
import PsdLoader from './PSD/classes/PsdLoader'

export let getImagesDataContext = () => {}

const psd_url = window.location.hostname === 'localhost' ? 'psd/test_task.psd' : 'https://dl.dropbox.com/s/tbscjmprhglankt/test_task.psd'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAndParsePsd = async () => {
      const PsdLoaderInst = new PsdLoader()
      await PsdLoaderInst.init(psd_url)
      
      const data = PsdLoaderInst.getImagesData()
      
      getImagesDataContext = () => ({ imagesData: data })

      setLoading(false)
    }

    loadAndParsePsd()
    
  }, [])

  return <>
    {loading && <div style = {{width: '100%', height: '100%', textAlign: 'center'}}>
      Loading and parse PSD... 
      Please wait.
    </div>}
    {!loading && <MainComponent />}
  </>
}

export default App;
