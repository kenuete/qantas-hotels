import { useCallback, useEffect, useState } from 'react'
import { getHotelResults } from './utils/fetch'
import { Hotel } from './types'


const App = ()  => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [hotelResults, setHotelResults] = useState<Hotel[]>([])

  const onSuccess = useCallback((hotels: Hotel[]) => {
    setHotelResults(hotels)
    setLoading(false)
  }, [])

  const onFailure = useCallback((error: string) => {
    setError(error)
  }, [])

  useEffect(() => {
    getHotelResults({ onSuccess, onFailure})
  }, [])
  
  return (
    <>

    </>
  )
}

export default App
