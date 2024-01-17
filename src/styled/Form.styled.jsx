import styled from '@emotion/styled';

export const StyledFormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin-right: 5px;
`;

export const StyledFormButton = styled.button`
  padding: 10px 15px;
  background-color: #cd5c5c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  :hover {
    box-shadow: 0 0 10px rgba(205, 92, 92, 0.8);
  }

  &.active {
    border-radius: 5px;
  }
`;

export const StyledFormDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
