import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/Container.styled";
import { Row, Col } from "../../styles/Row.styled";
import Typography from "../../styles/Typography.styled";

export const About = () => {
  const calculateAge = () => {
    const birthDate = new Date(1994, 0, 6); // 6 de janeiro de 1994
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  return (
    <Section id="about">
      <Container>
        <Typography as="h1" align="center" heading>
          Sobre Mim
        </Typography>
        <Row gap="1rem" marginB="1rem">
          <Col size="60%" gap="1rem">
            <p>
              Meu nome é Rodrigo e tenho formação em engenharia elétrica.
              Durante a pandemia de Covid-19, decidi mudar de carreira e me
              dedicar à programação. Realizei uma transição de carreira para a
              área de tecnologia devido ao meu gosto pela programação e a
              oportunidade de realizar o curso Certified Tech Developer com
              bolsa oferecida pelo Mercado Livre e Globant.
            </p>
            <p>
              Em maio de 2021, iniciei o curso Certified Tech Developer na
              Digital House, onde aprendi e coloquei em prática muitos pontos
              importantes para minha formação, como Métodos Ágeis, Design
              Thinking, Trabalho Colaborativo, Infraestrutura, Teste de Software
              e também tive a oportunidade de trabalhar com as seguintes
              ferramentas: JavaScript, HTML, CSS, MySQL, MongoDB, Java, React e
              várias bibliotecas.
            </p>
            <p>
              Concluí o curso Certified Tech Developer - Back End Specialist e o
              curso Professional Developer - Full Stack, ambos pela Digital
              House.
            </p>
            <p>
              Você pode ver meus certificados nos links abaixo:
              <ul>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1hv73gUvAyGXGgWi-AT43kev1XowQnoNC/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certified Tech Developer - Full Stack
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1T_Esw1NYJBELu8LNB4Z5i0EbPM34UeBW/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certified Tech Developer - Back End Specialist
                  </a>
                </li>
              </ul>
            </p>
            <p>
              Atualmente, trabalho na{" "}
              <a
                href="https://stakd.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stakd
              </a>{" "}
              desde abril de 2022, onde sou responsável pelo desenvolvimento do
              sistema utilizando React/Next, Nodejs/Express e MongoDB. Também
              realizo integrações com outras plataformas como Pipedrive,Raiser's
              Edge, Salesforce e Stripe, além de ser responsável pelo
              desenvolvimento e manutenção contínua do site, implementação de
              novos recursos e testes.
            </p>
            <p>
              Meu objetivo é desenvolver um código limpo, organizado e fácil de
              entender, que atenda às necessidades e prioridades do grupo com o
              qual estarei trabalhando.
            </p>
          </Col>
          <Col size="35%">
            <Dados>
              <li>
                <Typography as="span" weight="600" me="1rem">
                  Nome:
                </Typography>
                Rodrigo Sousa Brasil
              </li>
              <li>
                <Typography as="span" weight="600" me="1rem">
                  Idade:
                </Typography>
                {calculateAge()}
              </li>
              <li>
                <Typography as="span" weight="600" me="1rem">
                  Email:
                </Typography>
                <a href="mailto:maic_rodrigo@outlook.com">
                  maic_rodrigo@outlook.com
                </a>
              </li>
              <li>
                <Typography as="span" weight="600" me="1rem">
                  Telefone:
                </Typography>
                <a href="tel:+5561983816775">(61) 98381-6775</a>
              </li>
              <li>
                <Typography as="span" weight="600" me="1rem">
                  De:
                </Typography>
                Brasília, Distrito Federal
              </li>
            </Dados>
          </Col>
        </Row>
        <Typography as="h3" align="center" heading>
          Habilidades E Conhecimentos
        </Typography>
        <Row>
          <Col>
            <Dados>
              <li>
                <Typography as="span" weight="600">
                  Linguagens :{" "}
                </Typography>
                JavaScript, HTML, CSS, Java, C#
              </li>
              <li>
                <Typography as="span" weight="600">
                  Frameworks e Bibliotecas :{" "}
                </Typography>
                React, Node.js, Express, Spring Boot, React Hooks, Axios, React
                Router, Bootstrap, Styled Components
              </li>
              <li>
                <Typography as="span" weight="600">
                  Ferramentas :{" "}
                </Typography>
                Git, Github, Visual Studio Code, Vercel, Netlify, Heroku, AWS,
                Docker
              </li>
              <li>
                <Typography as="span" weight="600">
                  Bancos de Dados :{" "}
                </Typography>
                MySQL, MongoDB, PostgreSQL
              </li>
            </Dados>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled(Row)`
  padding-block: 3rem;
  text-align: left;
  background-color: ${(props) => props.theme.colors.bodyLight};
  position: relative;
  color: ${(props) => props.theme.colors.textLight};
`;

const Dados = styled.ul`
  li {
    border-bottom: 1px solid rgba(250, 250, 250, 0.12);
    padding-block: 0.75rem;

    &:last-child {
      border-bottom: none;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-left: 1.5rem;
  }
`;
