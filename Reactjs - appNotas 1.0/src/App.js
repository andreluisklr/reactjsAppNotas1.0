import React from 'react';
import { Header } from './components/Header';
import styled from 'styled-components';
import {Notes} from './components/Notes';
import {ModalViewNote} from './components/ModalViewNote';
import {ModalAddNewNota} from './components/AddNewNote';
import {ApplicationStatesContext} from './components/ApplicationStatesContext';
import {getNotes} from './getNotes.js';

function App() {
	const [modalViewNote, setModalViewNote] = React.useState({isOpen: false, noteId: null});
	const [modalAddNewNote, setModalAddNote] = React.useState(false);
	const noteStorage = React.useState(getNotes());

  return (
	<ApplicationStatesContext.Provider value={{modalViewNote, setModalViewNote, modalAddNewNote, setModalAddNote, noteStorage}}>
		<Wrapper>
			<Header></Header>

			<Notes></Notes>

			<ModalViewNote></ModalViewNote>
			
			{modalAddNewNote && <ModalAddNewNota ></ModalAddNewNota>}
	
		</Wrapper>
	</ApplicationStatesContext.Provider>
  );
}

const Wrapper = styled.div`
	max-width: 940px;
	margin: 0 auto;
`;

export default App;
