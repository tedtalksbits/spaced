import * as React from "react";
import { DeckLink, Navigation } from "./NavStyles";
import styled from "styled-components";
import { GearSix, House, Pencil } from "phosphor-react";
import { decks } from "../../data/decks";

const LinkFlexBox = styled.div``;
interface INavProps {}

const Nav: React.FC<INavProps> = () => {
  return (
    <Navigation>
      <LinkFlexBox className="link-flex">
        <DeckLink to="/">
          <House size={20} /> Home
        </DeckLink>
      </LinkFlexBox>
      {decks.map((deck, key) => (
        <LinkFlexBox className="link-flex" key={key}>
          <DeckLink to={`/deck/${deck.id}`}>{deck.title}</DeckLink>
        </LinkFlexBox>
      ))}
      <LinkFlexBox className="link-flex">
        <DeckLink to="/edit">
          <Pencil size={20} /> Edit Decks
        </DeckLink>
      </LinkFlexBox>
      <LinkFlexBox className="link-flex">
        <DeckLink to="/settings">
          <GearSix size={20} /> Settings
        </DeckLink>
      </LinkFlexBox>
    </Navigation>
  );
};

export default Nav;
