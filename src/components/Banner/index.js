import { Container } from "../../styles/Container.styled";
import { Row, Col } from "../../styles/Row.styled";
import Curriculo from "../../assets/currculo-rodrigo-dev.pdf"
import styled, {keyframes} from "styled-components";

import { FaChevronDown } from "react-icons/fa";

export const Banner = ({ children, urlImage }) => {

    return (
        <Section id="home">
            <Container>
                <Row gapY="1rem">
                    <Col size="60%">
                        {children}
                        <Row gapY="1rem" marginT="auto" justify= "flex-start">
                            <Button href={Curriculo} download="Rodrigo-CV">
                                Download CV
                            </Button>

                            <Button href="#contato">
                                Contato
                            </Button>

                        </Row>
                    </Col>

                    {
                        urlImage &&
                        <Col size="40%">
                            <Image image={urlImage} />
                        </Col>

                    }
                </Row>
            </Container>
            <NextSection href="#about">
                <Animated />
            </NextSection>
        </Section>
    )
}

const Section = styled.section`
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    padding-top: 90px;
    padding-bottom: 40px;
    text-align: left;
    position: relative;
`;

const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 10%;
    width:100%;
    max-width: 400px;
    aspect-ratio: 8.5/10;
    border-radius: 30px;
    box-shadow: 0 0 7px rgba(0,0,0,.9);
    margin-bottom: 1.8rem;
`;

const Button = styled.a`
    padding: .7rem 1rem;
    margin: .5rem .9rem;
    letter-spacing: 1px;
    background: ${props => props.theme.colors.bgLight};
    box-shadow: ${props => props.theme.boxShadows.primary};
    color: ${props => props.theme.colors.primary};
    border-radius: .5rem;
    transition: all .3s;
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 500;

    &:hover {   
        background: ${props => props.theme.colors.bgDark};
        box-shadow: ${props => `${props.theme.boxShadows.secondary},${props.theme.boxShadows.primary} `};
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 12px;
        margin: .5rem;
    }

`;

const NextSection = styled.a`
        position: absolute;
        z-index: 3;
        bottom: 20px;
        left: 50%;
        margin-left: -16px;
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 20px;
        text-align: center;
        color: #fff;
`;

const fadeInDown = keyframes`
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 10px;
    opacity: 1;
  }
`;

const Animated = styled(FaChevronDown)`
    position: relative;
    animation: ${fadeInDown} 1.5s infinite;
`;
