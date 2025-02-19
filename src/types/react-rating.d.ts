declare module 'react-rating' {
  interface RatingProps {
    initialRating: number
    readonly?: boolean
    onChange?: (value: number) => void
    emptySymbol?: React.ReactNode
    fullSymbol?: React.ReactNode
  }

  const Rating: React.ComponentType<RatingProps>
  export default Rating
}


