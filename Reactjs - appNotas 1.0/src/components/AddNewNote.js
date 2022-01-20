import React from 'react';
import styled from 'styled-components';
import {CloseModal} from './ModalViewNote.js';
import { addNote } from './addNote';
import {ApplicationStatesContext} from './ApplicationStatesContext';
import {idGenerator} from '../idGenerator.js';

export function ModalAddNewNota(props){
    const {setModalAddNote, noteStorage} = React.useContext(ApplicationStatesContext);

    //const setModalAddNewNoteIsOpen = props.setModalAddNewNoteIsOpen;
    const [message, setMessage] = React.useState(false);
    const setStorage = props.storage;

    const [titleLimit, setTitleLimit] = React.useState(0);
    const [contentLimit, setContentLimit] = React.useState(0);

    return(
        <Wrapper>
            <Center>
                <CloseModal
                    onClick={
                        () => {
                            setModalAddNote(false);
                        }
                    }
                >
                    X
                </CloseModal>

                <Field>
                    <Label htmlFor="title">
                        Title: 
                    </Label>

                    <Input 
                        id="title" 
                        type="text"
                        onChange={
                            (event) => {
                                setTitleLimit(event.target.value.length);
                            }
                        }
                    />
                    <CharacterLimit>caracteres: {titleLimit} / 80</CharacterLimit>
                </Field>

                <Field>
                    <Label htmlFor="content">
                        Content:
                    </Label>

                    <TextArea
                        id="content"
                        onChange={
                            (event) => {
                                setContentLimit(event.target.value.length);
                            }
                        }
                     >
                     </TextArea>
                     <CharacterLimit>caracteres: {contentLimit} / 500</CharacterLimit>
                </Field>

                <Save
                    onClick={() => {
                        const title = document.querySelector('#title').value;
                        const content = document.querySelector('#content').value;

                        const titleCharacterLimit =  85;
                        const contentCharacterLimit = 500;
            
                        if(title.length && content.length !== 0 && (title.length < titleCharacterLimit && content.length < contentCharacterLimit)){
                            addNote({id: idGenerator(),title, content}, noteStorage);
                            setModalAddNote(false);
                        }else{
                            setMessage(true);
                        }
                     }
                    }
                >
                    SAVE
                </Save>

                {message && <Message>Empty fields or exceeded characters </Message>}
            </Center>
        </Wrapper>
    );
}

const CharacterLimit = styled.p`
    font-size: 14px;
    margin-top: 5px;
`;

const Message = styled.p`
    margin-top: 10px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background: rgba(0, 0, 0, 0.5);
`;

const Center = styled.div`
    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: column;
    align-content: strech;

    position: fixed; 

    background-color: #F7F7F7;
    padding: 20px;
    border-radius: 10px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 80%;
    height: 30px;

    font-size: 14px;
    padding: 0 10px;

    background-color: #E4E0E0;
    
    outline: none;
    border: none;
    border-radius: 5px;

    &:focus{
        border: 1px solid #FEBC01;
    }
`;

const Field = styled.div`
    flex: 0 0 auto;
    margin: 10px 0;

`;

const TextArea = styled.textarea`
    width: 80%;
    height: 200px;
    
    padding: 10px;
    resize: none;
    font-size: 14px;
    
    background-color: #E4E0E0;
    
    outline: none;
    border: none;
    border-radius: 5px;

    &:focus{
        border: 1px solid #FEBC01;
    }
`;

const Save = styled.button`
    margin-top: 10px;
    padding: 10px;
    cursor: pointer;

    font-size: 15px;
    font-weight: bold;
    color: white;

    outline: none;
    border: none;
    border-radius: 10px;
    
    background-color: #FEBC01;
`;