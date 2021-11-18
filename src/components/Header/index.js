import { useEffect, useState } from "react";
import { FaTimes, FaBars, FaGithub, FaLinkedinIn } from "react-icons/fa";


import './style.scss'


export default function Header() {

    const [toggle, setToggle] = useState(false);
    const [showHeader, setShowHeader] = useState(true);

    const menuToggle = () => setToggle(prev => !prev);
    const menuClose = () => setToggle(false);
    let lastHeight = 0;
    const controlNavBar = () => {

        const currentScroll = window.scrollY;

        if (currentScroll > lastHeight && currentScroll > 200) {
            console.log('down');
            setShowHeader(false);
        } else {
            console.log('up');
            setShowHeader(true);
        }

        lastHeight = currentScroll;
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar);
        return () => window.removeEventListener('scroll', controlNavBar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <header id="header" className={(!showHeader && !toggle) && 'hidden'}>
                <nav className="navbar container">
                    <button className="navbar-toggler navbar-item" onClick={menuToggle}>
                        {toggle ? <FaTimes /> : <FaBars />}
                    </button>

                    <a href="#header" className="logo navbar-item">
                        <h3>Rodrigo Brasil</h3>
                        <p>Full Stack Developer</p>
                    </a>

                    <div className={`navbar-item  ${toggle ? "navbar-menu active" : "navbar-menu"}`}>
                        <a href="#banner" onClick={menuClose}>Sobre</a>
                        <a href="#galeria" onClick={menuClose}>Projetos</a>
                        <a href="#contato" onClick={menuClose}>Contato</a>
                    </div>

                    <div className="social-bar navbar-item">
                        <a href="#">
                            <FaGithub />
                        </a>
                        <a href="#">
                            <FaLinkedinIn />
                        </a>
                    </div>

                </nav>
        </header>
    )
}
