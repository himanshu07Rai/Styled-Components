import styled, { css } from "styled-components";
const largeStyle = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      font-size: 1.5rem;
      border-radius: 5px;
    `;
  } else {
    return css`
      padding: 8px;
      font-size: 1rem;
      border-radius: 4px;
    `;
  }
};
const Button = styled.button`
  ${(p) => console.log(p)};
  color: #fff;
  background: ${(p) => (p.secondary ? "#f55" : "#55f")};
  font-weight: bold;
  ${largeStyle}
  box-shadow: none;
  border: none;
  width: 80%;
  display: block;
  margin: auto;
  cursor: pointer;
  &:disabled {
    background: #eee;
    color: #666;
    cursor: not-allowed;
  }
`;

export { Button };
