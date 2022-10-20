import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
`;

export const HeaderLink = styled(NavLink)`
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;

  &.active {
    background-color: dodgerblue;
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
