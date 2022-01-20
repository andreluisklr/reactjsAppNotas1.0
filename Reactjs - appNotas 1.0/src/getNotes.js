export function getNotes(){
    let notes = JSON.parse(window.localStorage.getItem('notes'));

    if(notes){
        return notes;
    }

    return [];
}