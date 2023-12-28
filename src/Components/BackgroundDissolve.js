import React, { useState } from 'react';
import styled from 'styled-components';

export const BackgroundDissolve = () => {
    return (
        <Container>
          <div className='pic' id='pic10' />
          <div className='pic' id='pic9' />
          <div className='pic' id='pic8' />
          <div className='pic' id='pic7' />
          <div className='pic' id='pic6' />
          <div className='pic' id='pic5' />
          <div className='pic' id='pic4' />
          <div className='pic' id='pic3' />
          <div className='pic' id='pic2' />
          <div className='pic' id='pic1' />
        </Container>
    );
  };


const Container = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    /* max-width: 400px; */
    height: 100%;
    margin: 0 auto;

    .pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-animation: fade 60s infinite;
    animation: fade 60s infinite;
    }

    #pic1 {
        background-image: url('imgs/books/1.jpg');
        animation-delay: 0s;
    }
    #pic2 {
        background-image: url('imgs/books/2.jpg');
        animation-delay: 6s;
    }
    #pic3 {
        background-image: url('imgs/books/3.jpg');
        animation-delay: 12s;
    }
    #pic4 {
        background-image: url('imgs/books/4.jpg');
        animation-delay: 18s;
    }
    #pic5 {
        background-image: url('imgs/books/5.jpg');
        animation-delay: 24s;
    }
    #pic6 {
        background-image: url('imgs/books/6.jpg');
        animation-delay: 30s;
    }
    #pic7 {
        background-image: url('imgs/books/7.jpg');
        animation-delay: 36s;
    }
    #pic8 {
        background-image: url('imgs/books/8.jpg');
        animation-delay: 42s;
    }
    #pic9 {
        background-image: url('imgs/books/9.jpg');
        animation-delay: 48s;
    }
    #pic10 {
        background-image: url('imgs/books/10.jpg');
        animation-delay: 54s;
    }

  
  @-webkit-keyframes fade {
    0% {
      opacity: 1;
    }
    7% {
      opacity: 1;
    }
    10% {
      opacity: 0;
    }
    96% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    6% {
      opacity: 1;
    }
    10% {
      opacity: 0;
    }
    97% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`    
  