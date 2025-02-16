import { Rating as RatingType, Property } from '../../../types'
import { Header as Container } from './Property.styles'
import { H3 } from '../styles'
import Rating from './Rating.component'
interface HeaderProps {
    title: Property['title']
    rating: RatingType
}

const Header: React.FC<HeaderProps> = ({ title, rating }) => {
    
    return (
        <Container>
            <H3>{title}</H3>
            <Rating rating={rating}/>
        </Container>
    )
}

export default Header