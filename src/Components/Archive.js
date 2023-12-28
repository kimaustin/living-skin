import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const Archive = ({ showArchive }) => {

    const [type, setType] = useState(4);

    return (
        <Container showArchive={showArchive}>

            <CategoriesList>
                <Category selected={(type == 4)} onClick={()=> setType(4)}>Exhibitions</Category>
                <Category selected={(type == 0)} onClick={()=> setType(0)}>Library Catalog</Category>
                <Category selected={(type == 1)} onClick={()=> setType(1)}>Powerpoint Presentation Club</Category>
                <Category selected={(type == 2)} onClick={()=> setType(2)}>Film Screenings</Category>
                <Category selected={(type == 3)} onClick={()=> setType(3)}>Soup Clinic</Category>
            </CategoriesList>

            {/* Content */}
            {
                (type == 0) ? (
                    <Content>
                        <Info>
                            <h1>Library Catalog</h1>
                            <p><i>List of Books, Media, and other resources found at the Living Skin Library</i></p>
                            <LinkRouter to="" target="blank" style={{ pointerEvents: "none"}} >Checkin/Checkout coming soon</LinkRouter>
                        </Info>
                        <Details>
                        </Details>
                    </Content>
                ) : (
                    (type == 1) ? (
                        <Content>
                            <Info>
                                <h1>Powerpoint Presentation Club</h1>
                                <p><i>New Extistence Framework Presentation Questions</i></p>
                                <LinkRouter to="https://docs.google.com/presentation/d/1JEp8gTKWkCy732Vrz95zMw6pP-BJZbAY4uuTDtnJVwA/edit?usp=sharing" target="blank" >New Existence Framework Questions</LinkRouter>
                            </Info>
                            <Details>
                                <Title><b>Week 1: </b> Demoscene, Glitch Art, Lunchables</Title>
                                <p>December 11, 2023</p>
                                <LinkRouter to="https://docs.google.com/presentation/d/1Wh2tCD4-XgL2Z4pZ-H6yiFsxcEs28rSWL7oVAJZ3JcA/edit?usp=sharing" target="blank" ><p>Demoscene: A Computer Art Culture</p></LinkRouter>
                                <ImageContainer>
                                    <img src={"imgs/ppc_1_1.jpeg"}/>
                                    <img src={"imgs/ppc_1_2.jpeg"}/>
                                    <img src={"imgs/ppc_1_3.jpeg"}/>
                                </ImageContainer>
                            </Details>
                        </Content>
                    ) : (
                        (type == 2) ? (
                            <Content>
                                <Info>
                                    <h1>Film Screenings</h1>
                                    <p><i>List of Living Skin Film Screenings</i></p>
                                </Info>
                                <Details>
                                    <Title><b>Film Series, Seasonal Emotion (1/4): </b> A Tale of Winter, 1992</Title>
                                    <p>December 9, 2023</p>
                                    <LinkRouter to="https://letterboxd.com/livingskin/list/film-screenings/detail/" target="blank" ><p>our notes...</p></LinkRouter>
                                    <ImageContainer>
                                        <img src={"imgs/film/1_1.jpg"}/>
                                        <img src={"imgs/film/1_2.jpg"}/>
                                        <img src={"imgs/film/1_3.jpg"}/>
                                    </ImageContainer>
                                </Details>
                            </Content>
                        ) : (
                            (type == 3) ? (
                                <Content>
                                    <Info>
                                        <h1>Soup Clining</h1>
                                        <p><i>History of Soup Clinincs</i></p>
                                    </Info>
                                    <Details>
                                        <Title><b>#1:</b> 육개장 (yukgaejang)</Title>
                                        <p>December 18, 2023, 6 - 8:30pm</p>
                                        <LinkRouter to="https://drive.google.com/file/d/1YjtUSdQiVusZbIUYPDBgKuyxdb4V5tNY/view?usp=sharing" target="blank" ><p>history-and-how-to zine</p></LinkRouter>
                                        <ImageContainer>
                                            <img src={"imgs/soup/1_1.jpg"}/>
                                            <img src={"imgs/soup/1_2.jpg"}/>
                                            <img src={"imgs/soup/1_3.jpg"}/>
                                            <img src={"imgs/soup/1_4.jpg"}/>
                                            <img src={"imgs/soup/1_5.jpg"}/>
                                            <img src={"imgs/soup/1_11.jpg"}/>
                                            <img src={"imgs/soup/1_10.jpg"}/>
                                            <img src={"imgs/soup/1_9.jpg"}/>
                                            <img src={"imgs/soup/1_6.jpg"}/>
                                            <img src={"imgs/soup/1_7.jpg"}/>
                                            <img src={"imgs/soup/1_8.jpg"}/>
                                        
                                        </ImageContainer>
                                    </Details>
                                </Content>
                            ) : ( 
                                <Content>
                                    <Info>
                                        <h1>Gallery Exhibitions</h1>
                                        <p><i>List of Living Skin Gallery Exhibitions</i></p>
                                    </Info>
                                    <Details>
                                        <Title>What They Don't Tell You When You Get Hit By a Car</Title>
                                        <p>by <i>Jerome Wang</i></p>
                                        <p>December 2nd, 2023 - January 5th, 2024</p>
                                        <ImageContainer>
                                            <img src={"imgs/wtdtywyghbac2.jpeg"}/>
                                            <img src={"imgs/wtdtywyghbac.jpeg"}/>
                                        </ImageContainer>
                                    </Details>
                                </Content>
                                )
                            )   
                        )
                    )
            }
        </Container>
    );
};


export default Archive;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    top: 4vh;
    left: 8%;
    width: 76%;
    height: 78%;

    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 3%;
    padding-right: 3%;

    /* border-radius: 5%; */
    
    z-index: ${props => ((props.showArchive) ? 3 : -1)};
    display: ${props => ((props.showArchive) ? "block" : "none")};
    user-select: ${props => ((props.showArchive) ? "auto" : "none")};
    
    border: 1px solid black;
    background-color: white;
    

    @media screen and (max-width: 767px) {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        padding: 0;
        border-radius: 0;
    }
`
const Content = styled.div`
    /* padding: 1%; */
    /* text-align: center; */
    font-family: "Times New Roman";
    /* display: grid; */
    /* grid-template-columns: 22% 86%; */
    /* column-gap: 2%; */
    h1 {
        line-height: 110%;
        font-size: 34px;
    }

    p {
        line-height: 100%;
    }

    @media screen and (max-width: 767px) {
        border: 1px solid black;
        padding-top: 14vh;
        overflow-y: scroll;
        height: 86vh;
        width: calc(100% - 40px);
        padding-left: 18px;
        padding-right: 18px;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        ::-webkit-scrollbar {
        display: none;
        }
    }
`

const Info = styled.div`
    /* position: sticky; */
    width: 22%;
    /* margin-top: -3.2vh; */
    /* border: 1px solid black; */
    position: absolute;
    top: 6vh;
    left: 4%;

    h1 {
        margin-top: -2px;
    }

    @media screen and (max-width: 767px) {
        position: unset;
        width: 100%;
        height: fit-content;
        /* height: 100%; */
    }
`

const Details = styled.div`
    position: absolute;
    top: 0;
    left: 28%;
    width: 65%;
    height: calc(100% - 4.5vh);

    padding-top: 6vh;
    /* border: 1px solid black; */

    overflow-y: scroll;
    overflow-x: hidden;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 767px) {
        position: unset;
        width: 100%;
        height: fit-content;
        overflow: none;
        padding-bottom: 20vh;
        /* height: 50vh; */
        /* height: 100%; */
    }
`

const Title = styled.div`
    font-family: "Times New Roman";
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: -10px;
    /* border: 1px solid black; */
`

const ImageContainer = styled.div`
    width: 100%;
    /* border: 1px solid black; */
    overflow-x: scroll;
    overflow-y: hidden;

    display: flex;

    margin-top: 20px;
    /* margin-top: 16px; */
    height: 400px;

    img {
        height: 100%;
        object-fit: scale-down;
        margin-right: 14px;
    }
`

const CategoriesList = styled.div`
    position: fixed;
    top: 2%;
    left: 11%;
    display: flex;
    width: fit-content;
    height: fit-content;
    z-index: 3;

    @media screen and (max-width: 767px) {
        left: 0;
        width: calc(100vw - 36px);
        /* height: unset; */
        overflow-x: scroll;
        padding-left: 15px;
        padding-right: 15px;
    }
`

const Category = styled.div`
    /* position: fixed; */
    /* top: ${props => props.level}; */
    /* left: 1%; */

    padding: 10px;
    margin-right: 4px;
    width: fit-content;
    
    border: 1px solid black;
    background-color: ${props => ((props.selected) ? "yellow" : "white")};

    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: ${props => ((props.selected) ? "yellow" : "#F1F1F1")};
    }

    @media screen and (max-width: 767px) {
        height: fit-content;
        font-size: 13px;
    }
`
