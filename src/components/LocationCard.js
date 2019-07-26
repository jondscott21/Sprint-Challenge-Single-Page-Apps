import React from 'react'
import {Card, Icon} from 'semantic-ui-react';
import styled from 'styled-components'

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props.location
  const Span = styled.span`
    background: lightgrey;
    width: 30%;
    margin-left: 70%;
  `
  
  return (
    <Card>
      <h2>{name}</h2>
      <span>{type} - {dimension}</span>
      <Span>{residents.length} Residents</Span>
    </Card>
    
  );
}
