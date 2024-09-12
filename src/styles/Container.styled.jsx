import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin-inline: auto;
    padding-inline: 10px;

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        padding-inline: 15px;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        max-width: 720px;
        padding-inline: 20px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        max-width: 960px;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        max-width: 1320px;
    }


`;

 export default Container;