import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`

export const Title = styled.h1`
  display: inline;
  font-weight: 300;
  text-align: center;
  color: #fff;
  letter-spacing: 0.05rem;
  line-height: 1.25;
  cursor: default;
  user-select: none;

  @media (min-width:320px)  {
    font-size: 1.5rem;
  }
  @media (min-width:801px)  {
    font-size: 2rem;
  }
  @media (min-width:1025px) {
    font-size: 2.5rem;
  }
`

export const ColorizedTitle = styled(Title)`
  color: #ff4c29;
  font-weight: 400;
`