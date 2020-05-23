document.addEventListener('DOMContentLoaded', () => {
    // we need to store the desktop Id so i can access the notes correspongind to that desktop
    // const desktopId
    const noteList = document.getElementById('savedNotes')
    const noteInfo = document.getElementById('newNote')
    const noteTitle = noteInfo.getElementsByClassName('noteTitle')[0]

    function renderNoteTitle(aNote) {
        let n = document.createElement('li')
        n.id = aNote.id
        n.innerHTML = `${aNote.title}`
        noteList.appendChild(n)
    }

    function renderNoteInfo(aNote) {
        noteTitle.innerHTML = `<h2>${aNote.title}</h2>`
        let n = document.createElement('li')
        n.innerHTML = `${aNote.content}
        <br>
        <button id="editNoteBtn">Edit this note</button>
        <button id="deleteNoteBtn">Delete this note</button>`
        noteTitle.appendChild(n)
    }

    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes =>{
        const myNotes = notes.filter( note =>{
            return note.desktop_id === 2 //steve Id here (desktopId)
        })
        myNotes.forEach(element => {
            renderNoteTitle(element)
        });
    })

    noteList.addEventListener('click', (e) =>{
        if(e.target.tagName === "LI"){
            fetch(`http://localhost:3000/notes/${e.target.id}`)
            .then(resp => resp.json())
            .then(note => {
                renderNoteInfo(note)
            })
        }
    })
})