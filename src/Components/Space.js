import React, { useState } from 'react';
import styled from 'styled-components';

const Space = ({ showSpace }) => {

    return (
        <Container showSpace={showSpace}>
            <Header>Our Space</Header>
            <p style={{ marginTop: "0", marginBottom: "-10px" }} >more pctures and highlights can be found on our instagram</p>
            <p><a href="https://instagram.com/living_skin_space">@Living_Skin_Space</a></p>
            <br />
            <img src={"imgs/space5.jpeg"} />
            <img src={"imgs/space.jpeg"} />
            <img src={"imgs/space2.jpeg"} />
            <img src={"imgs/space3.jpeg"} />
            <img src={"imgs/space1.jpeg"} />
            <img src={"imgs/space4.jpeg"} />
        </Container>
    );
};


export default Space;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    top: 2%;
    left: 2%;
    width: 88%;
    height: 81%;
    padding: 4%;

    overflow-x: hidden;
    overflow-y: scroll;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

    display: grid:
    display: flex;
    flex-wrap: wrap;
    /* padding: 0 4px; */
    vertical-align: middle;
    /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    /* align-items: justify; */
    
    z-index: ${props => ((props.showSpace) ? 3 : -1)};
    /* display: ${props => ((props.showSpace) ? "grid" : "none")}; */
    user-select: ${props => ((props.showSpace) ? "auto" : "none")};
    
    border: 1px solid black;
    background-color: white;

    img {
        display: flex-grid;
        /* width: 15%; */
        width: 19%;
        margin-right: 1%;
        objectFit: contain;
        margin-bottom: 1%;
    }

    @media screen and (max-width: 767px) {
        top: 0;
        left: 0;
        width: calc(94%); 
        height: 90%;
        padding-top: 8%;
        padding-bottom: 20%;

        img {
            width: 48%;
        }
    }
`

const Header = styled.div`
    position: fixed;
    padding-top: 7px;
    padding-bottom: 0;
    top: 2%;
    left: 2%;
    width: 96%;
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
