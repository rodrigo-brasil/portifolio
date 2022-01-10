/* eslint-disable import/no-anonymous-default-export */
import login from './assets/formlogin.png'
import notes from './assets/notes.png'
import campo from './assets/campo_minado.png'
import galeria from './assets/galeria.png'
import lugares from './assets/lugares.png'


export default [
    {
        id: 1,
        title: 'Meus lugares',
        description: 'Aplicação web para registrar lugares que já visitou ou que gostaria de ir',
        image: lugares,
        url: 'https://rodrigo-brasil.github.io/Frontend2-CheckPoint1/',
        repositorio: 'https://github.com/rodrigo-brasil/Frontend2-CheckPoint1'
    },
    {
        id: 2,
        title: 'Formulário de login',
        description: 'Uma tela de entrar e cadastro com animações feita em css',
        image: login,
        url: 'https://rodrigo-brasil.github.io/login_singUp/',
        repositorio: 'https://github.com/rodrigo-brasil/login_singUp'
    },
    {
        id: 3,
        title: 'Galeria de imagens',
        description: 'Galeria de imagens reponsivel utilizando animações css e algumas funções javascript',
        image: galeria,
        url: 'https://rodrigo-brasil.github.io/Responsive-Image-Gallery/',
        repositorio: 'https://github.com/rodrigo-brasil/Responsive-Image-Gallery',
    },
    {
        id: 4,
        title: 'Campo minado',
        description: 'Jogo campo minado com vanilla js, css, html',
        image: campo,
        url: 'https://rodrigo-brasil.github.io/campo-minado/',
        repositorio: 'https://github.com/rodrigo-brasil/campo-minado'
    },
    {
        id: 5,
        title: 'Todo list com api',
        description: 'Criado uma aplicação para salvar lembretes, sendo possivel consumir a api (jsonplaceholder) que carrega uma lista de to-do',
        image: notes,
        url: 'https://rodrigo-brasil.github.io/Frontend2-CheckPoint2-Final/',
        repositorio: 'https://github.com/rodrigo-brasil/Frontend2-CheckPoint2-Final'
    },
]
