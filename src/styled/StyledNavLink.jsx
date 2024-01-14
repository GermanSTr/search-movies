import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #cd5c5c;
  font-weight: bold;
  font-size: 24px;
  margin: 0 10px;
  padding: 5px;

  :hover {
    color: #993030;
  }

  &.active {
    background-color: #2640e169;
    border-radius: 5px;
  }
`;
