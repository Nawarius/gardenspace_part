import { useEffect, useState } from 'react'
import MainComponent from './MainComponent'
import PsdLoader from './PSD/classes/PsdLoader'

export let getImagesDataContext = () => {}

const psd_url = window.location.hostname === 'localhost' ? 'psd/test_task.psd' : 'https://dl.dropbox.com/s/tbscjmprhglankt/test_task.psd'

function App() {

  const [loading, setLoading] = useState({
    progress: 0,
    loaded: false
  })

  const loadingCb = (progress) => {
    setLoading(prev => ({...prev, progress}))
  }

  useEffect(() => {
    const loadAndParsePsd = async () => {
      const PsdLoaderInst = new PsdLoader()
      await PsdLoaderInst.init(psd_url, loadingCb)
      
      const data = PsdLoaderInst.getImagesData()
      
      getImagesDataContext = () => ({ imagesData: data })

      setLoading(prev => ({...prev, loaded: true}))
    }

    loadAndParsePsd()
    
  }, [])

  return <>
    {!loading.loaded && <div style = {{
      width: '100vw', 
      height: '100vh', 
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style = {{textAlign: 'center'}}>
        <p>Loading and parse PSD...</p>
        <p>Loaded {loading.progress}%</p>
        <p>Please wait.</p>
      </div>
    </div>}
    {loading.loaded && <MainComponent />}
  </>
}

export default App;
