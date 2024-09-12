/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '../../styles/Typography.styled'
import { FiChevronRight } from 'react-icons/fi'
import { PortfolioModal } from "../Modal-portifolio";

export default function Card({ title, description, image, url, repositorio }) {
    const [show, setShow] = useState(false);
    return (
        <>
            <PortifolioCard
                onClick={() => setShow(true)}
                onKeyPress={() => setShow(true)}
                role="button"
                tabIndex="-1"
            >
                <InnerCard>
                    <ImageWrapper>
                        <img src={image} alt="..." />
                    </ImageWrapper>

                    <ContentWrapper>
                        <Typography as="h4" Color={props => props.theme.colors.primary} heading>{title}</Typography>
                        <Typography clamp="2">{description}</Typography>
                        <LinkWrapper>
                            <a rel="noreferrer" target="_blank" href={url}>Ver Página<FiChevronRight /></a>
                            <a rel="noreferrer" target="_blank" href={repositorio}>Git<FiChevronRight /></a>
                        </LinkWrapper>

                    </ContentWrapper>
                </InnerCard>
            </PortifolioCard>
            <PortfolioModal
                show={show}
                setShow={setShow}
                title={title}
                image={image}
                texts={description}
                url={url}
                repositorio={repositorio}
            />
        </>
    )
}

const PortifolioCard = styled.div`
    width: 100%;
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 1.875rem;	
    padding-inline: 0.938rem;
    position: relative;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
`;

const InnerCard = styled.div`
    background: ${props => props.theme.colors.bgLight};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadows.primary};
    display: inline-block;
    height: 100%;
    padding: 1.875rem;
    position: relative;
    text-align: left;
    transition: all .5s ease-in-out;
    z-index: 1;

    &:before {
    background: linear-gradient(to right bottom,#212428,#16181c);
    border-radius: 20px;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: 0.4s;
    width: 100%;
    z-index: -1;
    }

    &:hover{
         img{
            transform: scale(1.1);
        }

        &:before { opacity: 1; }	
    }
`;

const ImageWrapper = styled.div`
    border-radius: 10px;
    display: block;
    overflow: hidden;
    aspect-ratio: 4/3;

   & >img {
        height: 100%;
        object-fit: fill;
        transition: all .4s;
        width: 100%;
    }
`;

const ContentWrapper = styled.div`
    padding-top: 1rem;
`;

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    > a{
        display: inline-flex;
        align-items: center;
        color: ${props => props.theme.colors.gray};
        font-weight: bold;
        letter-spacing: 2px;
        &:hover {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
        }
    }
`;
