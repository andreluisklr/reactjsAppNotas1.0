const months = {
    "0": "JANUARY",
    "1": "FEBRUARY",
    "2": "MARCH",
    "3": "APRIL",
    "4": "MAY",
    "5": "JUNE",
    "6": "JULY",
    "7": "AUGUST",
    "8": "SEPTEMBER",
    "9": "OCTOBER",
    "10": "NOVEMBER",
    "11": "DECEMBER"
}

export function addNote(data, noteStorage){
    const [getNoteStorage, setNoteStorage] = noteStorage;

    const datas = {...data};
   
    const date = new Date();

    datas.creation = {
        hour: `${date.getHours()}:${date.getMinutes()}`,
        date: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    };

    let notes = localStorage.getItem('notes');

    if(notes){
        const notes = JSON.parse(localStorage.getItem('notes'));
        notes.push(datas);
        setNoteStorage(notes);
        localStorage.setItem('notes', JSON.stringify(notes))
    }else{
        setNoteStorage([datas]);
        localStorage.setItem('notes', JSON.stringify([datas]))
    }
}

