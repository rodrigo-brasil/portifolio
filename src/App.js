import './styles/global.scss'
import myImage from './assets/img2.jpg'

import Header from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Galeria } from './components/Galeria';
import { Contato } from './components/Contato';


function App() {
  return (
    < >
      <Header />
      <Banner urlImage={myImage}>
        <h1>Bem vindo!</h1>
        <p>Sou um desenvolvedor full stack. Sempre em busca de soluções inovadoras.</p>
      </Banner>
      <Galeria />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
