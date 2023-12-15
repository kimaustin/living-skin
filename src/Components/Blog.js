import React, { useState } from 'react';
// import { motion } from "framer-motion";
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const Blog = () => {

    const location = useLocation();
    let currPage = location.pathname.split("/").pop();

    return (
        <Container>
            Blog
        </Container>
    );
};


export default Blog;


// STYLES ------------------------

const Container = styled.div`

    @media screen and (max-width: 767px) {
    }
`

const Body1 = styled.p`
    font-family: "Times New Roman";
`
