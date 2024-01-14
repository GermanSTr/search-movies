import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledDetailsDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const StyledLinkDetails = styled(NavLink)`
  text-decoration: none;
  color: #cd5c5c;
  font-size: 18px;
  font-weight: bold;

  :hover {
    color: #993030;
  }

  &.active {
    background-color: #2640e169;
    border-radius: 5px;
  }
`;
