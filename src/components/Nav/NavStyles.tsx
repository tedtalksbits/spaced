import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Navigation = styled.nav`
  inline-size: 10rem;
  block-size: 100vh;
  background-color: var(--surface-4);

  @media screen and (min-width: 1100px) {
    inline-size: 20rem;
  }
`;
export const DeckLink = styled(NavLink)`
  display: flex;
  padding: 0.5rem;
  transition: all ease 0.25s;
  gap: 0.3rem;
  &:hover {
    background: var(--surface-1);
    border-radius: 0 20px 20px 0;
  }
`;
