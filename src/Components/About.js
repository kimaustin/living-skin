import React, { useState } from 'react';
import styled from 'styled-components';
import Close from './Close';
import Reset from './Reset';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const About = ({ closePortals }) => {

    return (
        <>
            <Container>
                <p style={{ fontSize: "30px" }}>
                    <b>
                    Living Skin positions itself as partners with knowledge, information, and experiences.
                    </b>
                </p>
                <p style={{ fontSize: "22px" }}>
                    As discoverers learners and expressers, we ought to position ourselves as partners with knowledge and art, not owners or collectors of it, respecting their spirit. Art and knowledge simply pass through us—we can only but experience our spirit and reactions to their movements.
                </p>
                <LinkRouter to="/manifesto" >More in our manifesto...</LinkRouter>
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
    font-family: "Gill Sans";
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
        height: 78vh;
        overflow-y: scroll;

    }
`