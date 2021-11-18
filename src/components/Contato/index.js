import React from 'react'
import Swal from 'sweetalert2'
import './style.scss'

export const Contato = () => {

    const validarFormulario = ({ nome, email, mensagem }) => {
        const erros = []

        if (!nome || nome.length < 3) erros.push('Nome inválido')
        if (!email || email.indexOf('@') === -1) erros.push('Email inválido')
        if (!mensagem || mensagem.length < 10) erros.push('Mensagem inválida')

        return erros
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const data = {
            nome: form.get('nome'),
            email: form.get('email'),
            mensagem: form.get('mensagem')
        }

        const erros = validarFormulario(data)
        if (erros.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Preencha os campos corretamente',
                html: `<ul>
                ${erros.map((erro, index) => `<li className="erroLi" key="${index}">${erro}</li>`).join('')}
                </ul>`             
            })
        } else {

            Swal.fire({
                title: 'Mensagem enviada com sucesso!',
                text: 'Em breve entraremos em contato com você!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#51b77d'
            })
        }
    }

    return (

        <div className="container text-zone" id="contato">

            <h2 className="title">Entre em contato</h2>

            <p className="title-description">Preencha o formulário abaixo para esclarer suas dúvidas e dar início ao seu projeto!</p>

            <div className="contact-form">
                <form id="contact" autocomplete="off" onSubmit={handleSubmit}>

                    <div className="form-group half">
                        <input className="input__field" placeholder="Name" type="text" name="name" />
                        <label className="input__label"></label>
                    </div>

                    <div className="form-group half">
                        <input className="input__field" placeholder="Email" type="email" name="email" />
                        <label className="input__label"></label>
                    </div>

                    <div className="form-group">
                        <input className="input__field" placeholder="Subject" type="text" name="subject" />
                        <label className="input__label"></label>
                    </div>

                    <div className="form-group">
                        <textarea className="input__field" placeholder="Message" name="msg"></textarea>
                        <label className="input__label"></label>
                    </div>

                    <button type="submit">Enviar</button>

                </form>

            </div>

        </div>

    )
}
