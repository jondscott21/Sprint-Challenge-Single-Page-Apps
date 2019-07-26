import React from 'react'

export default function CharacterCard ({ character }) {
  console.log(character)
  return (
    <div className="character-card">
      <img src={character.image}></img>
      <h2>{character.name}</h2>
      <p>{character.species} {character.status}</p>
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
    );
  
}
