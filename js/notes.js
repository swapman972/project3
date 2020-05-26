document.addEventListener('DOMContentLoaded', () => {
    // we need to store the desktop Id so i can access the notes correspongind to that desktop
    // const desktopId
    const noteList = document.getElementById('notesList')
    const noteInfo = document.getElementById('newNote')
    const noteTitle = noteInfo.getElementsByClassName('noteTitle')[0]
    
    function renderNoteTitle(aNote) {
        let n = document.createElement('li')
        n.setAttribute('class', ' pad5')
        n.innerHTML = `<a id=${aNote.id} data-id="note" class="font-noStyle" href="#${aNote.title}"> ${aNote.title}</a>`
        noteList.appendChild(n)
    }
    
    function renderNoteInfo(aNote) {
        while(noteTitle.firstChild){
            noteTitle.removeChild(noteTitle.firstChild)
        }
        noteTitle.innerHTML = `<h2>${aNote.title}</h2>`
        let n = document.createElement('p')
        n.innerHTML = `<a>${aNote.content}</a>
        <br>
        <br>
        <button data-id=${aNote.id} id="editNoteBtn">Edit this note</button>
        <button data-id=${aNote.id} id="deleteNoteBtn">Delete this note</button>
        `
        noteTitle.appendChild(n)
    }
    
    function renderAllNotes() { 
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
    }
    renderAllNotes()

    function returnEditForm() {
        const editForm = document.createElement('form')
        //You can have an entire table inside a form. You can have a form inside a table cell. 
        //You cannot have part of a table inside a form.
        editForm.className = "editNoteForm"
        editForm.innerHTML =`
        <table width="500" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td width="100%"><h3>Edit your Note!</h3></td>
            </tr>
            <tr>
                <td width="100%" valign="top">
                        <input class="addNoteTitle" 
                        type="text"
                        name="title"
                        value=""
                        placeholder="Edit your note title.."/>
                </td>
            </tr>
            <tr>
                <td width="100%" valign="top">
                    <textarea
                        class="addNoteContent"
                        type="text"
                        name="content"
                        value=""
                        placeholder="Edit your content..."></textarea>
                </td>
            </tr>
            <tr>
                <td width="100">
                    <input class="addNoteSubmit"
                    type="submit"
                    name="submit"
                    value="Edit Your Note"
                    class="editNoteSubmit"
                    />
                </td>
            </tr>
        </table>`
        return editForm
    }

    
    noteList.addEventListener('click', (e) =>{
        if(e.target.dataset.id === "note"){
            fetch(`http://localhost:3000/notes/${e.target.id}`)
            .then(resp => resp.json())
            .then(note => {
                renderNoteInfo(note)
            })
        }
    })
    
    document.addEventListener("click", (e) =>{
        if(e.target.id === "editNoteBtn"){
            let noteT = e.target.parentElement.parentElement.firstElementChild.innerText
            let noteC = e.target.parentElement.firstElementChild.innerText
            const editForm = returnEditForm()
            noteTitle.appendChild(editForm)
            editForm.dataset.id = e.target.dataset.id
            editForm.title.value = noteT
            editForm.content.value = noteC
            editForm.addEventListener('submit', (event)=> { //problem (does it twice)
                event.preventDefault()
                debugger
                fetch(`http://localhost:3000/notes/${e.target.dataset.id}`,{
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        "title": editForm.title.value,
                        "content": editForm.content.value
                    })
                })
                .then(resp => resp.json())
                .then(newNote => {
                    noteT = newNote.title
                    noteC = newNote.content
                    editForm.dataset.id = ''
                    editForm.title.value = ''
                    editForm.content.value = ''
                    noteList.innerHTML = ""
                    renderAllNotes()
                    renderNoteInfo(newNote)
                }) 
            })
        } else if (e.target.id === "deleteNoteBtn"){
            fetch(`http://localhost:3000/notes/${e.target.dataset.id}`,{
                method: "DELETE"
            })
            .then(resp => resp.json())
            .then(json => {
                for(let i=0; i < noteList.children.length; i++){
                    if(parseInt(noteList.children[i].firstChild.id) === json.id){
                        noteList.removeChild(noteList.children[i])
                        noteTitle.innerHTML =""
                    }
                }
            })
        }
    })

    const newNoteBtn = document.getElementById('newNoteBtn')
    const newForm = document.createElement('form')
    //You can have an entire table inside a form. You can have a form inside a table cell. 
    //You cannot have part of a table inside a form.
    newForm.className = "addNoteForm"
    newForm.innerHTML =`
    <table width="500" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td width="100%"><h3>Create your Note!</h3></td>
        </tr>
        <tr>
            <td width="100%" valign="top">
                    <input class="addNoteTitle" 
                    type="text"
                    name="title"
                    value=""
                    placeholder="Enter a note title.."/>
            </td>
        </tr>
        <tr>
            <td width="100%" valign="top">
                <textarea
                    class="addNoteContent"
                    type="text"
                    name="content"
                    value=""
                    placeholder="Enter your content..."></textarea>
            </td>
        </tr>
        <tr>
            <td width="100">
                <input class="addNoteSubmit"
                type="submit"
                name="submit"
                value="Create New Note"
                class="addNoteSubmit"
                 />
            </td>
        </tr>
    </table>`
    
    newNoteBtn.addEventListener('click', () =>{
        if(noteTitle.firstElementChild && noteTitle.firstElementChild.tagName === "FORM"){
            noteTitle.removeChild(noteTitle.firstElementChild)
        } else if(noteTitle.firstElementChild) {
            while (noteTitle.firstElementChild){
                noteTitle.removeChild(noteTitle.firstElementChild)
            }
            noteTitle.appendChild(newForm)
        } else {
            noteTitle.appendChild(newForm)
        }
    })
        
    newForm.addEventListener('submit', (e)=> {
        e.preventDefault()
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "title": newForm.title.value,
                "content": newForm.content.value,
                "desktop_id": 2 //should be desktop_id store form earlier
            })
        })
        .then(resp => resp.json())
        .then(newN => {
            renderNoteTitle(newN)
            renderNoteInfo(newN)
            newForm.title.value = ''
            newForm.content.value = ''
        })
    })
})
