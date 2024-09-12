import styled from "styled-components";

export const Label = ({ htmlFor, children }) => {
    return (
        <StyledLabel htmlFor={htmlFor}>
            {children}
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(calc(-100% + 2.4px));
    padding: 0.2rem 0.7rem;
    font-size: .9rem;
    background-color: ${props => props.theme.colors.body};
    border-top-left-radius: .5rem ;
    border-top-right-radius: .5rem ;
`;
