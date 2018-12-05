import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";

const Logo = styled.div`
  font-size: 2em; 
`

const Bar = styled.div`
  display: grid; 
  margin-bottom: 40px; 
  grid-template-columns: 180px auto 150px 150px; 
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  &:hover {
    color: #03ff03;
  } 
  ${props => props.active && css`
    text-shadow: 0px 0px 60px white,0px 0px 60px white;
    color: #03ff03;
  `}
  ${props => props.hidden && css`
    display: none; 
  `}
`

function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
  return (
    <AppContext.Consumer>
      {({firstVisit, page, setPage}) => (
        <ControlButtonElem
          active={page === name}
          onClick={()=> setPage(name)}
          hidden={firstVisit && name === 'dashboard'}
        >
          {toProperCase(name)}
        </ControlButtonElem>
        )}
    </AppContext.Consumer>
  )
}

export default function(){
  return (
    <Bar>
      <Logo> CryptoTRKR </Logo>
      <div/>
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/>
    </Bar>
  );
}
