import React from "react";
import styled from "styled-components";
import {Wrapper, Title, Content, Creation} from "./Note";
import { ApplicationStatesContext } from "./ApplicationStatesContext";
import {updateLocalStorage} from './updateLocalStorage.js';

const WrapperModal = styled(Wrapper)`
    width: 940px;
    height: auto;
    max-height: 100%;
    max-width: 95%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: visible;
    position: absolute;
    cursor: auto;
`; 

const TitleModal = styled(Title)`
    /*margin-top: 30px;*/
`;

export function ModalViewNote(props){
    const {modalViewNote, setModalViewNote} = React.useContext(ApplicationStatesContext);
    const {noteStorage: [noteStorage, setNoteStorage]} = React.useContext(ApplicationStatesContext);

    let note = noteStorage.find(note => note.id === modalViewNote.noteId);

    return modalViewNote.isOpen && (
       <Modal>
             <WrapperModal className='note' >
                <CloseModal onClick={() => {
                    setModalViewNote({...modalViewNote, isOpen: false})
                }}>
                    X
                </CloseModal>

                <TitleModal>{note.title}</TitleModal>

                <Content>
                    {note.content}
                </Content>

                <DeleteNote
                    onClick={() => {
                       let newNoteStorage = noteStorage.filter(note => note.id !== modalViewNote.noteId)

                        updateLocalStorage(newNoteStorage, setNoteStorage);
                        setModalViewNote({...modalViewNote, isOpen: false})
                        window.location.reload();
                    }}
                >
                    Delete Note
                </DeleteNote>

                <Creation>
                    <p>{note.creation.hour}</p>
                    <p>{note.creation.date}</p>
                </Creation>
            </WrapperModal>
        </Modal>
    );
}

const DeleteNote = styled.button`
    font-size: 14px;
    align-self: end;
    border: none;
    padding: 2px 5px;
    border-radius: 5px;
`;

const Modal = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
   
    background: rgba(0, 0, 0, 0.5);
`;

export const CloseModal = styled.button`
    position: absolute;
    right: 15px;
    top: 5px;

    border: none;
    background: none;
    
    font-size: 20px;
    color: black;
    cursor: pointer;
`;