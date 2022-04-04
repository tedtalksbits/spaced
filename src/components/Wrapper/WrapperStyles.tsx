import styled from "styled-components";

export const MainWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr min(99ch, 100%) 1fr;
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow-y: scroll;
  flex: 1;
  & > * {
    grid-column: 2;
  }
  &.full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`;
