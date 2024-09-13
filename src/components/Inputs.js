import React, { useState } from 'react'

const Inputs = (props) => {
    const [inputText, setInoutText] = useState('');

    const handlePress = (e) =>
    {
        if(e.keyCode===13)
        {
            props.addList(inputText)
            setInoutText("")
        }    

    }
  return (
    <div className='container'>
      <input type="text" value={inputText} className='input-text' onChange={e=>{setInoutText(e.target.value)}} onKeyDown={handlePress}/>
      <button className='add-button' 
      onClick={()=> {
        props.addList(inputText)
        setInoutText("")
        }}> + </button>    
    </div>  
    )
}

export default Inputs

