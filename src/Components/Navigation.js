import React, { useState } from 'react';
// import { motion } from "framer-motion";
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const Navigation = ({ closePortals, currentToggle, showCurrent, aboutToggle, showAbout, manifestoToggle, showManifesto, spaceToggle, showSpace, eventsToggle, showEvents, contactToggle, showContact, archiveToggle, showArchive }) => {

    const location = useLocation();
    let currPage = location.pathname.split("/").pop();

    var r1 = Math.random() * (9 - 12) + 9;
    var r2 = Math.random() * (9 - 12) + 9;
    var r3 = Math.random() * (9 - 12) + 9;
    var r4 = Math.random() * (9 - 12) + 9;
    var r5 = Math.random() * (9 - 12) + 9;
    var r6 = Math.random() * (9 - 12) + 9;
    var rName = Math.random() * (14 - 18) + 14;
    var rand1 = r1.toString() + "s";
    var rand2 = r2.toString() + "s";
    var rand3 = r3.toString() + "s";
    var rand4 = r4.toString() + "s";
    var rand5 = r5.toString() + "s";
    var rand6 = r6.toString() + "s";
    var randName = rName.toString() + "s";
    
    return (
        <Container>
            {/* <NavLink currpage={currPage} thispage={''} to="/">Living Skin</NavLink>
            <NavLink currpage={currPage} thispage={'about'} to="/about">About</NavLink>
            <NavLink currpage={currPage} thispage={'calendar'} to="/calendar">Calendar</NavLink>
            <RegLink style={{textAlign: "right"}}>
                <a href="mailto:admin@livingskin.space">Contact</a>  
            </RegLink> */}
             {/* ABOUT */}
             <Connection x={"calc(44% + 90px)"} y={"calc(33% - 2px)"} width={"50px"} transform={"rotate(-44deg)"} />
                <Node x={"calc(44% + 124px)"} y={"calc(33% - 24px)"}/>
            <Portal onClick={aboutToggle} show={showAbout} x={"44%"} y={"33%"} lapse={rand1} to="/about">About Us</Portal>
    {/* CONTACT */}
                {/* <Connection x={"calc(39% + 4px)"} y={"calc(84% + 4px)"} width={"84px"} transform={"rotate(16deg)"} />
                <Node x={"calc(39%)"} y={"calc(84% - 14px)"}/>
            <Portal onClick={contactToggle} show={showContact} x={"43%"} y={"84%"} lapse={rand2} to="/contact">Contact</Portal> */}
    {/* MANIFESTO */}
                <Connection x={"calc(55% + 27px)"} y={"calc(62%)"} width={"3%"} transform={"rotate(80deg)"} style={{transformOrigin: "top left"}} />
                <Node x={"calc(55% + 20px)"} y={"calc(62%)"}/>
            <Portal onClick={manifestoToggle} show={showManifesto} x={"55%"} y={"66%"} lapse={rand3} to="/manifesto">Manifesto</Portal>
    {/* SPACE */}
                {/* <Connection x={"calc(63% - 36px)"} y={"calc(22% + 38px)"} width={"50px"} transform={"rotate(-30deg)"} />
                <Node x={"calc(63% - 36px)"} y={"calc(22% + 40px)"}/>
            <Portal onClick={spaceToggle} show={showSpace} x={"63%"} y={"22%"} lapse={rand4} to="/space">Our Space</Portal> */}
    {/* EVENTS */}
                <Connection x={"calc(38% + 65px)"} y={"calc(12% + 1.1vw)"} width={"calc(5.5%)"} transform={"rotate(22.6deg)"} style={{transformOrigin: "bottom left"}} />
                <Node x={"calc(38% + 65px + 5vw)"} y={"calc(12% + 3vw)"}/>
            <Portal onClick={eventsToggle} show={showEvents} x={"38%"} y={"12%"} lapse={rand5} to="/events">Events</Portal>
    {/* ARCHIVE */}
                {/* <Connection x={"calc(29% + 136px)"} y={"calc(58% + 1.1vw)"} width={"3.9%"} transform={"rotate(37deg)"} style={{transformOrigin: "bottom left"}} />
                <Node x={"calc(29% + 136px + 2.5vw)"} y={"calc(58% + 3vw)"}/>
            <Portal onClick={archiveToggle} show={showArchive} x={"29%"} y={"58%"} lapse={rand6} to="/archive">Online Archive</Portal> */}
    {/* ARCHIVE */}
                <Connection x={"calc(29% + 136px)"} y={"calc(58% + 1.1vw)"} width={"3.9%"} transform={"rotate(37deg)"} style={{transformOrigin: "bottom left"}} />
                    <Node x={"calc(29% + 136px + 2.5vw)"} y={"calc(58% + 3vw)"}/>
                <Portal onClick={currentToggle} show={showCurrent} x={"32%"} y={"57.5%"} lapse={rand6} to="/current">Current</Portal>
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


const Portal = styled(LinkRouter)`
    padding: 12px 16px 12px 16px;
    border: 1px solid black;
    border-radius: 30px;
    border-radius: 50%;
    /* background-color: white; */
    /* opacity: ${props => ((props.show) ? 1 : 0.8)}; */
    position: fixed;

    user-select: none;

    left: ${props => props.x};
    top: ${props => props.y};
    text-decoration: none;

    background-color: ${props => ((props.show) ? "yellow" : "white")};
    /* color: ${props => ((props.show) ? "white" : "black")}; */

    font-family: "Times New Roman";
    font-family: "Gill Sans";
    font-size: 20px;
    /* font-size: 3rem; */
    /* font-weight: ${props => ((props.show) ? 600 : 400 )}; */
    width: fit-content;

    animation-delay: 0s;
    -webkit-animation: fade 60s infinite;
    animation: fade 60s infinite;

    animation-name: stretch; 
    animation-duration: ${props => props.lapse}; 
    animation-timing-function: ease-out; 
    animation-direction: alternate; 
    animation-iteration-count: infinite; 
    animation-play-state: running; 

    @keyframes stretch { 
        0% { 
            transform: scale(.9); 
            /* background-color: green;  */
            /* border-radius: 70%;  */
            border-radius: 28% 72.4% 70% 30% / 30% 30% 70% 70% / 28% 72.4% 70% 30% / 30% 30% 70% 70%;
        } 

        50% { 
            transform: scale(1.07); 
            /* background-color: orange;  */
        } 

        100% { 
            transform: scale(1.02); 
            border-radius: 14% 86% 37% 63% / 53% 31% 69% 47%;
            /* background-color: red;  */
        } 
    } 

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

const Node = styled.div`
    height: 13px;
    width: 13px;
    background-color: #FFFF;
    /* background-color: #FFFF; */
    border-radius: 50%;
    border: 1px solid black;
    display: inline-block;
    position: fixed;
    user-select: none;

    left: ${props => props.x};
    top: ${props => props.y};

    @media screen and (max-width: 767px) {
        display: none;
    }
`

const Connection = styled.div`
    position: fixed;
    border-bottom: 1px solid black;
    user-select: none;

    /* ${props => props.angle}; */
    width: ${props => props.width};
    left: ${props => props.x};
    top: ${props => props.y};
    transform: ${props => props.transform};
    
    @media screen and (max-width: 767px) {
        display: none;
    }
`