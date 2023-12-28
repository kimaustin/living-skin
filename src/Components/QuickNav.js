import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const QuickNav = ({ closePortals, aboutToggle, showAbout, manifestoToggle, showManifesto, spaceToggle, showSpace, eventsToggle, showEvents, contactToggle, showContact, archiveToggle, showArchive }) => {

    return (
        <Container showAbout={showAbout}>
                <Nav y={"3%"} onClick={aboutToggle} show={showAbout} to="about">About Us</Nav>
                <Nav y={"7%"} onClick={spaceToggle} show={showSpace} to="space">Our Space</Nav>
                <Nav y={"11%"} onClick={eventsToggle} show={showEvents} to="events">Calendar</Nav>
                <Nav y={"15%"} onClick={archiveToggle} show={showArchive} to="archive">Online Archive</Nav>
        </Container>
    );
};


export default QuickNav;


// STYLES ------------------------

const Container = styled.div`
    /* position: fixed; */
    /* top: 15%; */
    /* left: 25%; */
    /* width: 40%; */
    /* height: 50%; */

    /* padding: 5%; */
    
    /* z-index: ${props => ((props.showAbout) ? 3 : -1)}; */
    /* display: ${props => ((props.showAbout) ? "block" : "none")}; */
    /* user-select: ${props => ((props.showAbout) ? "auto" : "none")}; */
    
    /* border: 1px solid black; */
    /* background-color: white; */

    @media screen and (max-width: 767px) {
        top: 3%;
        left: 4%;
        width: 80%; 
        padding: 6%;
        padding-top: 0;
        height: 78vh;
        overflow-y: scroll;

    }
`


const Nav = styled(LinkRouter)`
    padding: 6px 12px 7px 12px;
    border: 1px solid black;
    border-radius: 30px;
    /* background-color: white; */
    /* opacity: ${props => ((props.show) ? 1 : 0.8)}; */
    position: fixed;

    user-select: none;

    left: 3%;
    top: ${props => props.y};
    text-decoration: none;

    background-color: ${props => ((props.show) ? "yellow" : "white")};
    /* color: ${props => ((props.show) ? "white" : "black")}; */

    font-family: "Times New Roman";
    font-size: 18px;
    /* font-weight: ${props => ((props.show) ? 600 : 400 )}; */
    width: fit-content;

    &:hover {
        cursor: pointer;
        opacity: 1;
        background-color: yellow;
    }

    @media screen and (max-width: 767px) {
        left: calc(${props => props.x} - 8vw);
        top: ${props => props.y};
    }
`