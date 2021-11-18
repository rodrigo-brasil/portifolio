import React from 'react'
import { FaCss3, FaHtml5, FaGit, FaJava, FaReact, FaJs } from 'react-icons/fa'

export const Sobre = () => {
    return (
        <section className="flex container">
            <h1>Sobre</h1>
            <div>
                <p>
                    Meu nome é Rodrigo Brasil, sou engenheiro eletricista, apaixonado por tecnologia e me sinto muito desafiado em resolver os problemas lógicos dos algoritmos, é recompensador ver meus programas rodando.
                </p>
                <p>
                    Com essa motivação em mente resolvi fazer uma transição de carreira e me tornar um desenvolvedor. Atualmente estudo programação full stack no curso Certified Tech Developer.
                </p>
            </div>
            <h2>Conhecimentos</h2>

            <div className="flex">
                <div className="collum">
                    <h3>Frontend</h3>
                    <ul>
                        <li>
                            <FaJs size={20} color="#F7DF1E" />
                        </li>
                        <li>
                            <FaReact size={20} color="#61DBFB" />
                        </li>
                        <li>
                            <FaHtml5 size={20} color="#E34F26" />
                        </li>
                    </ul>
                </div>
                <div className="collum">
                    <h3>Backend</h3>
                    <ul>
                        <li>
                            <FaCss3 size={20} color="#2572EB" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
