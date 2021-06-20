import styled, { keyframes } from "styled-components";

const rotation = keyframes`
from{
        transform:rotate(0deg)
    }   
    to{
        transform: rotate(360deg);
    }
    
`;

const Spinner = styled.div`
  height: 50px;
  width: 50px;
  border: 3px solid ${(p) => p.theme.bodyFontColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
