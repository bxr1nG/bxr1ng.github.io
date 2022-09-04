import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  @media (orientation: portrait) {
    & {
      flex-direction: column;
    }
  }
`

export const Block = styled.div<{ image: string }>`
  position: relative;
  cursor: pointer;
  flex: 1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: flex 400ms ease;

  &:hover {
    flex: 4;
  }

  @media (orientation: portrait) {
    &:hover {
      flex: 3;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      flex: 1;
    }
  }
`

export const ColorBackground = styled.div<{ color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  opacity: 1;
  transition: 350ms opacity 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      opacity: 1;
    }
  }
`

export const Link = styled.a`
  color: white;
  font-size: 2rem;
  text-decoration: none;
`