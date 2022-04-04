import { useState } from "react";
import styled, { css } from "styled-components";

const FlipCardWrapper = styled.div``;
const FlipCardContainer = styled.div`
  position: relative;
  min-height: 200px;
  margin: 1rem 0;
`;
const FlipCard = styled.div`
  transition: all ease 0.4s;
  position: absolute;
  width: 100%;
  /* height: 100%; */
  transform-style: preserve-3d;

  &.show {
    transform: rotateY(180deg);
  }
`;
const FlipCardFrontBackStyles = css`
  position: absolute;
  width: 100%;
  /* height: 100%; */
  backface-visibility: hidden;
  background: var(--surface-4);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(67, 112, 156, 0.123) 0px 8px 24px;
  padding: 1rem;
`;
const FlipCardFront = styled.div`
  ${FlipCardFrontBackStyles};
`;

const FlipCardBack = styled.div`
  ${FlipCardFrontBackStyles};
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .back-info {
    margin-top: 2rem;
    color: var(--text-2);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    button {
      background-color: var(--brand-1);
      padding: 0.45rem;
      border-radius: 10px;
      color: var(--surface-3);
      cursor: pointer;
      border: none;
    }
  }
  .back-info-options {
    display: flex;
    gap: 1rem;
  }
`;
interface CardProps {
  front: string;
  back: string;
}
const Card: React.FC<CardProps> = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <FlipCardWrapper className="card-wrapper">
      <FlipCardContainer className={""} onClick={handleFlip}>
        <FlipCard className={isFlipped ? "show" : ""}>
          <FlipCardFront className={""}>{front}</FlipCardFront>
          <FlipCardBack className="back front_back">
            {back}
            <div className="back-info">
              <p>Did you remember?</p>
              <div className="back-info-options">
                <button>Yes</button>
                <button>Not really</button>
                <button>No</button>
              </div>
            </div>
          </FlipCardBack>
        </FlipCard>
      </FlipCardContainer>
    </FlipCardWrapper>
  );
};

export default Card;
