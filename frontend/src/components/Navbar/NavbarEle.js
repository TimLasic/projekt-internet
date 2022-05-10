import styled from "styled-components"
import {NavLink as Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

export const Nav = styled.nav`
    background: #000;
    height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    
    @media screen and (min-width: 768px) {
        height: 80px;
    }
`

export const NavLink =  styled(Link)`
    color: #fff;
    align-items: center;
    text-decorations: none;
    height: 100%;
    display: flex;
    padding: 0 1rem;
    cursor: pointer;
    
    &.active {
        color: #15cdfc;
    }
`

export const Bars =  styled(FaBars)`
    color: #fff;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`

    display: flex;
    
    align-items: center;
    /*margin-left: -24px;*/
    
    /*2nd nav*/
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavBtn = styled.div`

    display: flex;
    align-items: center;
    margin-left: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    /*2nd nav*/
    margin-left: 24px;

    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`


export const NavExtended = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media  (min-width: 768px) {
        display: none;
    }

`
export const NavBarLink =  styled(Link)`
    color: #fff;
    align-items: center;
    text-decorations: none;
    margin: 20px;
    display: flex;
    padding: 0 1rem;
    cursor: pointer;
    
    &.active {
        color: #15cdfc;
    }
`

export const NavLogoLink =  styled(Link)`
    color: #fff;
    align-items: center;
    text-decorations: none;
    margin: 20px;
    display: ${(props) => (props.extendNavBar ? "none" : "flex")};
  

    padding: 0 1rem;
    cursor: pointer;
    
    @media screen and (min-width: 768px) {
        display: flex;
    }
    &.active {
        color: #15cdfc;
    }
`