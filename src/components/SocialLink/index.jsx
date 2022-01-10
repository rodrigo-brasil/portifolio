import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SocialLink = ({ path, children, size }) => {
    return (
        <Social href={path} target="_blank" rel="noopener noreferrer" size = {size}>
            {children}
        </Social>
    );
};

SocialLink.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default SocialLink;

const Social = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: ${props => (props.size ? props.size : '53px')};
    line-height: ${props => (props.size ? props.size : '53px')};
    width: ${props => (props.size ? props.size : '53px')};
    border-radius: 6px;
    text-align: center;
    letter-spacing: 2px;
    color: ${props => props.theme.colors.gray};
    align-self: center;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`;

