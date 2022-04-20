import React from 'react'
import { useState } from 'react'

function Item(props) {
  const [checked, setChecked] = useState(false)
  function handleCheck(){
    setChecked(!checked)
  }
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" name="done" id="done" onChange={handleCheck} />
        <s>{checked?props.name:''}</s>
        {!checked?props.name:''}
        <br />
        <input type="submit" value="Delete" />
      </form>
    </div>
  )
}

export default Item