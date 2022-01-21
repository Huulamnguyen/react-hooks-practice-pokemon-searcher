import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokes, setPokes] = useState([]);
  const [ issueRequest, setIssueRequest ] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState("")

  function loadsData(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => setPokes(data))
  }

  useEffect(()=> {
    loadsData()
  }, [issueRequest])

  // SEARCHING: Display Pokes following by the input value
  const displayPokes = pokes.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // HANDLE ADD POKE
  function handleAddPoke(newPoke){
    const updatedPokesArray = [...pokes, newPoke]
    setPokes(updatedPokesArray)
    setIssueRequest(!issueRequest)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPoke}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokes={displayPokes}/>
    </Container>
  );
}

export default PokemonPage;
