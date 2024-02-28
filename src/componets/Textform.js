import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
   
    let newText ="";
    setText(newText)
  }
  const handleOnChange = (event)=>{
   
    setText(event.target.value)
  }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container "style={{color: props.mode==='dark'?'white':'black'}} >
     <h1>{props.heading }</h1>
 
      <div className="container">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    
    
  </div>
   
  <div>
<button className="btn btn-primary mx-3 my-1"  onClick= {handleUpClick}>Convert to uppercash</button>
<button className="btn btn-primary mx-1 my-1"  onClick= {handleLoClick}>Convert to lowercash</button>
<button className="btn btn-primary mx-1 my-1"  onClick= {handleClearClick}>Clear Text</button>
   </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
