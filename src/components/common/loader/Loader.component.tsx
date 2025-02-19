import { ClimbingBoxLoader } from 'react-spinners'
import { Container } from './Loader.styles'

const Loader = () => {
  return (
    <Container>
      <ClimbingBoxLoader aria-label='Loading Spinner' data-testid='loader' />
    </Container>
  )
}

export default Loader
