import { useState, useEffect } from "react"
import { Form, Header, Notes } from "./components"
import { getInitialData } from "./utils"

function App () {
  const [query, setQuery] = useState("")
  const [searchNotes, setSearchNotes] = useState([])
  const [notes, setNotes] = useState(getInitialData())

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived)
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived)

  useEffect(() => { setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))) }, [query, notes])

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes}/>
      <div className='note_app_body'>
        <Form updateNotes={setNotes}/>
        <Notes label='Catatan Aktif' notes={activeNotes} setNotes={setNotes}/>
        <Notes label='Arsip' notes={archivedNotes} setNotes={setNotes}/>
      </div>
    </>
  )
}

export default App
