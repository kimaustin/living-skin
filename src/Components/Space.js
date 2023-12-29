import React, { useState } from 'react';
import styled from 'styled-components';
import Close from './Close';
import Reset from './Reset';

const Space = ({ closePortals }) => {

    return (
        <>
            <Container>
                <Header>Our Space</Header>
                <p style={{ marginTop: "0", marginBottom: "-10px" }} >More pctures and highlights found on our instagram:</p>
                <p><a href="https://instagram.com/living_skin_space">@Living_Skin_Space</a></p>
                <br />
                    {/* <img src={"imgs/space1.jpeg"} /> */}
                <img src={"imgs/space5.jpeg"} />
                <img src={"imgs/space2.jpeg"} />
                <img src={"imgs/space3.jpeg"} />
                <img src={"imgs/space4.jpeg"} />
            </Container>
            <Close closePortals={closePortals} />
            <Reset closePortals={closePortals} />
        </>
        
    );
};


export default Space;


// STYLES ------------------------

const Container = styled.div`
    background-color: white;
    position: fixed;
    top: 0%;
    left: 16%;
    width: 60%;
    height: 100%;
    padding: 4%;

    overflow-x: hidden;
    overflow-y: scroll;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
    display: none;
    }

    flex-wrap: wrap;
    vertical-align: middle;

    z-index: 3;
    display: "grid";
    user-select: "auto";

    border: 1px solid black;
    background-color: white;

    img {
        display: flex-grid;
        width: 19%;
        margin-right: 1%;
        objectFit: contain;
        margin-bottom: 1%;
    }
`

const Header = styled.div`
    position: fixed;
    padding-top: 7px;
    padding-bottom: 0;
    top: 0;
    left: 16%;
    width: 68%;
    height: 22px;

    background-color: white;
    color: grey;
    border: 1px solid black;

    text-align: center;
    font-size: 13px;
    font-family: "Times New Roman";
    letter-spacing: 2px;

    @media screen and (max-width: 767px) {
        width: 100%;
        top: 0;
        left: 0;
    }
`