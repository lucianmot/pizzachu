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
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            Pizzachu🍕
        </Logo>
    </NavbarStyled>;
}