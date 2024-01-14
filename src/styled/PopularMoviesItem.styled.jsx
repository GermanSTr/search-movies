import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledIMG = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledLi = styled.li`
  list-style: none;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: calc((100% - 20px * 3) / 4);
`;

export const StyledTitle3 = styled.h3`
  margin: 10px 0 0 0;
  font-size: 20px;
  text-align: center;
`;

export const StyledTextRaiting = styled.p`
  margin: 7px 5px 5px 0;
  text-align: right;
`;

export const StyledRaitingSpan = styled.span`
  font-weight: bold;
  color: #007bff;
`;

export const StyledLinkPopular = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
