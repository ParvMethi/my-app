import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = ()=>{
        //console.log("Copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleSpace = ()=>{
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "success");
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: 
            props.mode ==='dark'?'grey':'white',color:  props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"  
            placeholder ="Enter Text Here"></textarea>
            </div>
            <button className="btn btn-success mx-1" onClick={handleUpClick}> UPPER CASE </button>
            <button className="btn btn-success mx-1" onClick={handleLoClick}> lower case </button>
            <button className="btn btn-success mx-1" onClick={handleCopy}> Copy to Clipboard </button>
            <button className="btn btn-success mx-1" onClick={handleSpace}> Remove Extra Spaces </button>
            <button className="btn btn-success mx-1" onClick={handleClearClick}> Clear </button>
            
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>Word Count : {text.split(" ").length} | Character Count : {text.length} </p>
            <p>Reading Time : {0.008 * text.split(" ").length} minutes</p>
            <h2>Preview:</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
        </div>
        </>
    )
}
