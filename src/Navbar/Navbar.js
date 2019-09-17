import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title"; 

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 15px;
    position: fixed;
    width: 100%;
    z-index: 999;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 4px #380502;
    margin: auto;
    width: 100%;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            Why doesn't this start!
            Pizzachu<span role="img" aria-label="pizza">🍕</span> - I cheese you!
        </Logo>
    </NavbarStyled>;
}