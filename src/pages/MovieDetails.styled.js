import styled from 'styled-components';

export const FilmTitle = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 32px;
  font-weight: 700;
`;

export const FilmGener = styled.span`
  border: 1px solid white;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 5px;
  padding: 4px;
`;

export const FilmDescriptionWrapper = styled.div`
  padding: 48px;
  background: #3c3c3c;
  color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  row-gap: 48px;
  column-gap: 48px;
`;
// max-width: 700px
