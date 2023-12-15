import React, { useState } from 'react';
// import { motion } from "framer-motion";
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const Navigation = () => {

    const location = useLocation();
    let currPage = location.pathname.split("/").pop();

    return (
        <Container>
            <NavLink currpage={currPage} thispage={''} to="/">Living Skin</NavLink>
            <NavLink currpage={currPage} thispage={'about'} to="/about">About</NavLink>
            <NavLink currpage={currPage} thispage={'calendar'} to="/calendar">Calendar</NavLink>
            {/* <NavLink currpage={currPage} thispage={'about'} to="/blog">Blog</NavLink> */}
            <RegLink style={{textAlign: "right"}}>
                <a href="mailto:admin@livingskin.space">Contact</a>  
            </RegLink>
        </Container>
    );
};


export default Navigation;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 30px;
    width: calc(100vw - 12px);
    padding: 6px;
    display: grid;
    grid-template-columns: 16% 16% 16% 16% 1fr;

    /* border: 1px solid black; */

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

export const NavLink = styled(LinkRouter)`
    padding-right: 14px;
    font-family: "Times New Roman";
    font-family: "Gill Sans";
    width: fit-content;

    text-decoration: none;
    /* color: black; */
    color: ${({ currPage, thispage }) => ((currPage == thispage) ? 'black' : 'blue')};

    &:hover {
        opacity: 0.85;
        text-decoration: underline;
    }

    @media screen and (max-height: 767px) {
    }
`

export const RegLink = styled.a`
    a {
        font-family: "Times New Roman";
        font-family: "Gill Sans";

        text-decoration: none;

        &:hover {
            opacity: 0.85;
            text-decoration: underline;
        }
    }
`
