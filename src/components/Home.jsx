import React from 'react';
import styled from 'styled-components';
import { API } from '../config';
import { useFetch } from '../hooks/useFetch';
import { CardItem } from './CardItem';

export const Home = () => {
  const { data: characters } = useFetch(`${API}/character`);
  return (
    <MainComponent>
      {
        characters?.results?.map(character => {
          return (
            <CardItem
              id={character.id}
              image={character.image}
              name={character.name}
            />
          )
        })
      }
    </MainComponent>
  )
};

const MainComponent = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
`;
