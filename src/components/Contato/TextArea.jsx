import React, { forwardRef } from "react";
import styled from "styled-components";

import {StyledInput} from './Input'

export const TextArea = forwardRef(({ id, name, className, ...rest }, ref) => {
    return (
        <Textarea
            className={ className}
            name={name}
            id={id}
            ref={ref}
            rows="10"
            {...rest}
        ></Textarea>
    );
});

const Textarea = styled(StyledInput).attrs({as: 'textarea'})`
    padding: 20px;
    min-height: 150px;
    resize: vertical;
`;

export default TextArea;