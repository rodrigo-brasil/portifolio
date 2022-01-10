import styled, {css} from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;

    ${props => props.justify && css`
        justify-content: ${props.justify};
    `}

    ${props => props.align && css`
        align-items: ${props.align};
    `}

    ${props => props.marginY && css`
        margin-block: ${props.marginY};
    `}

    ${props => props.marginX && css`
        margin-inline: ${props.marginX};
    `}

    ${props => props.marginT && css`
        margin-top: ${props.marginT};
    `}

    ${props => props.marginB && css`
        margin-bottom: ${props.marginB};
    `}

    ${props => props.gapY && css`
        row-gap: ${props.gapY};
    `}

    ${props => props.gap && css`
        gap: ${props.gap};
    `}


`;

export const Col = styled.div`
    flex: 1 0 ${props => props.size ? props.size : 'auto'};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-inline: auto;
    padding-inline: 10px;

    ${props => props.justify && css`
        justify-content: ${props.justify};
    `}

    ${props => props.align && css`
        align-items: ${props.align};
    `}

    ${props => props.marginY && css`
        margin-block: ${props.marginY};
    `}

    ${props => props.marginX && css`
        margin-inline: ${props.marginX};
    `}

    ${props => props.marginT && css`
        margin-top: ${props.marginT};
    `}

    ${props => props.marginB && css`
        margin-bottom: ${props.marginB};
    `}

    ${props => props.gap && css`
        gap: ${props.gap};
    `}


    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        flex: 1 0 100%;
        align-items: center;
    }
`;

export default Row;