import React, {useState} from 'react'
import ListTodo from './components/ListTodo'
import Inputs from './components/Inputs'


const App = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) =>
  { 
    if(inputText!=="")
      setListTodo([...listTodo, inputText]);
  }

  const del = (key) =>{
    let newList = [...listTodo];
    newList.splice(key,1)
    setListTodo([...newList])
  }

  return (
    <div className='main'>
      <h1 className='heading'>To Do List</h1>
      <div className='tranaparent'>
        <Inputs addList={addList}/>
        <h2 className='sub-heading'>Your To-Do list </h2>
        {listTodo.map((listItem, i)=> { return(<ListTodo key={i} index={i} item={listItem} delItem={del}/>)})}
      </div>
    </div>
  )
}

export default App
