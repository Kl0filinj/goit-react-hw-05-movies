import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FilmList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: base-line;
`;

export const FilmWraper = styled.li`
  display: flex;
  flex-basis: calc(100% / 6);
  padding: 15px 0;
`;

export const FilmCard = styled(NavLink)`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #212121;
  height: 100%;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
  border-radius: 0.25rem;
`;

export const FilmPoster = styled.img`
  border-radius: 0.25rem;
  &:hover {
    outline: 1px solid #fff;
  }
`;
