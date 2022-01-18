import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { FiChevronRight, FiX } from "react-icons/fi";

export const PortfolioModal = ({
    show,
    setShow,
    image,
    title,
    texts,
    url,
    repositorio,
}) => {
    return (
        <StyledModal
            show={show}
            onHide={() => setShow(false)}
            centered={true}
        >
            <styledHeader>
                <Button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShow(false)}
                >
                    <span aria-hidden="true">
                        <FiX />
                    </span>
                </Button>
            </styledHeader>
            <Modal.Body>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div>
                            {image && (
                                <div className="image">
                                    <img
                                        src={image}
                                        alt={image?.alt || title}
                                        className="w-100"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="text-content">
                            <h3>
                                {title}
                            </h3>
                            <p>{texts}</p>

                            <div className="button-group mt-4">
                                <StyledA rel="noreferrer" target="_blank" href={url}>Ver Página<FiChevronRight /></StyledA>
                                <StyledA rel="noreferrer" target="_blank" href={repositorio}>Git<FiChevronRight /></StyledA>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </StyledModal>
    );
};

const StyledModal = styled(Modal)`
    background: #212428;
    padding: 60px 15px!important;
    z-index: 99999999;

    .modal-dialog {
        max-width: 1230px;
        width: 100%;
    }



    .modal-dialog .modal-content {
        background: ${props => props.theme.colors.bgLight};
        border: none;
        border-radius: 10px;
        box-shadow: ${props => props.theme.boxShadows.primary};	
        overflow: hidden;
        padding: 45px;
        z-index: 1;

        .image{
            border-radius: 10px;
            overflow: hidden;

        }
        
        .modal-header {
            border: none;
            padding: 0;
        }

        .modal-body .text-content {
            padding-left: 2rem;

            h3{
                color: ${props => props.theme.colors.textLight};
                font-size: 34px;
                font-weight: 700;
                line-height: 1.3;
                margin-bottom: 20px;

                @media only screen and (max-width: 575px) {
                    font-size: 28px;
                }
            }
        
            p {
            color:${props => props.theme.colors.darkGray};
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
            margin-bottom: 0;
            width: 93%;
            }

            @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
                margin-top: 30px;
                padding: 0;
            }
        }
    }


`;

const styledHeader = styled(Modal.Header)`
 
    clip: rect(0,0,0,0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;


const Button = styled.button`
    display: inline-block;
    margin: -1rem -1rem -1rem auto;
    padding: 1rem;
    position: absolute;
    right: 44px;
    top: 18px;
    width: 0;
    color: ${props => props.theme.colors.text};
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    opacity: .6;
    text-shadow: 0 1px 0 #fff;
    -webkit-appearance: none;
    background-color: transparent;
    transition: all .3s;

    &:hover {
        opacity: 1;
        color: ${props => props.theme.colors.primary};
    }

    span {
        position: relative;
        z-index: 1;

        &:after {
            background: ${props => props.theme.colors.bgLight};
            border-radius: 50%;
            box-shadow: ${props => props.theme.boxShadows.primary};
            content: "";
            height: 45px;
            left: 50%;
            opacity: 1;
            position: absolute;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 45px;
            z-index: -1;
        }

    }
`;

const StyledA = styled.a`
    color: ${props => props.theme.colors.primary};
    display: inline-block;
    list-style: none;
    padding: 15px 35px;
    text-decoration: none;
    width: auto;
    background: linear-gradient(145deg,#1e2024,#23272b);
    border-radius: 6px;
    box-shadow: ${props => props.theme.boxShadows.primary};
    font-size: 14px;
    font-weight: 500;
    position: relative;
    margin: 15px;
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 700;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    &:hover:before {
        opacity: 1;
    }

    &:before {
        background: linear-gradient(to right bottom,#212428,#16181c);
        border-radius: 6px;
        content: "";
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: all .3s;
        width: 100%;
        z-index: -1;
    }
`;