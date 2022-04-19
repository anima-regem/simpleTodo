import React from 'react'
import Items from './Items'
import { useState } from 'react'

function Sections() {
    const [list, setList] = useState([])
    const [task, setTask] = useState("")

    function handleAdd(e){
        setList(
            [...list, task]
        )
        e.preventDefault()
        setTask("")
    }
    function handleChange(e){
        setTask(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleAdd}>
        <label htmlFor="name">Task :</label>
        <input type="text" placeholder='Add New Task' id='name' value={task} onChange={handleChange}/>
        <br />
        <br />
        <button >Add</button>
        </form>
        <Items list={list}/>
    </div>
  )
}

export default Sections