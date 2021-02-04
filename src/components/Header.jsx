import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderComponent>
      <div className="Header-log">
        <h1>
          <a href="/">
            Rick and Morthy
            </a>
        </h1>
      </div>
      <div className="Header-nav">
        <a href="#/about">
          About
          </a>
      </div>
    </HeaderComponent>
  )
}

const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
  a {
    text-decoration: none;
    color: #15302c;
  }
`;