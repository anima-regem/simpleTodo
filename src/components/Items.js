import React from 'react'
import Item from './Item'

function Items(props) {
    const list = props.list
    const listItems = list.map((val, index) => <Item key={index} name={val}/>)
  return (
    <div>
{listItems}
    </div>    
    )
}

export default Items