import React, { useState, useEffect } from 'react'
import { db } from './firebase'


const Dashboard = () => {
  const [tab, setTab] = useState("notice")
  const [list, setList] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const onClick = (e) => {
    e.preventDefault()
    const clicked = e.target.textContent
    setTab(clicked)
  }
  useEffect(()=>{
    db.collection(`${tab}`).onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }))
      setList(dataArray)
    })
  },[tab])
  const isToggled = (e) => {
    setIsEdit(e)
  }

  console.log(list)

  return(
    <div>
      hello
    </div>
  )
}

export default Dashboard