import Card from "./card"

const Notes = ({ label, notes, setNotes }) => {
  return (
    <>
      <h2 className='notes_heading'>{label}</h2>
      {notes.length === 0
        ? (<p className='notes_empty'>Tidak ada catatan</p>)
        : (<div className='notes_list'> {notes?.map((note) => (<Card key={note.id} action={setNotes} {...note} />))}</div>)
      }
    </>
  )
}

export default Notes
