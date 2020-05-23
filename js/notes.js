document.addEventListener('DOMContentLoaded', () => {
    // we need to store the desktop Id so i can access the notes correspongind to that desktop
    // const desktopId
    const notelist = document.getElementById('savedNotes')
    const noteInfo = document.getElementById('newNote')
    const noteTitle = noteInfo.getElementsByClassName('noteTitle')[0]

    function renderNoteTitle(aNote) {
        let n = document.createElement('li')
        n.innerHTML = `${aNote.title}`
        notelist.appendChild(n)
    }

    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes =>{
        const myNotes = notes.filter( note =>{
            return note.desktop_id === 5
        })
        myNotes.forEach(element => {
            renderNoteTitle(element)
        });
    })
})