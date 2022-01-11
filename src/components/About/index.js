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
                            Meu nome é Rodrigo e tenho formação em engenharia elétrica. Atualmente, estou realizando uma transição de carreira para a área de tecnologia. Ao longo dos últimos dois anos venho estudando e aperfeiçoando tanto habilidades técnicas como habilidades comportamentais.
                        </p>
                        <p>
                            Em maio de 2021, iniciei o curso Certified Tech Developer na Digital House, aonde aprendi e coloquei em prática muitos pontos importante para minha formação como: Métodos Ágeis, Design Thinking, Trabalho Colaborativo, Infraestrutura, Teste de Software e também tive a oportunidade de trabalhar com as seguintes ferramentas: JavaScript, HTML, CSS, MySQL, MongoDB, Java, React e várias bibliotecas.
                        </p>

                        <p>
                            Meu objetivo é desenvolver um código limpo, organizado e fácil de entender, que atenda as necessidades e prioridades do grupo que estarei trabalhando.
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
                    <Col>
                        <Dados>
                            <li><Typography as="span" weight="600">Linguagens : </Typography>JavaScript, HTML, CSS, Java, C#</li>
                            <li><Typography as="span" weight="600">Frameworks e Bibliotecas : </Typography>React, Node.js, Express, Spring Boot, React Hooks, Axios, React Router, Bootstrap, Styled Components</li>
                            <li><Typography as="span" weight="600">Ferramentas : </Typography>Git, Github, Visual Studio Code, Vercel, Netlify, Heroku, AWS, Docker</li>
                            <li><Typography as="span" weight="600">Bancos de Dados : </Typography>MySQL, MongoDB, PostgreSQL</li>
                        </Dados>
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
