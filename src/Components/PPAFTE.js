import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

const PPAFTE = ({ showPPA }) => {
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
        <Container showPPA={showPPA}>
            <Markdown>
                {post}
            </Markdown>
        </Container>
    );
  }

export default PPAFTE;


const Container = styled.div`
    position: fixed;
    top: 0;
    left: 31%;
    width: 30%;
    height: 88%;
    padding: 4%;
    overflow-y: scroll;

    z-index: 3;
    /* z-index: ${props => ((props.showPPA) ? 3 : -1)}; */
    /* display: ${props => ((props.showPPA) ? "block" : "none")}; */
    /* user-select: ${props => ((props.showPPA) ? "auto" : "none")}; */
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

    border: 1px solid black;
    background-color: white;

    @media screen and (max-width: 767px) {

    }
`
