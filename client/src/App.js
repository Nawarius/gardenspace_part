import { useEffect, useState } from 'react'
import PsdLoader from './PSD/classes/PsdLoader'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAndParsePsd = async () => {
      const PsdLoaderInst = new PsdLoader()
      await PsdLoaderInst.init()
      
      setLoading(false)
    }

    loadAndParsePsd()
    
  }, [])

  return <>
    {loading && <div>Loading...</div>}
    {!loading && <div>Parsed</div>}
  </>
}

export default App;
