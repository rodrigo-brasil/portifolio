import styled, { css } from 'styled-components'


export const Typography = styled.p`
    font-family: ${props => props.font ? props.font : 'inherit'};
    font-size: ${props => props.size ? props.size : 'revert'};
    font-weight: ${props => props.weight ? props.weight : 'revert'};

    ${props => props.Color && css`
        color: ${props.Color};
    `}


    ${props => props.align && css`
        text-align: ${props.align};
    `}

    ${props => props.me && css`
        margin-inline-end: ${props.me};
    `}

    ${props => props.mb && css`
        margin-bottom: ${props.mb};
    `}

    ${props => props.heading && css`
        color: ${props => props.Color ? props.Color : '#fff'};
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 1.375rem;
    `}

    ${props => props.clamp && css`
        display: -webkit-box;
        -webkit-line-clamp: ${props => props.clamp ? props.clamp : 1};
        -webkit-box-orient: vertical;
        overflow: hidden;
    `}

`;

export default Typography;