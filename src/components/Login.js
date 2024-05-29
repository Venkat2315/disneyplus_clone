import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <Backgroud>
            <img src='/images/login-background.jpg' alt='login-backgrouund'/>
        </Backgroud>
        <ContentBox>
            <ContentLogo1 src='/images/cta-logo-one.svg' alt='ContentLogo1'/>
            <SignUp>SIGN UP ASSHOLE</SignUp>
            <Description> TEMP Description</Description>
            <ContentLogo2 src='/images/cta-logo-two.png' alt='ContentLogo2'/>
        </ContentBox>
    </Container>
  )
}

export default Login

const Container=styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Backgroud=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ContentBox=styled.div`

    max-width: 650px;
    padding: 80px 40px;
    width: 60%;
    display: flex;
    flex-direction: column;

`

const ContentLogo1=styled.img``

const ContentLogo2=styled.img``


const SignUp=styled.a`

    width: 100%;
    margin-top: 8px;
    margin-bottom: 12px;
    cursor: pointer;
    background-color: #0063e5;
    font-weight: bold;
    font-size: 18px;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    transition: all 250ms;
    letter-spacing: 1.5px;
    &:hover{
        background-color: #0483ee;
    }

`

const Description=styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
