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
  flex-basis: calc(100% / 5);
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
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;
