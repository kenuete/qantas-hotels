import { Offer } from '../../../types'

interface PricingProps {
    displayPrice: Offer['displayPrice']
    savings: Offer['savings']
}

const Pricing: React.FC<PricingProps> = ({ displayPrice, savings}) => {
    const { currency, amount } = displayPrice || {}
    const { amount: savingsAmount } = savings || {}
    return (
        <div>
            <p>{`1 night total(${currency})`}</p>
            <p>{amount}</p>
            <p>{savingsAmount}</p>
        </div>
    )
}

export default Pricing