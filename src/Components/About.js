import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const About = ({ showAbout, manifestoToggle }) => {

    return (
        <Container showAbout={showAbout}>
            <p style={{ fontFamily: "times new roman", fontSize: "30px" }}>
                <i>
                    Living Skin positions itself as partners with knowledge, information, and experiences.
                </i>
            </p>
            <p style={{ fontFamily: "times new roman", fontSize: "22px" }}>
                As discoverers learners and expressers, we ought to position ourselves as partners with knowledge and art, not owners or collectors of it, respecting their spirit. Art and knowledge simply pass through us—we can only but experience our spirit and reactions to their movements.
            </p>
            <LinkRouter onClick={manifestoToggle} to="manifesto" style={{fontFamily: "Times New Roman"}}>More in our manifesto...</LinkRouter>
        </Container>
    );
};


export default About;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    top: 15%;
    left: 25%;
    width: 40%;
    height: 50%;

    padding: 5%;
    
    z-index: ${props => ((props.showAbout) ? 3 : -1)};
    display: ${props => ((props.showAbout) ? "block" : "none")};
    user-select: ${props => ((props.showAbout) ? "auto" : "none")};
    
    border: 1px solid black;
    background-color: white;

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