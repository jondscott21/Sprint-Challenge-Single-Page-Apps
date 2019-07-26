import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setCharacters(res.data.results)
    })
  }, [])

  return <section className='character-list grid-view'>

      {characters.map(character => <CharacterCard key={character.id} character={character} />)}
    </section>

}
