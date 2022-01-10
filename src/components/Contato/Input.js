import styled from "styled-components";
import React, { forwardRef } from "react";

export const Input = forwardRef(
    ({ type, id, name, ...rest }, ref) => {
        return (
            <StyledInput
                name={id}
                id={name}
                type={type}
                ref={ref}
                {...rest}
            />
        );
    }
    );


export const StyledInput = styled.input`
        width: 100%;
        background: ${props => props.theme.colors.body};
        border: 2px solid ${props => props.theme.colors.body};
        height: 3.125rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        border-radius: 0.25rem;
        border-top-left-radius: 0;
        padding: 0 20px;

        &:focus {
            border-color: ${props => props.theme.colors.primary};
        }


        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            -webkit-text-fill-color: ${props => props.theme.colors.textLight};
            -webkit-box-shadow: 0 0 0 30px ${props => props.theme.colors.bodyLight} inset;
            transition: background-color 5000s ease-in-out 0s;
        }
`;