import React from 'react'
import {Link} from 'react-router-dom';
import {Card, Icon} from 'semantic-ui-react';
import styled from 'styled-components'

export default function EpisodeCard (props) {
  const { name, air_date, episode, characters } = props.episode
  console.log(props.episode)
  const P = styled(Link)`
    background: lightgrey;
    width: 35%;
    margin-left: 65%;
    position: absolute;
    bottom: 1px;
    color: black;
    
    &:hover {
        color: black;
    }
  `;
  
  return (
    <Card>
      <h2>{name}</h2>
      <p>{air_date}</p>
      <p>{episode}</p>
      <P to="/characters">{characters.length} Characters</P>
    </Card>
    
  );
}