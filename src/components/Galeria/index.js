import './style.scss'
import Card from '../Card';
import projetos from '../../data';

export const Galeria = () => {



    return (

        <section className="galeria" id="galeria">
            <div className="title">
                <h2>Portifólio</h2>
                <h6>projetos desenvolvidos durante meus estudos</h6>
            </div>
            <div className="galeria__container">
            {
                projetos.map(projeto => <Card key={projeto.id} {...projeto} />)
            }
            </div>
        </section>
    )
}
