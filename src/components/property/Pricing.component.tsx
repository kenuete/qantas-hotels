import { Offer } from '../../types'
import { Paragraph } from '../common/styles'
import { PricingText, PricingContainer, SavingsAmount } from './Property.styles'
import { Dollar } from '../common/styles'
interface PricingProps {
    displayPrice: Offer['displayPrice']
    savings: Offer['savings']
}

const Pricing: React.FC<PricingProps> = ({ displayPrice, savings}) => {
    const { currency, amount } = displayPrice || {}
    const { amount: savingsAmount } = savings || {}

    return (
        <PricingContainer>
            <PricingText size='12'>{`1 night total (${currency})`}</PricingText>
            <Paragraph size='24'><Dollar>$</Dollar>{amount}</Paragraph>
            <SavingsAmount size='16'>{savingsAmount ? `Save $${savingsAmount}~` : '\u00A0'}</SavingsAmount>
        </PricingContainer>
    )
}

export default Pricing