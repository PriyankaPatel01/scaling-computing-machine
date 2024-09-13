import React from 'react'

const ListTodo = (props) => {
  return (
    <div>
        <li className='list-items'>
          <input type="checkbox" className='check'/>
            {props.item}
            <span><i className="fa-solid fa-trash delete" onClick={e=>{ props.delItem(props.index)}}></i></span>
        </li>
      
    </div>
  )
}

export default ListTodo
