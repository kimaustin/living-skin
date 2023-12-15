import React from 'react';
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const Reset = ({ showReset, closePortals }) => {
    return (
        <Container showReset={showReset} onClick={closePortals} to="" />
    );
};

export default Reset;

const Container = styled(LinkRouter)`
cursor: default;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    /* background-color: blue; */
    /* border: 1px solid green; */

    z-index: ${props => ((props.showReset) ? 2 : -1)};
    opacity: ${props => ((props.showReset) ? 1 : 0)};
    display: ${props => ((props.showReset) ? "flex" : "none")};
    user-select: ${props => ((props.showReset) ? "auto" : "none")};
`
