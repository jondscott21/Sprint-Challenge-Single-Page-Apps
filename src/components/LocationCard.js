import React from 'react'
import {Card, Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props.location
  const Span = styled(Link)`
    background: lightgrey;
    width: 30%;
    margin-left: 70%;
    color: black;
  `
  
  return (
    <Card>
      <h2>{name}</h2>
      <span>{type} - {dimension}</span>
      <Span to="/characters">{residents.length} Residents</Span>
    </Card>
    
  );
}
