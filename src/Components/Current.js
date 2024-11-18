import React, { useState } from 'react';
import styled from 'styled-components';
import Close from './Close';
import Reset from './Reset';
import { Link, Link as LinkRouter, useLocation } from 'react-router-dom';

const About = ({ closePortals }) => {

    return (
        <>
            <Container>
                {/* <GradientBox> */}
                    <Title>4|4/7 by kiptok</Title>
                    <p>Sound Residency</p>
                    <p><i>nov 16 - nov 23</i></p>
                    <p>A Skin-Cell Temporary No. 3</p>
                    <Link to="/radio">livestream</Link>
                    <p>For 24 hours a day, 7 days straight, kiptok’s 4|4/7 will play in the home of Living Skin and be broadcast to the universe via web as an exploration of life vividly defined by rhythm. Constant, semi-generative sound will be layered with intermittent live sets and responsive projections for both neighbors of the skin and listeners around the world to tune in and find potential Eurythmia. </p>
                    <p>4|4/7 will open this Saturday, November 16 from 9pm - 1am with a party, “Yo DJ pump this party” and continue until November 23. </p>
                    <p>4|4/7 is an invisible iron handle, hanging in the center of the Skin; 4|4/7 explores rhythym as it defines life and conversation with those around us. </p>
                    <p>—</p>
                    <p>kiptok is a musician, dj, dancer, that lives within the beating of hearts and cycles of life. kiptok is based in brooklyn, ny.</p>
                {/* </GradientBox> */}
            </Container>
            <Close closePortals={closePortals} />
            <Reset closePortals={closePortals} />
        </>
        
    );
};


export default About;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    top: 20%;
    left: 25%;
    width: 35%;
    height: 50vh;

    overflow-x: hidden;
    overflow-y: scroll;

    /* border-radius: 50%; */

    padding-top: 1%;
    padding-bottom: 2%;
    padding-left: 7%;
    padding-right: 7%;
    
    /* z-index: ${props => ((props.showAbout) ? 3 : -1)};
    display: ${props => ((props.showAbout) ? "block" : "none")};
    user-select: ${props => ((props.showAbout) ? "auto" : "none")}; */
    font-family: "Lucida Grande";
    /* font-size: 16px; */

    z-index: 3;
    display: "block";
    user-select: "auto";
    
    border: 1px solid black;
    background-color: white;

    p {
        line-height: 120%;
    }

    @media screen and (max-width: 767px) {
        top: 3%;
        left: 4%;
        width: 80%; 
        padding: 6%;
        padding-top: 0;
        height: 86vh;
        overflow-y: scroll;

    }
`

const GradientBox = styled.div`
    width: 50%;
    height: 50%:
    background-image: linear-gradient(grey, white);
`

const Title = styled.h1`
    text-size: 16px;
    font-weight: bold;
`