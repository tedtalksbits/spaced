import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;

  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
const CardGrid: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardGrid;
