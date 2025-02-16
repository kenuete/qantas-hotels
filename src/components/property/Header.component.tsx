import { Rating as RatingType, Property } from '../../types'
import { Header as Container } from './Property.styles'
import { H3 } from '../common/styles'
import Rating from './Rating.component'
interface HeaderProps {
    title: Property['title']
    rating: RatingType
    id?: string
}

const Header: React.FC<HeaderProps> = ({ title, rating, id }) => {
    return (
        <Container data-testid={`result-details-header-${id}`}>
            <H3>{title}</H3>
            <Rating rating={rating}/>
        </Container>
    )
}

export default Header