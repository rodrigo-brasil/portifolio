import Card from '../Card';
import projetos from '../../data';
import styled from 'styled-components';
import { Typography } from '../../styles/Typography.styled';
import { Container } from '../../styles/Container.styled';
import { Row } from '../../styles/Row.styled';
export const Galeria = () => {



    return (

        <Section id="galeria">
            <Container>
                <Typography as="h1" align="center" heading>Portifólio</Typography>
                <Typography align="center" mb="1.5rem">projetos desenvolvidos durante meus estudos</Typography>

                <Row >
                    {
                        projetos.map(projeto => <Card key={projeto.id} {...projeto} />)
                    }
                </Row>
            </Container>
        </Section>
    )
}

const Section = styled(Row)`
    background: ${props => props.theme.colors.bg};
    padding-block: 3rem;
    color: ${props => props.theme.colors.textLight};
`;