import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  overflow: hidden;
  background-color: #121212;
  padding: 20px 10px;
`;

export const HeaderLink = styled(NavLink)`
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 15px;

  &.active {
    background-color: #e5a00c;
    color: white;
  }

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

// /* Change the background color on mouse-over */
// .header a:hover {
// background-color: #ddd;
// color: black;
// }

// /* Style the active/current link*/
// .header a.active {
//   background-color: dodgerblue;
//   color: white;
// }
