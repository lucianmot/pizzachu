import React from 'react';
import styled from 'styled-components';
import { foods } from "../Data/FoodData";
import { Food, FoodGrid } from "./FoodGrid";

const MenuStyled = styled.div`
    border: 2px solid black;
    height: 1000px;
    margin: 0px 400px 50px 20px;
`

export function Menu(){
    return <MenuStyled>
        <FoodGrid>
        {foods.map(food => (
            <div>{food.name}</div>
        ))}
        </FoodGrid>
    </MenuStyled>
}