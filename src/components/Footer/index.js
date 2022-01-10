import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { Container } from "../../styles/Container.styled";
import { Row, Col } from "../../styles/Row.styled";


export const Footer = () => {
    return (
        <StyledFooter id="footer">
            <StyledContainer>
                    <Col align="center" gap="1rem" marginB="1rem">
                        <Row justify="center" gap="1rem">
                        <SocialLinks rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rodrigo-brasil-272312178/"><FaLinkedin size="1.5em" />Linkedin</SocialLinks>
                        <SocialLinks rel="noreferrer" target="_blank" href="https://github.com/rodrigo-brasil"><FaGithub size="1.5em" />GitHub</SocialLinks>
                        <SocialLinks rel="noreferrer" target="_blank" href="mailto:maic_rodrigo@gmail.com"><MdEmail size="1.5em" />maic_rodrigo@gmail.com</SocialLinks>
                        </Row>
                    </Col>
                
                <StyledRow justify="center">
                    <p>
                        &copy; {new Date().getFullYear()} Rodrigo Brasil. Todos os direitos reservados.
                    </p>
                </StyledRow>
            </StyledContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.text};
`;

const StyledContainer = styled(Container)`
    padding-block: 1.5rem;
`;

const StyledRow = styled(Row)`
     border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding-top: 1rem;	
`;

const SocialLinks = styled.a`
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`;
