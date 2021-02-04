import React from 'react';
import { Header } from './Header';
import styled from 'styled-components';
import { Home } from './Home';

const App = () => {
  return (
    <AppComponent>
      <Header />
      <Home />
    </AppComponent>
  )
}

export default App;

const AppComponent = styled.main`
    padding: 10px;
    grid-template-columns: minmax(auto, 976px);
    display: grid;
    justify-content: center;
`;