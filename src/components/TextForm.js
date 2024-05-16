import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick=()=>{
        //console.log("Uppercase was clicked" + text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleCopyClick=()=>{
        // var text=document.getElementById("myBox")
        // text.select()
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "success");
       ;
    }
    //the text is split into array when there is extra space or just space based on RE and then joined by single space
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    const handleClearClick=()=>{
        //console.log("Uppercase was clicked" + text)
        let newText=('');
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }
    const handleOnChange=(event)=>{
        //console.log("On Change")
        setText(event.target.value)

    }
    const [text,setText]=useState('')/*here useState is used to update the given text using setText*/
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
        {<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="5"></textarea>/*  the value inside the text initially is obtained using useState,text needs to be changed for that onChange is used  */}
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button> 
        {/* button onclicking calls function handleUpClick  */}
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
       
        
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"No Text to Preview"}</p>
        </div>
    </>
    
  )
}
