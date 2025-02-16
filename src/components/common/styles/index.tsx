import { styled } from 'styled-components'

export const H3 = styled.h3`
    font-weight: 500;
    font-size: 16px;
`
export const BoldText = styled.span`
    font-weight: 600;
`

export const ItalicText = styled.span`
    font-style: italic;
`

interface ParagraphProps {
    light?: boolean
    size?: string
}

export const Paragraph = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== 'light' && prop !== 'size'
})<ParagraphProps>`
    font-size: 14px;
    font-size: ${({ size }) => (size ? `${size}px` : '14px')};
    color: ${({ light }) => (light ? '#7c7a7a' : 'inherit')};
`

interface ButtonProps {
    linkStyle?: boolean
}

export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'linkStyle'
})<ButtonProps>`

`
export const Dollar = styled.span`
    vertical-align: text-top;
    font-size: 12px;
`