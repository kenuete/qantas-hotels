import { useCallback, useEffect, useState } from 'react'
import { getHotelResults } from './utils/fetch'
import { Hotel } from './types'
import Hotels from './components/hotels/Hotels.component'
import Header from './components/common/header/Header.component'
import Loader from './components/common/loader/Loader.component'
import ErrorModal from './components/common/errorModal/ErrorModal.component'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [hotelResults, setHotelResults] = useState<Hotel[]>([])

  const onSuccess = useCallback((hotels: Hotel[]) => {
    setHotelResults(hotels)
    setLoading(false)
  }, [])

  const onFailure = useCallback((error: string) => {
    setError(error)
    setLoading(false)
  }, [])

  useEffect(() => {
    getHotelResults({ onSuccess, onFailure })
  }, [onSuccess, onFailure])

  if (loading) return <Loader />
  if (error) return <ErrorModal />

  return (
    <>
      <Header />
      <main>
        <Hotels results={hotelResults} searchedPlace='Sydney' />
      </main>
    </>
  )
}

export default App
