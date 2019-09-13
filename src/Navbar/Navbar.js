import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from "../Styles/colors";
import {Title} from "../Styles/title"; 

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
`
const Logo = styled(Title)`
    font-sie: 20px;
    color: white;
    text-shadow: 2px 2px 4px #380502;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            Pizzachu<span role="img" aria-label="pizza">🍕</span>
        </Logo>
    </NavbarStyled>;
}