import { styled } from 'styled-components'
import { Button, Paragraph } from '../styles'

export const Img = styled.img`

`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`

export const PropertyDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
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