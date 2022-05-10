import React, {useState} from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn, NavExtended,NavBarLink,NavLogoLink} from "./NavbarEle";

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 768){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 768){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }

    return (
        <>
            <Nav extendNavBar={click}>
                <NavLogoLink to="/" extendNavBar={click}>
                    <h1>LOGO</h1>
                </NavLogoLink>
                <Bars onClick={handleClick} />
                <NavMenu extendNavBar={click}>
                    <NavLink to="/about"  activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/map"  activeStyle>
                        Map
                    </NavLink>

                    <NavLink to="/sign-up"  activeStyle>
                        Sign up
                    </NavLink>
                    <NavBtnLink to="/signin" >Sign in</NavBtnLink>
                </NavMenu>
                {/*<NavBtn>
                    <NavBtnLink to="/signin">Sign in</NavBtnLink>
                </NavBtn>*/}
                {click && (
                    <NavExtended>
                    <NavBarLink to="/about"  activeStyle>
                        About
                    </NavBarLink>
                    <NavBarLink to="/map"  activeStyle>
                        Map
                    </NavBarLink>

                    <NavBarLink to="/sign-up"  activeStyle>
                        Sign up
                    </NavBarLink>
                    <NavBtnLink to="/signin" >Sign in</NavBtnLink>
                </NavExtended>)}
            </Nav>
        </>
    );
}

export default Navbar