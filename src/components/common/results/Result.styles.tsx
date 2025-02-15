import { styled } from 'styled-components'

export const Row = styled.div`
    display: grid;
    flex-direction: row;
    grid-template-columns: 20% 60% 20%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`