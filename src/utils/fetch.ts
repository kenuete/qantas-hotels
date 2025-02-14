import { HotelResults } from '../types'

interface GetHotelResultsProps {
  onSuccess: (data: HotelResults) => void
  onFailure: (errorMessage: string) => void
}

const URL = "/api/hotels"

export const getHotelResults = async ({
  onSuccess,
  onFailure,
}: GetHotelResultsProps) => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const data = await response.json()
    onSuccess(data)

  } catch (error) {

    if (error instanceof Error) {
      onFailure('Something went wrong!')
      console.error(error.message)
    } else {
      onFailure('An unknown error occurred')
    }

  }
}
