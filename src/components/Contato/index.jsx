import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import styled, { css } from 'styled-components'

import { Row } from '../../styles/Row.styled'
import Container from '../../styles/Container.styled'
import Typography from '../../styles/Typography.styled'
import { Input } from './Input'
import { Label } from './Label'
import { TextArea } from './TextArea'

import { FaArrowRight } from "react-icons/fa";

export const Contato = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });



    return (

        <Section id="contato">
            <Container>

                <Typography as="h1" align="center" heading>Entre em contato</Typography>

                <Typography align="center" >Preencha o formulário abaixo para esclarer suas dúvidas e dar início ao seu projeto!</Typography>

                <FormWrapper>
                    <form id="contact" autoComplete="off" onSubmit={handleSubmit((data,e) => {
                          emailjs
                            .send(
                              import.meta.env.VITE_APP_SERVICE,
                              import.meta.env.VITE_APP_TEMPLATE_ID,
                              data,
                              import.meta.env.VITE_APP_USER_ID
                            )
                            .then(
                              (result) => {
                                Swal.fire({
                                  icon: "success",
                                  title: "Mensagem Enviada!",
                                  text: "Obrigado pelo contato, em breve responderei no seu e-mail!",
                                });
                                e.target.reset();
                              },
                              (error) => {
                                Swal.fire({
                                  icon: "error",
                                  title: "Erro ao enviar mensagem!",
                                  text: "Tente outro meio disponivel na sessão sobre mim.",
                                  footer: error.text,
                                });
                              }
                            );
                    })}>

                        <Row justify="space-between">
                            <FormGroup half="true">
                                <Label htmlFor="name">Nome</Label>
                                <Input
                                    name="name"
                                    id="name"
                                    type="text"
                                    {...register("name", {
                                        required: "Campo vazio",
                                    })}
                                />
                                {errors.name && (
                                    <ErrorText>{errors.name?.message}</ErrorText>
                                )}
                            </FormGroup><FormGroup half="true">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Campo vazio",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Email inválido",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <ErrorText>{errors.email?.message}</ErrorText>
                                )}
                            </FormGroup>
                        </Row>

                        <FormGroup>
                            <Label htmlFor="subject">Assunto</Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                {...register("subject", {
                                    required: "Campo vazio",
                                })}
                            />
                            {errors.subject && (
                                <ErrorText>{errors.subject?.message}</ErrorText>
                            )}
                        </FormGroup>

                        <FormGroup>
                            <TextArea
                                name="message"
                                id="message"
                                {...register("message", {
                                    required: "Campo vazio",
                                })}
                            ></TextArea>
                            <Label htmlFor="message">Mensagem</Label>
                            {errors.message && (
                                <ErrorText>{errors.message?.message}</ErrorText>
                            )}
                        </FormGroup>

                        <Submit type="submit">Enviar Mensagem <FaArrowRight size="1.5em" /></Submit>

                    </form>

                </FormWrapper>
            </Container>
        </Section>

    )
}

const Section = styled(Row)`
                padding-block: 3rem;
                text-align: left;
                background-color:${props => props.theme.colors.bodyLight};
                position: relative;
                color: ${props => props.theme.colors.textLight};
`;


const FormWrapper = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    max-width: 800px;
    margin-inline: auto;

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        padding-inline:0;
`;


const FormGroup = styled.div`
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    display: inline-flex;
    position: relative;
    flex-wrap: wrap;
    margin-top:1.8rem;

    &:focus-within > label {
        border:2px solid ${props => props.theme.colors.primary};
        border-bottom: 0;
    }
    

    ${props => props.half && css`
        max-width: 49%;
    `}

`;

const ErrorText = styled.span`
    color: ${props => props.theme.colors.error};
    font-size: 0.8rem;
    margin-top: 0.5rem;
    display: inline-block;
`;

const Submit = styled.button`
            background: ${props => props.theme.colors.body};
            color: ${props => props.theme.colors.primary};
            border-radius: 1rem;
            letter-spacing: 2px;
            font-weight: bold;
            font-family: ${props => props.theme.fonts.secondary};
            text-transform: uppercase;
            border: 0;
            padding: 1rem 2rem;
            transition: all 0.3s ease-in-out;
            display: inline-flex;
            align-items: center;

            &:hover {
                background-image: linear-gradient(to right, ${props => props.theme.colors.body}, ${props => props.theme.colors.bodyLight});
                box-shadow:  ${props => props.theme.boxShadows.primary};
`;

