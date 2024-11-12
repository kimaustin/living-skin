import React, { useState } from 'react';
import styled from 'styled-components';
import Close from './Close';
import Reset from './Reset';

const Events = ({ closePortals }) => {

    return (
        <>
            <Container>
                <Header>Events</Header>
                {/* <h1 style={{ marginBottom: 0 }} >Living Skin Events</h1> */}
                <p style={{ marginTop: "3vh", marginBottom: "-10px" }} >Check our Eventbrite or DM us on instagram to sign up / more details!</p>
                <p><a href="https://instagram.com/living___skin">Instagram</a></p>
                {/* <p><i>calendars make take a second to load...</i></p> */}
                <iframe src="https://calendar.google.com/calendar/embed?height=450&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=MONTH&src=Y18zY2EzYzU1NGMwMmViM2E5ZmJhMjQxNzU1MjljMWY3MDQ4ZDBlZGM5NGJiOTg5YmZlYmEzMmYyMzdmOTNmYTdkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238E24AA" style={{borderWidth: 0, width: "100%", height: 450, frameBorder: 0, scrolling: "no", marginBottom: "0"}} ></iframe>
                {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&src=Y18zY2EzYzU1NGMwMmViM2E5ZmJhMjQxNzU1MjljMWY3MDQ4ZDBlZGM5NGJiOTg5YmZlYmEzMmYyMzdmOTNmYTdkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238E24AA" style={{borderWidth: 0, width: "100%", height: 700, frameBorder: 0, scrolling: "no" }}></iframe> */}
            </Container>
            <Close closePortals={closePortals} />
            <Reset closePortals={closePortals} />
        </>
        
    );
};


export default Events;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    left: calc((96% - 700px) / 2);
    width: 700px;

    top: 2vh;
    height: calc(87.5vh);
    /* width: 54%; */
    /* min-width: calc(700px + 6%); */
    /* max-width: 70%; */
    /* height: 63%; */
    /* height: fit-content; */
    /* max-height: 96%; */
    /* height: 100%; */

    padding: 2%;
    overflow-y: scroll;
    
    /* z-index: ${props => ((props.showEvents) ? 3 : -1)};
    display: ${props => ((props.showEvents) ? "block" : "none")};
    user-select: ${props => ((props.showEvents) ? "auto" : "none")}; */
    z-index: 3;
    display: "block";
    user-select: "auto";
    
    border: 1px solid black;
    background-color: white;

    h1 {
        font-family: "Times New Roman";
        line-height: 50%;
    }

    p {
        font-family: "Times New Roman";
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
    
    @media screen and (max-width: 767px) {
        top: 0;
        left: 0;
        width: calc(88%); 
        height: 100%;
        padding: 6%;
        padding-top: 8%;
        /* padding-bottom: 50vh; */

        iframe {
            margin-bottom: 23vh;
        }
    }
`

const Header = styled.div`
    position: fixed;
    top: 2vh;
    left: calc((96% - 700px) / 2);
    width: calc(700px + 4%);
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

    @media screen and (max-width: 767px) {
        top: 0;
        left: 0;
        width: 100%;
        /* height: 100%; */
    }
`



// import React, { useState } from 'react';
// // import { motion } from "framer-motion";
// import styled from 'styled-components';
// import { Link as LinkRouter, useLocation } from 'react-router-dom';
// import ReactDOM from 'react-dom'
// import Markdown from 'react-markdown'

// const Events = () => {
    
//     const e1 = { type: "Event", title: "Opening Reception", time: ["Dec 2", "1-6pm"], description: "Soft Opening of our home/storefront turned Library~Gallery."};
//     const e2 = { type: "Gallery", title: "What They Don't Tell You When You Get Hit By a Car by Jerome Wang", time: ["Dec 2 - Jan 5", ""], description: "WTDTYWYGHBAC"};

//     const events = [e1, e2];

//     let events_list = events.map((event, index) => {
//         return (
//             <ThreeColumn>
//                 Test
//                 <EventHeader>{event.title}</EventHeader>
//                 <Body1>
//                     {event.time[0]}<br />
//                     {event.time[1]}
//                 </Body1>
//                 <EventDesription>
//                     <Tag>{event.type}</Tag>
//                     {event.description}
//                 </EventDesription>
//             </ThreeColumn>
//         )
//     });

//     return (
//         // <Container>
//             {events_list}
//         // </Container>
//     );
// };


// export default Events;


// // STYLES ------------------------

// const Container = styled.div`

//     @media screen and (max-width: 767px) {
//     }
// `

// const Body1 = styled.p`
//     font-family: "Times New Roman";
// `

// export const Event = styled.div`
//     font-family: "Times New Roman";
// `

// export const ThreeColumn = styled.div`
//     /* border: 0.75px solid black; */
//     /* padding: 8px; */
//     display: grid;
//     grid-template-columns: 16% 16% 1fr;
// `

// export const EventHeader = styled.div`
//     /* font-family: "Times New Roman"; */
//     font-family: cursive;
//     font-size: 17px;
//     font-weight: 800;
//     /* text-transform: uppercase; */
//     line-height: 150%;
// `

// export const Tag = styled.div`
//     font-family: "Gill Sans";
//     font-size: 13px;
//     /* font-weight: 600; */
//     /* text-transform: uppercase; */
//     letter-spacing: 1px;
//     line-height: 160%;
//     width: fit-content;
//     height: fit-content;
//     padding: 0 2px 0 2px;
//     /* background: black; */
//     color: black;
//     border: 1px solid black;
// `

// export const EventDesription = styled.div`
//     font-family: "Times New Roman";
//     display: grid;
//     grid-template-columns: 50px 1fr;
//     font-size: 17px;
//     opacity: 0.7;
// `