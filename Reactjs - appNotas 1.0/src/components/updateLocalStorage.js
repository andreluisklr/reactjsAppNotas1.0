export function updateLocalStorage(newDada, setNoteStorage){
    localStorage.setItem('notes', JSON.stringify(newDada));

    setNoteStorage(newDada)
}