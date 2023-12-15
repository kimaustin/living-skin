import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = ({ showContact }) => {

    return (
        <Container showContact={showContact}>
            <h2 style={{ fontFamily: "Time New Roman", marginTop: "2px" }}>Collaborate with us</h2>
            <p style={{ fontFamily: "Time New Roman", lineHeight: "137%" }}>
                Gallery proposals open for February 2024 <br />
                Library Event proposals open for 2024 
            </p>
            <p style={{ fontFamily: "Time New Roman", lineHeight: "137%", marginBottom: 0}}>
                Proposals accepted via email <br />
                <a href="mailto:admin@livingskin.space" ><i>admin@livingskin.space</i></a>
            </p>
            
        </Container>
    );
};


export default Contact;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    top: 33%;
    left: 33%;
    width: 30%;
    height: fit-content;

    padding: 2%;
    
    text-align: center;

    z-index: ${props => ((props.showContact) ? 3 : -1)};
    display: ${props => ((props.showContact) ? "block" : "none")};
    user-select: ${props => ((props.showContact) ? "auto" : "none")};
    
    border: 1px solid black;
    background-color: white;

    h2 {
        font-size: 28px;
    }

    p {
    font-size: 20px;
    }
    
    @media screen and (max-width: 767px) {
        top: 30%;
        left: 3%;
        width: 81%; 
        padding: 6%;
        padding-top: 7%;
        padding-bottom: 8%;
        height: fit-content;
        overflow-y: scroll;

        text-align: center;

        p {
            font-size: 16px;
        }
    }
`
