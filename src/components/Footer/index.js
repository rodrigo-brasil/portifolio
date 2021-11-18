import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import './style.scss'

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="collum">
                        <h3>Sobre</h3>
                        <p>Projeto de frontend3 curso CTD - DigitalHouse</p>
                    </div>
                    <div className="collum">
                        <h3>Minhas redes</h3>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rodrigo-brasil-272312178/"><FaLinkedin size="1.5em" />Linkedin</a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/rodrigo-brasil"><FaGithub  size="1.5em" />GitHub</a>
                        <a rel="noreferrer" target="_blank" href="mailto:maic_rodrigo@gmail.com"><MdEmail  size="1.5em" />maic_rodrigo@gmail.com</a>
                    </div>
                    <div className="collum">
                        <h3>Localização</h3>
                        <div>
                            <p>Brasília - DF</p>
                            <p>Brasil</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p> Created by Rodrigo Brasil.</p>
                </div>
            </div>
        </footer>
    )
}
