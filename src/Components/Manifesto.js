import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const Manifesto = ({ showManifesto, manifestoToggle }) => {

    // const location = useLocation();
    // let currPage = location.pathname.split("/").pop();

    // useEffect(() => {
    //     if (currPage == "manifesto") {
    //         return 
    //             <Container>
    //             </Container>
    //     }
    // });


    const file_name = 'manifesto.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./MDs/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <Container showManifesto={showManifesto}>
            <Header>Manifesto</Header>
            {/* <img src={"imgs/bg3.png"} style={{ paddingLeft: "4vw", paddingTop: "3vh", height: "90px" }} /> */}
            {/* <img src={"imgs/bg3.png"} style={{ position: "fixed", left: "calc(8vw)", top: "calc(50vh - 60px)", width: "120px", filter: "drop-shadow(10px 8px 3px #EB849D)" }} /> */}
            {/* <img src={"imgs/bg3.png"} style={{ position: "fixed", right: "calc(8vw)", top: "calc(50vh - 60px)", width: "120px", filter: "drop-shadow(10px 8px 3px #EB849D)" }} /> */}
            <Markdown style={{ paddingLeft: "3.5vw", paddingRight: "3.5vw", fontFamily: "Times New Roman", fontSize: "18px", lineHeight: "1.48em", textAlign: "justify", textJustify: "inter-word" }}>
                {post}
            </Markdown>
        </Container>
    );
};

export default Manifesto;


// STYLES ------------------------


const Container = styled.div`
    position: fixed;
    top: 2vh;
    left: 31%;
    width: 38%;
    height: calc(93.5vh);
    overflow-y: scroll;
    padding-top: 1vh;
    
    z-index: ${props => ((props.showManifesto) ? 3 : -1)};
    display: ${props => ((props.showManifesto) ? "block" : "none")};
    user-select: ${props => ((props.showManifesto) ? "auto" : "none")};
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

    border: 1px solid black;
    background-color: white;

    @media screen and (max-width: 1281px) {
        left: 25%;
        width: 50%;
    }

    @media screen and (max-width: 767px) {
        top: 0;
        left: 0;
        width: calc(92%); 
        height: 100%;
        padding-left: 4%;
        padding-right: 4%;

        h1 {
            margin-top: 4%;
            margin-bottom: 12%;
            text-align: center;
            line-height: 128%;
            /* text-justify: unset; */
        }
    }
`

const Header = styled.div`
    position: fixed;
    top: 2vh;
    left: 31%;
    width: 38%;
    padding-top: 6px;
    padding-bottom: 0;
    height: 22px;

    background-color: white;
    color: grey;
    border: 1px solid black;

    text-align: center;
    font-size: 13px;
    font-family: "Times New Roman";
    letter-spacing: 2px;

    /* filter: drop-shadow(0px 1px 10px #000000); */


    @media screen and (max-width: 1281px) {
        left: 25%;
        width: 50%;
    }

    @media screen and (max-width: 767px) {
        left: 0;
        top: 0;
        width: 100%;
    }
`
