import React from "react";
import styled from "styled-components";
import {ApplicationStatesContext} from './ApplicationStatesContext';

export function Header(props){
  const {setModalAddNote} = React.useContext(ApplicationStatesContext);

  return(
    <HeaderStyle>
      <Heading>Notes</Heading>
      <AddNewNoteButton 
      onClick={
        () => {
          setModalAddNote(true);
        }
      }>
        Add New Note
      </AddNewNoteButton>
    
    </HeaderStyle>
  );
}

const Heading = styled.h1`
	margin: 0 0 0 0;
	font-size: 30px;
`;

const HeaderStyle = styled.header`
    max-width: 100%;
    height: 100px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;

    padding: 10px;

    @media(max-width: 500px) {
		height: auto;
	  }
`; 

const AddNewNoteButton = styled.button`
	padding: 10px 30px;

	font-size: 15px;
	font-weight: bold;
	background-color: #FEBC01;
	color: white;

	border: none;
	border-radius: 10px;
	cursor: pointer;

	@media(max-width: 500px) {
		margin-top: 10px;
		padding: 5px;
		font-size: 13px;
	}
	`;