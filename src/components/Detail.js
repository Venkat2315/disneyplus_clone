import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Backgroud>
            <img src='./images/oppenheimer_wallpaper.jpg' alt='oppenheimer'/>
        </Backgroud>
        <ImageTitle>
            <img src='./images/download.png' alt='oppenheimer Title'/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='./images/play-icon-black.png' alt='Play'/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='./images/play-icon-white.png' alt='Trailer'/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='./images/group-icon.png' alt='Groupwatch'/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            temp Subtitle
        </SubTitle>
        <Description>
            temp description
        </Description>
    </Container>
  )
}

export default Detail

const Container= styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Backgroud= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle=styled.div`
    min-height: 370px;
    min-width: 270px;
    height: 10vh;
    width: 15vw;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Controls= styled.div`
    display: flex;
    align-items: center;
`

const PlayButton=styled.button`
    border-radius: 4px;
    padding: 0px 24px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb (249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background-color: rgb(198,198,198);
    }
`

const TrailerButton=styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249 ,249 ,249);
    color: rgb(249 ,249 ,249);
    text-transform: uppercase;

`

const AddButton=styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;
    }
    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
    }

`

const GroupWatchButton=styled(AddButton)`
    background-color: rgb(0,0,0);
    &:hover{
        background-color: rgba(0, 0, 0, 0.6);
    }
`

const SubTitle=styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description=styled.div`
    line-height:1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`