import { styled } from 'styled-components'

export const Row = styled.article`
    display: grid;
    flex-direction: row;
    grid-template-columns: 170px 1fr 170px;
`

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`