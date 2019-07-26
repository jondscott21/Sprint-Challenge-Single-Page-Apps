import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Card, Icon} from 'semantic-ui-react';
import styled from 'styled-components'

export default function CharacterCard ({ character }) {
  console.log(character)

  const P = styled.p`
    color: grey;
  `

  return (
    <Card>
      <img src={character.image}></img>
      <h2>{character.name}</h2>
      <P>{character.species} {character.status}</P>
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
      <Link to={`/episodes/${character.id}/character`} className='grey-link'><Icon name='video'></Icon>Episodes</Link>
    </Card>
    );
  
}
