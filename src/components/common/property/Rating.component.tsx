import CoreRating from 'react-rating'
import { RatingContainer } from './Property.styles'
import { Rating as RatingType } from '../../../types'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { FaRegCircle, FaCircle } from 'react-icons/fa'

interface RatingProps {
  rating: RatingType
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const { ratingType, ratingValue } = rating

  const yellowStyle = { color: '#F4E701' }

  return (
    <RatingContainer>
      {ratingType === 'self' ? (
        <CoreRating
          initialRating={ratingValue}
          readonly={true}
          emptySymbol={<FaRegCircle style={yellowStyle} size={14}/>}
          fullSymbol={<FaCircle style={yellowStyle} size={14}/>}
        />
      ) : (
        <CoreRating
          initialRating={ratingValue}
          readonly={true}
          emptySymbol={<FaRegStar style={yellowStyle} size={16}/>}
          fullSymbol={<FaStar style={yellowStyle} size={16}/>}
        />
      )}
    </RatingContainer>
  )
}

export default Rating
