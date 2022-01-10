import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/Container.styled'
import { Row, Col } from '../../styles/Row.styled'
import Typography from '../../styles/Typography.styled'

export const About = () => {
    return (
        <Section id="about">
            <Container>
                <Typography as="h1" align="center" heading >Sobre Mim</Typography>
                <Row gap="1rem" marginB="1rem">
                    <Col size="60%" gap="1rem">
                        <p>
                            Sou um desenvolvedor full stack, com experiência em desenvolvimento de sistemas web.
                            Atualmente realizando uma transição de carreira para a área de tecnologia, onde o ponto de partida foi o curso Certified Tech Developer na Digital House, o qual teve inicio no dia 24 de maio.
                        </p>
                        <p>
                            Ao longo desses 6 meses já foram tratados muitos ponto importante para minha formação, como Métodos Ágeis, Design Thinking, Trabalho Colaborativo, Infraestrutura, Teste de Software e também tive a oportunidade de trabalhar com as seguinte linguagem de programação: JavaScript, HTML, CSS, MySQL, Java, React.
                        </p>
                        <p>
                            Meu foco é desenvolver soluções que melhorem a vida das pessoas ao meu redor.
                        </p>
                    </Col>
                    <Col size="35%">

                        <Dados>
                            <li>
                                <Typography as="span" weight="600" me="1rem">Nome:</Typography>Rodrigo Sousa Brasil
                            </li>
                            <li>
                                <Typography as="span" weight="600" me="1rem">Idade:</Typography>28
                            </li>
                            <li>
                                <Typography as="span" weight="600" me="1rem">Email:</Typography><a href="mailto:maic_rodrigo@outlook.com">maic_rodrigo@outlook.com</a>
                            </li>
                            <li>
                                <Typography as="span" weight="600" me="1rem">Telefone:</Typography><a href="tel:+5561983816775">(61) 98381-6775</a>
                            </li>
                            <li>
                                <Typography as="span" weight="600" me="1rem">De:</Typography>Brasília, Distrito Federal
                            </li>
                        </Dados>

                    </Col>
                </Row>
                <Typography as="h3" align="center" heading >Habilidades E Conhecimentos</Typography>
                <Row>
                    <Col size="50%">
                        <ul class="list-style-2 list-style-light text-light">
                            <li><span class="fw-600 me-2">Linguagens:</span>JavaScript, HTML, CSS, MySQL, Java, React</li>
                            <li><span class="fw-600 me-2">Frameworks:</span>React, Node.js, Express, Bootstrap, Materialize, Styled Components</li>
                            <li><span class="fw-600 me-2">Bibliotecas:</span>React Hooks, Axios, React Router, Redux, Styled Components, React-Spring</li>
                            <li><span class="fw-600 me-2">Ferramentas:</span>Git, Github, Visual Studio Code, Netlify, Heroku</li>
                        </ul>
                    </Col>
                    <Col size="50%">
                        <ul class="list-style-2 list-style-light text-light">
                            <li><span>Sistemas:</span>Windows, Linux, MacOS</li>
                            <li><span>Bancos de Dados:</span>MySQL, MongoDB</li>
                            <li><span>Design:</span>Photoshop, Illustrator, InDesign</li>
                            <li><span>Outros:</span>Git, Github, Visual Studio Code, Netlify, Heroku</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

const Section = styled(Row)`
                padding-block: 3rem;
                text-align: left;
                background-color:${props => props.theme.colors.bodyLight};
                position: relative;
                color: ${props => props.theme.colors.textLight};
`;

const Dados = styled.ul`


    li {
        border-bottom: 1px solid rgba(250, 250, 250, 0.12);
        padding-block: .75rem;

        &:last-child {
            border-bottom: none;
        }
    }

@media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: 1.5rem
    }
`;