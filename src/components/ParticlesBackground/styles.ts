import styled from "styled-components";

export const Canvas = styled.canvas`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #082032;
  z-index: -1;
  
  @media (max-width: 1024px) {
    & {
      display: block;
    }
  }
`