import React, { useState } from 'react'

export default function Textarea(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const clearText = () => {
        let newText = ('');
        setText(newText);
    };
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));

    };
    const handleOnChange = (e) => {
        setText(e.target.value);

    };
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>

                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Upper Case</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert To Lower Case</button>
                <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div> <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>

            </div>
        </>
    )
}

