import { showFormattedDate } from "../utils"
import Button from "./button"

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item))
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived }
        }
        return note
      })
    )
  }

  return (
    <div id={id} className='note_item'>
      <div className='note_item_content'>
        <h3 className='note_item_title'>{title}</h3>
        <p className='note_item_date'>{showFormattedDate(createdAt)}</p>
        <p className='note_item_body'>{body}</p>
      </div>
      <div className='note_item_action'>
        <Button eventHandler={() => deleteNote(id)} label='Delete'/>
        <Button eventHandler={() => toggleArchive(id)} label={archived ? "Pindahkan" : "Arsipkan"}/>
      </div>
    </div>
  )
}

export default Card
