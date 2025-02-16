import { Rating, Property } from '../../../types'
import { Header as Container } from './Property.styles'
import { H3 } from '../styles'
interface HeaderProps {
    title: Property['title']
    rating: Rating
}

const Header: React.FC<HeaderProps> = ({ title, rating }) => {
    return (
        <Container>
            <H3>{title}</H3>
            <div>****</div>
        </Container>
    )
}

export default Header