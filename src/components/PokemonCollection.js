import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokes}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokes.map(poke => <PokemonCard key={poke.id} poke={poke}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
