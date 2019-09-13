import styled from "styled-components";

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const Food = styled.div`
    height: 100px;
    background-image: ${(img) => `url(${img});` }
`