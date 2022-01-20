export function pagination2(noteStorage){
    if(!noteStorage) return null;

    const notes = noteStorage.reverse();

    const totalNotes = notes.length;
    const notesPerPage = 5;
    const totalPages = Math.ceil(totalNotes / notesPerPage);

    let currentPage = 1;
    let firstNoteOfThePage = 0;

    const pages = [];

    while(currentPage <= totalPages){
        const page = [];

        for(let noteIndex = firstNoteOfThePage; noteIndex < firstNoteOfThePage + notesPerPage; noteIndex++){
            if(noteIndex >= totalNotes) break;
            page.push(notes[noteIndex]);
        }

        pages.push(page);
        currentPage++;
        firstNoteOfThePage += notesPerPage;
    }

    return pages;
}