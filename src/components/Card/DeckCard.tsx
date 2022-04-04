import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: var(--surface-4);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(67, 112, 156, 0.123) 0px 8px 24px;
  padding: 1rem;
  /* max-inline-size: 20ch; */
`;
const DeckCard: React.FC = () => {
  return (
    <Container>
      <h3>What is the ______?</h3>
    </Container>
  );
};

export default DeckCard;
