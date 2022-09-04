import {FC} from "react";
import styled from "styled-components";

export const StyledIconFactory = (icon: FC) => styled(icon)`
  width: 3rem;
  height: 3rem;
  fill: white;
`