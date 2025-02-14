import { Rating, Property } from '../../../types'
import { Header as Container } from './Property.styles'

interface HeaderProps {
    title: Property['title']
    rating: Rating
}

const Header: React.FC<HeaderProps> = ({ title, rating }) => {
    return (
        <Container>
            <h3>{title}</h3>
            <div>****</div>
        </Container>
    )
}

export default Header