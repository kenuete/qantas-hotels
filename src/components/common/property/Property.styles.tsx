import { styled } from 'styled-components'
import { Button, Paragraph } from '../styles'

export const ImageContainer = styled.div`
    height: 130px;
    padding: 10px 0 10px 0;
    position: relative;
`

export const Img = styled.img`
    width: 150px;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`

export const PropertyDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #cccccc;
    padding-top: 10px;
    /* override default */
    *{
        margin: 0; 
    }
`

export const RoomTypeBtn = styled(Button)`
    align-self: baseline;
    background: none;
    border: none;
    padding: 0;
    font-weight: 600;
    text-decoration: underline;
    color: #BE0000;
    cursor: pointer;
`

export const CancellationPolicyText = styled(Paragraph)`
    color: #0d774b;
`

export const OfferContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`

export const PricingText = styled(Paragraph)`
    color: #4c4949;
`

export const PricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-top: 1px solid #cccccc;
    align-items: flex-end;
/* ovveride default */
    *{
        margin: 0;
        padding: 0;
    }
`

export const SavingsAmount = styled(Paragraph)`
    color: #BE0000;
`

export const RatingContainer = styled.div`
    margin-left: 10px;
`

export const PromoBanner = styled.p`
    position: absolute;
    max-width: 60%;
    color: #BE0000;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    background-color: white;
    border-left: 1px solid #E0E5E5;
    font-weight: 500;
`