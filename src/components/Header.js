import React, { useState } from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest'
import { IconButton } from '@material-ui/core'
import styled from 'styled-components'
import { Face, KeyboardArrowDown, Notifications, Search, Textsms } from '@material-ui/icons'


function Header(props) {
    const [input, setInput] = useState('');

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/"> Homepage</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <Search />
                    </IconButton>
                    <form>
                        <input type='text' onChange={(e) => setInput(e.target.value)}/>
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconWrapper>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <IconButton>
                    <Textsms/>
                </IconButton>
                <IconButton>
                    <Face/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowDown/>
                </IconButton>
            </IconWrapper>
        </Wrapper>
        
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`

const HomeButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomePageButton = styled(HomeButton)`
    
    background-color: rgb(17,17,17);
    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`

const FollowingButton = styled(HomeButton)`
    
    background-color: white;
    margin-left: 10px;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover {
        background-color: #e1e1e1;
    }
`
const SearchWrapper = styled.div`
    flex: 1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
        font-size: 16px;
        margin-left: 10px;
    }

    form > button {
        display: none;
    }

    input:focus {
        outline: none;
    }

`

const IconWrapper = styled.div`
`
