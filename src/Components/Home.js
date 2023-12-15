import React, { useState } from 'react';
// import { motion } from "framer-motion";
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import { RegLink, NavLink } from './Navigation';
import Events from './Events';

const Home = ({ closePortals, aboutToggle, showAbout, manifestoToggle, showManifesto, spaceToggle, showSpace, eventsToggle, showEvents, contactToggle, showContact, archiveToggle, showArchive }) => {

    const location = useLocation();
    let currPage = location.pathname.split("/").pop();

    // function keyPress (e) {
    //     if(e.key === "Escape") {
    //         closePortals();
    //     }
    // }
    
    // let width = Math.sqrt((((34% + 140px) - (31% + 140px)) * ((34% + 140px) - (31% + 140px))) + ((61% - (56% + 35px)) * (61% - (56% + 35px))))
    return (
        <Container>
            {/* <img src={"imgs/outline.png"} style={{width: "1358px", height: "1454px", objectFit: "scale down", zIndex: 1}} /> */}
            {/* <img src={"imgs/bg1.png"} style={{position: "absolute", width: "80%", zIndex: "-1", marginLeft: "10%"}} /> */}
            <img src={"imgs/bg3.png"} style={{position: "fixed", zIndex: 0, display: "block",  opacity: 0.80 }} />
        {/* About */}
                <Connection x={"calc(45.5% + 90px)"} y={"calc(45% - 2px)"} width={"50px"} transform={"rotate(-44deg)"} />
                <Node x={"calc(45.5% + 124px)"} y={"calc(45% - 24px)"}/>
            <Portal onClick={aboutToggle} show={showAbout} x={"45.5%"} y={"45%"} to="about">Living Skin</Portal>
        {/* Contact */}
                <Connection x={"calc(38.9% + 4px)"} y={"calc(83% + 4px)"} width={"84px"} transform={"rotate(16deg)"} />
                <Node x={"calc(38.9%)"} y={"calc(83% - 14px)"}/>
            <Portal onClick={contactToggle} show={showContact} x={"43%"} y={"83%"} to="contact">Contact</Portal>
        {/* Manifesto */}
                <Connection x={"calc(54% + 27px)"} y={"calc(62%)"} width={"3%"} transform={"rotate(80deg)"} style={{transformOrigin: "top left"}} />
                <Node x={"calc(54% + 20px)"} y={"calc(62%)"}/>
            <Portal onClick={manifestoToggle} show={showManifesto} x={"54%"} y={"66%"} to="manifesto">Manifesto</Portal>
        {/* Space */}
                <Connection x={"calc(61% - 36px)"} y={"calc(27% + 38px)"} width={"50px"} transform={"rotate(-30deg)"} />
                <Node x={"calc(61% - 36px)"} y={"calc(27% + 40px)"}/>
            <Portal onClick={spaceToggle} show={showSpace} x={"61%"} y={"27%"} to="space">Our Space</Portal>
        {/* Events */}
                <Connection x={"calc(38% + 65px)"} y={"calc(15% + 1.1vw)"} width={"calc(5.5%)"} transform={"rotate(22.6deg)"} style={{transformOrigin: "bottom left"}} />
                <Node x={"calc(38% + 65px + 5vw)"} y={"calc(15% + 3vw)"}/>
            <Portal onClick={eventsToggle} show={showEvents} x={"38%"} y={"15%"} to="events">Events</Portal>
        {/* Archive */}
                <Connection x={"calc(30% + 136px)"} y={"calc(57% + 1.1vw)"} width={"3.9%"} transform={"rotate(37deg)"} style={{transformOrigin: "bottom left"}} />
                <Node x={"calc(30% + 136px + 2.5vw)"} y={"calc(57% + 3vw)"}/>
            <Portal onClick={archiveToggle} show={showArchive} x={"30%"} y={"57%"} to="archive">Online Archive</Portal>
        </Container>
    );
};


    // var off1 = getOffset(div1);
    // var off2 = getOffset(div2);
    // // bottom right
    // var x1 = off1.left + off1.width;
    // var y1 = off1.top + off1.height;
    // // top right
    // var x2 = off2.left + off2.width;
    // var y2 = off2.top;
    // // distance
    // var length = Math.sqrt((((34% + 140px) - (31% + 140px)) * ((34% + 140px) - (31% + 140px))) + ((61% - (56% + 35px)) * (61% - (56% + 35px))));
    // // center
    // var cx = ((x1 + x2) / 2) - (length / 2);
    // var cy = ((y1 + y2) / 2) - (thickness / 2);
    // // angle
    // var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);


export default Home;


// STYLES ------------------------

const Container = styled.div`
    z-index: 1;
    /* overflow-x: hidden; */
    /* overflow: hidden; */
    /* height: 100%; */
    /* width: 100%; */
    /* padding: 6px; */
    /* padding-bottom: 20vh; */
    /* padding-top: 4vh; */
    text-align: center;

    img {
        top: 5vh;
        margin-left: 22vw;
        height: 90vh;
        width: 56vw;
    }

    @media screen and (max-width: 767px) {
        img {
            top: 16vh;
            margin-left: 1vw;
            height: 68vh;
            width: 98vw;
        }
    }
`

const Portal = styled(LinkRouter)`
    padding: 6px 12px 7px 12px;
    border: 1px solid black;
    border-radius: 30px;
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

const Node = styled.div`
    height: 13px;
    width: 13px;
    background-color: #FFFF;
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

const Body1 = styled.a`
    font-family: "Times New Roman";
    font-size: 18px;
    line-height: 140%;
`

const Header = styled.div`
    font-family: "Times New Roman";
    font-family: "Gill Sans";
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 24px;
    padding-bottom: 6px;
    border-bottom: 1px solid gray;
    position: sticky;
`

export const Images = styled.div`
    display: flex;
    /* width: 99vw; */
    width: fit-content;
    height: 220px;
    overflow-x: scroll;
    overflow-y: hidden;

    margin-left: -6px;
    margin-bottom: 20px;
    /* border: 1px solid black; */

    img {
        /* display: inline-grid; */
        height: 100%;
        padding-right: 10px;
        /* object-fit: contain; */
    }
`

export const ThreeColumn = styled.div`
    /* border: 0.75px solid black; */
    /* padding: 8px; */
    display: grid;
    grid-template-columns: 16% 16% 1fr;
    margin-bottom: 10px;
`

export const Event = styled.div`
    /* border: 0.75px solid black; */
    /* padding: 8px; */
    display: grid;
    grid-template-columns: 16% 16% 70px 1fr;
    margin-bottom: 10px;
`

export const EventHeader = styled.div`
    /* font-family: "Times New Roman"; */
    font-family: cursive;
    font-family: "Times New Roman";
    font-family: "Gill Sans";
    font-size: 18px;
    font-weight: 500;
    /* text-transform: uppercase; */
    line-height: 150%;
`

export const Tag = styled.a`
    font-family: "Gill Sans";
    /* font-family: "Times New Roman"; */
    font-size: 13px;
    /* font-weight: 600; */
    /* text-transform: uppercase; */
    letter-spacing: 1px;
    line-height: 160%;
    /* display: inline-grid; */
    width: fit-content;
    height: fit-content;
    padding: 0 4px 0 4px;
    margin-right: 10px;
    /* background: black; */
    color: black;
    border: 1px solid black;
`

export const EventDesription = styled.div`
    font-family: "Times New Roman";
    font-family: "Gill Sans";
    /* display: grid; */
    /* grid-template-columns: 64px 1fr; */
    font-size: 18px;
    opacity: 0.7;
    line-height: 140%;
`