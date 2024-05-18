import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
        <Logo src="./images/logo.svg"/>
        <NavMenu>
            <a>
                <img src='./images/home-icon.svg' alt='Home Tab'/>
                <span>Home</span>
            </a>
            <a>
                <img src='./images/search-icon.svg' alt='Home Tab'/>
                <span>Search</span>
            </a>
            <a>
                <img src='./images/watchlist-icon.svg' alt='Home Tab'/>
                <span>WatchList</span>
            </a>
            <a>
                <img src='./images/original-icon.svg' alt='Home Tab'/>
                <span>Originals</span>
            </a>
            <a>
                <img src='./images/movie-icon.svg' alt='Home Tab'/>
                <span>Movies</span>
            </a>
            <a>
                <img src='./images/series-icon.svg' alt='Home Tab'/>
                <span>Series</span>
            </a>
        </NavMenu>
        <UserImg src="https://www.google.com/imgres?q=fuck%20off&imgurl=https%3A%2F%2Fstatic7.depositphotos.com%2F1038411%2F676%2Fv%2F450%2Fdepositphotos_6767385-stock-illustration-hand-show-fuck.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fillustrations%2Ffuck-off.html&docid=e6ITvfX4xchZLM&tbnid=aSXm2RM8LOWxJM&vet=12ahUKEwji0NH2gpiGAxVhslYBHZcJBXsQM3oECEUQAA..i&w=462&h=600&hcb=2&ved=2ahUKEwji0NH2gpiGAxVhslYBHZcJBXsQM3oECEUQAA"
        alt='Fuck off'/>
    </Nav>
  )
}

export default Header

const Nav=styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu=styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 25px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg=styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`