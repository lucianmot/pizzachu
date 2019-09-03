import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <div>Hello Pizzachu</div>
    </>
  );
}

export default App;
