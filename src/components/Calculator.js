import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'

function Calculator() {
    const [value,setValue]=useState('')
    const [result,setResult]=useState('')

    function final(){
        setValue(eval(value))
        setResult(eval(value))
    }
    
    const inputRef=useRef(null)
    const FocusOn=()=>{
        inputRef.current.focus()
    }
    useEffect(()=>{
        FocusOn()
    })
  return (
    <div>
        <center className='bg'>
        <input type='text' className='inp' value={value} 
        onChange={e=>setValue(e.target.value)}  
        placeholder='Enter the values' 
        ref={inputRef}
        />
        <h1>{result}</h1>
        <button onClick={()=>setValue('')}>C</button>
        <button onClick={()=>setValue(value+'%')}>%</button>
        <button onClick={()=>setValue(value.slice(0,-1))}>bs</button>
        <button onClick={()=>setValue(value+'/')}>/</button>
        <br/>
        <button onClick={()=>setValue(value+'7')}>7</button>
        <button onClick={()=>setValue(value+'8')}>8</button>
        <button onClick={()=>setValue(value+'9')}>9</button>
        <button onClick={()=>setValue(value+'*')}>*</button>
        <br/>
        <button onClick={()=>setValue(value+'4')}>4</button>
        <button onClick={()=>setValue(value+'5')}>5</button>
        <button onClick={()=>setValue(value+'6')}>6</button>
        <button onClick={()=>setValue(value+'-')}>-</button>
        <br/>
        <button onClick={()=>setValue(value+'1')}>1</button>
        <button onClick={()=>setValue(value+'2')}>2</button>
        <button onClick={()=>setValue(value+'3')}>3</button>
        <button onClick={()=>setValue(value+'+')}>+</button>
        <br/>
        <button onClick={()=>setValue(value+'00')}>00</button>
        <button onClick={()=>setValue(value+'0')}>0</button>
        <button onClick={()=>setValue(value+'.')}>.</button>
        <button onClick={final}>=</button>
    </center>
    </div>
  )
}

export default Calculator