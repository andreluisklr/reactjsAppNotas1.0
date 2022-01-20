import React from "react";
import styled from "styled-components";
import {Note} from './Note';
import {ApplicationStatesContext} from './ApplicationStatesContext';
/*import { ModalViewNote } from "./ModalViewNote";*/
import { pagination2 } from "../pagination2";

const NotesStyle = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
`;

export function Notes(props){
    const {noteStorage: [noteStorage, setNoteStorage], modalViewNote, setModalViewNote} = React.useContext(ApplicationStatesContext);
    const [currentPage, setCurrentPage] = React.useState(0);


    let pages = pagination2(noteStorage);
  
    const [elements, setElements] = React.useState(null);

    React.useEffect(() => {
        pages =  pagination2(noteStorage);
    }, [noteStorage])

    React.useEffect(() => {
        function render(){
            const notePerPage = 4;
            //const lastIndex = storage.length-1;
    
            const elements = [];
    
            for(let noteIndex = 0; noteIndex < pages[currentPage].length; noteIndex++){
                const item = pages[currentPage][noteIndex];
                const index = noteIndex;
              
                elements.push(
                    <Note data-note={item.id} key={item.id} title={item.title} content={item.content} creation={{hour: item.creation.hour, date: item.creation.date}}>
                    {item.id}
                    </Note>
                );
            }

            setElements(elements);
        }

        if(pages && pages.length !== 0){
            render();
        }

    }, [currentPage, noteStorage])

    function identifyNote(event){
        const element = event.target;
        const parentElement = element.parentElement;

        const note = {
            element: element.classList.contains('note'),
            parentElement: parentElement.classList.contains('note')
        }

        if(element.classList.contains('note')){
            setModalViewNote({...modalViewNote, isOpen: true, noteId: element.dataset.note});
        }else if(parentElement.classList.contains('note')){
            setModalViewNote({...modalViewNote, isOpen: true, noteId: parentElement.dataset.note});
        }
    } 
    
   if(!elements){
        return <NothingToShow>
                    nothing to show,
                    write your first note 
                </NothingToShow> 
   }

    return (
        <div onClick={identifyNote} >  
            <NotesStyle>
                {elements}
            </NotesStyle>
            
            <Buttons>
                <Previous 
                    onClick={() => {
                            if(currentPage > 0){
                                setCurrentPage(currentPage - 1);
                            }
                        }
                    } 
                >
                    PREVIOUS
                </Previous>

                <Next
                    onClick={() => {
                            if(currentPage < pages.length-1){
                                setCurrentPage(currentPage + 1);
                            }
                        }
                    }
                >
                    NEXT
                </Next>
                    
            </Buttons>
        </div>
        )}

const NothingToShow = styled.p`
    margin-left: 10px;
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    position: relative;
    top: 10px;
    left: 0px;

    padding-bottom: 10px;
`;

const Next = styled.button`
    align-self: end;
    
    color: black;
	font-size: 10px;
	font-weight: bold;

	background-color: #FEBC01;
	padding: 10px 20px;

	border: none;
	border-radius: 10px;
	cursor: pointer;
    
`;

const Previous = styled.button`
    align-self: end;
    
    color: black;
	font-size: 10px;
	font-weight: bold;
	
	background-color: #FEBC01;
	padding: 10px 20px;
    margin-right: 10px;
	
    border: none;
	border-radius: 10px;
	cursor: pointer;
`;