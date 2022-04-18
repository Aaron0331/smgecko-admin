import React, { useState } from "react";
import { db } from "../../firebase"
import './Edit.css'

const Edit = ({ location, isEdit, setIsEdit }) => {
  const [title, setTitle] = useState(isEdit.title)
  const [description, setDescription] = useState(isEdit.description)
  const onTitleChange = (e) => {
    const {target : { value }} = e
    setTitle(value)
  }
  const onDescChange = (e) => {
    const {target : { value }} = e
    setDescription(value)
  }
  const handleDoneClick = (e) => {
    e.preventDefault()
    db.collection(`${location}`).add({
      title: title,
      description: description,
      createdAt: Date.now()
    })
    setIsEdit(false)
  }
  const handleCancelClick = () => {
    setIsEdit(false)
  }
  const handleDeleteClick = () => {
    const ok = window.confirm("삭제하시겠습니까")
    if(ok){
      console.log("Delete")
      setIsEdit(false)
    }else{
      console.log("Delete canceled")
    }
  }


  return(
    <section>
      <div>{`Edit mode - ${location}`}</div>
      <div>{isEdit.description}</div>
      <input type="text" value={title} placeholder={isEdit.title} onChange={onTitleChange} />
      <input type="text" value={description} placeholder={isEdit.description} onChange={onDescChange} />
      <button onClick={handleDoneClick}>Done</button>
      <button onClick={handleCancelClick}>Cancel</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </section>
  )
}

export default Edit