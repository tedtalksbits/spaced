import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import CardGrid from "../components/CardGrid/CardGrid";
import { useState } from "react";
import { decks } from "../data/decks";
import { useEffect } from "react";

const Deck = () => {
  interface DeckStateData {
    id: number;
    title: string;
    cards: {};
  }
  const { id } = useParams();
  const [cards, setCards] = useState<DeckStateData[]>([]);
  useEffect(() => {
    setCards([...decks.filter((deck) => deck.id === Number(id))]);
    console.log(cards);
  }, [id]);

  return (
    <div>
      Deck Name Here
      <CardGrid></CardGrid>
    </div>
  );
};

export default Deck;
