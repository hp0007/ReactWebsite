import {React , useState} from 'react'

const Input = (props) => {
    const [text,setText] = useState("");

    var handleInput = (e) => {
        setText(e.target.value)        
        props.parentcallback(text);
    }
    return(        
        <>
            {(() => {
                switch (props.maintype) {
                   case 'input':
                       return (
                         <input type={props.type} onChange={handleInput}></input>
                       )
                   case 'textarea':
                       return (
                         <textarea rows="4" cols="59"></textarea>
                       )
                   default:alert("error")                       
                }
       
             })()}
        </>
    )
}

export default Input
