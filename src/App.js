import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/Global'

import myImage from './assets/img2.jpg'

import Header from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Galeria } from './components/Galeria';
import { Contato } from './components/Contato';
import { Typography } from './styles/Typography.styled';
import { About } from './components/About';

const theme = {
  colors: {
    body: '#212428',
    bodyLight: '#343a40',
    header: '#212428de',
    bgLight: 'linear-gradient(145deg,#1e2024,#23272b)',
    bgDark: '#212428',
    primary: '#ff014f',
    secondary: '#f0f0f5',
    tertiary: '#fff',
    border: '#c8ced3',
    borderDark: '#121415',
    text: '#fff',
    textLight: '#dee3e4',
    gray: '#f6f6f6',
    error: '#ff0000',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  boxShadows: {
    primary: '10px 10px 19px #1c1e22,-10px -10px 19px #262a2e',
    secondary: 'inset 21px 21px 19px #181a1d,inset -21px -21px 19px #202225',
    top: 'inset 0 21px 21px #202225'
  },
  fonts: {
    primary: '"Poppins", sans-serif',
    secondary: '"Montserrat",sans-serif',
  },

}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Header />
      <Banner urlImage={myImage}>
        <Typography as="h1" heading >Olá, Me chamo
          <Typography as="span" Color={theme.colors.primary}> Rodrigo</Typography></Typography>
        <Typography as="p" Color={theme.colors.textLight} style={{ 'paddingRight': '16%' }}>Sou um desenvolvedor full stack. Sempre em busca de soluções inovadoras que trazem melhora para a vida das pessoas ao meu redor.</Typography>
      </Banner>
      <About />
      <Galeria />
      <Contato />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
