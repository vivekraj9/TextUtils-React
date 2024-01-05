import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpCase =()=>{
        //console.log("Uppercase was cliked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowCase =()=>{
        //console.log("Uppercase was cliked" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText =()=>{
        //console.log("Uppercase was cliked" + text);
        let newText=' ';
        setText(newText);
    }

    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'#EFF7FF':'#140A14'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'#558C8C':'#531937', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'? '#140A14' : '#558C8C'}} onClick={handleUpCase}><strong>Convert to uppercase</strong></button>
            <button className="btn btn-primary mx-3" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'? '#140A14' : '#558C8C'}} onClick={handleLowCase}><strong>Convert to lowercase</strong></button>
            <button className="btn btn-primary mx-3" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'? '#140A14' : '#558C8C'}} onClick={clearText}><strong>Clear text</strong></button>
            <button className="btn btn-primary mx-3" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'? '#140A14' : '#558C8C'}} onClick={handleCopy}><strong>Copy text</strong></button>
            
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'#EFF7FF':'#140A14'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
