import React, { useState } from 'react';
import styled from 'styled-components';
import Close from './Close';
import Reset from './Reset';
import IcecastMetadataPlayer from "icecast-metadata-player";
import { Link, Link as LinkRouter, useLocation } from 'react-router-dom';

const Radio = ({ closePortals }) => {

    const player = new IcecastMetadataPlayer(
        "https://dsmrad.io/stream/isics-all",
        { onMetadata: (metadata) => {console.log(metadata)} }
      );

    return (
        <>
            <Container>
                <h1>Kiptok: Audio Residency</h1>
                <Link to="/current">details</Link>
                <p />
                <iframe id="embed_player" frameborder="0" width="280" height="216" src="https://livingskin.airtime.pro/embed/player?stream=auto&skin=1"></iframe>
                <p>daily notes from kiptok:</p>
                <p>—</p>
            </Container>
            <Close closePortals={closePortals} />
            <Reset closePortals={closePortals} />
        </>
    );
};


export default Radio;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    top: 20%;
    left: 33%;
    width: 30%;
    height: 50%;

    padding: 2%;
    
    text-align: center;

    /* z-index: ${props => ((props.showContact) ? 3 : -1)};
    display: ${props => ((props.showContact) ? "block" : "none")};
    user-select: ${props => ((props.showContact) ? "auto" : "none")}; */
    z-index: 3;
    display: "block";
    user-select: "auto";
    
    border: 1px solid black;
    background-color: white;

    h2 {
        font-size: 28px;
    }

    p {
    font-size: 20px;
    }
    
    @media screen and (max-width: 767px) {
        top: 3%;
        left: 3%;
        width: 84%; 
        padding: 4%;
        height: 88%;
        overflow-y: scroll;

        text-align: center;

        p {
            font-size: 16px;
        }
    }
`
