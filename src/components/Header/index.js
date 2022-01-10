import { useEffect, useState, useCallback, useRef } from "react";
import { FaTimes, FaBars, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled, { css } from "styled-components";
import { Container } from "../../styles/Container.styled";
import SocialLink from "../SocialLink";
import useSticky from "../../hooks/use-sticky";


export default function Header() {

    const sticky = useSticky();
    const [toggle, setToggle] = useState(false);
    const [showHeader, setShowHeader] = useState(true);


    const menuToggle = () => setToggle(prev => !prev);
    const menuClose = (e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget)
            setToggle(false)
    };

    const lastHeight = useRef(0);
    const controlNavBar = useCallback(() => {
        const currentScroll = window.scrollY;

        if (currentScroll  > lastHeight.current  && currentScroll > window.innerHeight - 100) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }

        lastHeight.current = currentScroll;
    }, [lastHeight]);

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar);
        return () => window.removeEventListener('scroll', controlNavBar);
    }, [controlNavBar]);


    return (
        <HeaderStyled showHeader={showHeader} sticky={sticky}>
            <Nav as="nav">

                <NavbarToggle onClick={menuToggle}>
                    {toggle ? <FaTimes /> : <FaBars />}
                </NavbarToggle>

                <NavbarItemLogo as="a" href="#home">
                    <h3>Rodrigo Brasil</h3>
                    <p>Full Stack Developer</p>
                </NavbarItemLogo>

                <NavbarItemList toggle={toggle} sticky={sticky} onClick={menuClose}>
                    <Wraper toggle={toggle}>
                        <NavbarLink href="#about" onClick={menuClose}>Sobre</NavbarLink>
                        <NavbarLink href="#galeria" onClick={menuClose}>Projetos</NavbarLink>
                        <NavbarLink href="#contato" onClick={menuClose}>Contato</NavbarLink>
                    </Wraper>
                </NavbarItemList>

                <NavbarItemSocialList >

                    <SocialLink path="#">
                        <FaGithub size='2rem' />
                    </SocialLink>
                    <SocialLink path="#">
                        <FaLinkedinIn size='2rem' />
                    </SocialLink>
                </NavbarItemSocialList>

            </Nav>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`

  position: absolute;
  width: 100%;
  top: 0;
  z-index:999;
  transition: transform .3s ease-in-out;
  color: ${props => props.theme.colors.gray};


  ${props => props.sticky && css`
        position: fixed;
        background-image: none;
        background-color: ${props => props.theme.colors.header};
        backdrop-filter: blur(15px);
        box-shadow: ${props => props.theme.boxShadows.primary};
        transform: translateY(0);
        

        ${props => !props.showHeader && css`
            transform: translateY(-100%);
            box-shadow: unset;
            `}
  
`}`;

const Nav = styled(Container)`
    padding: 0 4rem;
    min-height: 4rem;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    z-index: 999;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        height: 4rem;
        padding: 0 2rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        padding: 0 1rem;
    }
`;

const NavbarItemSocialList = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    background-color: transparent;

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        display: none;
    }
`;

const NavbarItemList = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    transition: left 0.3s ease;


    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        position: absolute;
        justify-content: flex-start;
        width: 100vw;
        min-height: 100vh;
        left: 0;
        bottom: 0;
        opacity: 0;
        margin-left: 0;
        left: -100%;
        transform: translateY(100%) ;
        transition: opacity 0.2s ease;
        background-color: ${props => props.theme.colors.header};

        ${props => props.toggle && css`
        left: 0;
        opacity: 1;
    `}
    }
`;

const Wraper = styled.div`
        display:flex;
        height: 100%;
        

        @media (max-width: ${props => props.theme.breakpoints.lg}) {
            position: absolute;
            flex-direction: column;
            justify-content: flex-start;
            gap: 1rem;
            width:300px;
            padding: 2rem;
            overflow-y: auto;
            background-color: ${props => props.theme.colors.bgDark};
            transition: left 0.3s ease .2s;
            left: -100%;

            ${props => props.toggle && css`
            left: 0;
            `}
        }
`;

const NavbarLink = styled.a`
    display: inline-flex;
        margin-inline: .5rem;
        align-items: center;
        font-weight: 600;
        padding: 0 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        border-bottom: 6px solid transparent;
        transition: border 0.2s linear;
        padding-inline: 0.5rem;
        color: ${props => props.theme.colors.gray};
        
        &:hover {
            color: ${props => props.theme.colors.primary};
            border-bottom: 6px solid ${props => props.theme.colors.primary};
        }

        @media (max-width: ${props => props.theme.breakpoints.lg}) {
            padding-bottom: .5rem
        }
`;


const NavbarItemLogo = styled.div`
    display: inline-flex;
    justify-content: center;
    letter-spacing: 0.3rem;
    flex-direction: column;
    text-align: center;
    padding-block: 0.5rem;
    color: ${props => props.theme.colors.gray};

    & :is(h1, h2, h3, h4, h5, h6) {
        font-weight: 500;
    }

    p{
        margin: 0;
        font-size: 0.8rem;
    }
`;

const NavbarToggle = styled.button`
    display: none;
    font-size: 1.3em;
    width: 70px;
    background-color: transparent;

    @media(max-width:${prop => prop.theme.breakpoints.lg}) {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
`;