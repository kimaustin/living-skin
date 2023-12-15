import React from 'react';
import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';

const Close = ({ showReset, closePortals }) => {
    return (
        <Container showClose={showReset} onClick={closePortals} to="" style={{textDecoration: "none"}}>
            Close
        </Container>
    );
};

export default Close;

const Container = styled(LinkRouter)`
    position: fixed;
    left: 42.5%;
    bottom: 2%;
    width: 15%;
    height: 30px;
    background-color: white;
    border: 1px solid black;
    color: black;

    user-select: none;
    /* padding: auto; */
    padding-top: 10px;
    justify-content: center;
    justify-text: center;
    font-family: "Times New Roman;"
    text-decoration: none;

    z-index: ${props => ((props.showClose) ? 999 : -1)};
    opacity: ${props => ((props.showClose) ? 1 : 0)};
    display: ${props => ((props.showClose) ? "flex" : "none")};
    filter: drop-shadow(18px 8px 3px #EB849D);

    &:hover {
        background-color: #F1F1F1;
    }

    @media screen and (max-width: 767px) {
        width: 30%;
        left: 35%;
        padding-top: 6px;
        height: 26px;
        filter: drop-shadow(10px 4px 5px #EB849D);

    }
`