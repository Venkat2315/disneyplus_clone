import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../Firebase';
import { signInWithPopup, signOut} from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';

import {
    selectUserName,
    selectUserPhoto,
    setSignOut,
    setUserLogin
} from "../features/user/userSlice";



function Header() {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                  }))
                navigate("/");
            }
        })
    },[])

    const logIn = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          let user=result.user
          dispatch(setUserLogin({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL
          }))
          navigate("/");
        })
        .catch((error) => {
            console.error("Unsuccesful Login!! Try Again. Error:",error);
        });
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            dispatch(setSignOut());
            navigate("/login"); 
          } catch (error) {
            console.error("Unsuccesful LogOut!! Try Again. Error:",error);
          }
      };

  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        { !userName ?
            <LoginContainer>
                <Login onClick={logIn}>Login</Login>
            </LoginContainer> :
            <>
                <NavMenu>
                    <a>
                        <img src='/images/home-icon.svg' alt='Home Tab'/>
                        <span>Home</span>
                    </a>
                    <a>
                        <img src='/images/search-icon.svg' alt='Search Tab'/>
                        <span>Search</span>
                    </a>
                    <a>
                        <img src='/images/watchlist-icon.svg' alt='Watchlist Tab'/>
                        <span>WatchList</span>
                    </a>
                    <a>
                        <img src='/images/original-icon.svg' alt='Original Tab'/>
                        <span>Originals</span>
                    </a>
                    <a>
                        <img src='/images/movie-icon.svg' alt='Movies Tab'/>
                        <span>Movies</span>
                    </a>
                    <a>
                        <img src='/images/series-icon.svg' alt='Series Tab'/>
                        <span>Series</span>
                    </a>
                </NavMenu>
                <UserImg onClick={logOut} src='/images/IMG_3167.JPG' alt='Fuck off'/>
            </>
        }
        
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
    padding: 0 36px;
    overflow: hidden;
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

const LoginContainer=styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

`

const Login=styled.div`
    border: 1px solid;
    border-radius: 4px;
    letter-spacing: 1.5px;
    padding: 8px 16px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`