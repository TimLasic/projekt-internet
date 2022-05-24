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
                    <NavLink to="/stats"  activeStyle>
                        Statistics
                    </NavLink>

                    <NavLink to="/about"  activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/map"  activeStyle>
                        Map
                    </NavLink>

                    <NavLink to="/sign-up"  activeStyle>
                        Sign up
                    </NavLink>



                    <NavBtnLink to="/sign-in" >Sign in</NavBtnLink>
                </NavMenu>
                {/*<NavBtn>
                    <NavBtnLink to="/signin">Sign in</NavBtnLink>
                </NavBtn>*/}
                {click && (
                    <NavExtended>
                    <NavBarLink to="/about" onClick={handleClick}  activeStyle>
                        About
                    </NavBarLink>
                    <NavBarLink to="/map" onClick={handleClick}  activeStyle>
                        Map
                    </NavBarLink>

                    <NavBarLink to="/stats" onClick={handleClick}  activeStyle>
                        Statistics
                    </NavBarLink>

                    <NavBarLink to="/sign-up" onClick={handleClick}  activeStyle>
                        Sign up
                    </NavBarLink>
                    <NavBtnLink to="/sign-in" onClick={handleClick} >Sign in</NavBtnLink>
                </NavExtended>)}
            </Nav>
        </>
    );
}

export default Navbar