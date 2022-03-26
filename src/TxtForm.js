import React, { useState } from 'react'



export default function TxtForm(props) {
    const [text, setText] = useState('Enter your text here');
    // setText('This is how we will change the value of "text" variable that declared above');

    const convertUpper = () => {
        // console.log("'Convert to Upper Case' button was clicked. " + text)
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }
    const convertLower = () => {
        // console.log("'Convert to Upper Case' button was clicked. " + text)
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }
    const handleClick = () => {
        // if (text === "Enter your text here")
        setText('');

    }
    const handleCopy = () => {
        var txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
    const handleExtraSpaces = () => {
        let newTxt = text.split(/[ ]+/)
        setText(newTxt.join(" "));
    }

    const handleOnchange = (event) => {
        // console.log("On Change.");
        setText(event.target.value);
        // console.log(text.split(" "));
    }

    return (
        <div>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <center>
                    <h1 className='my-3'>{props.heading}</h1>
                </center>
                <textarea className="my-2 form-control" value={text} onChange={handleOnchange} onClick={handleClick} style={{ borderColor: props.mode==='light'? 'black':'white', background: props.mode === 'dark' ? '#08264a75' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" />

                <button type="button" className={`my-2 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={convertUpper}>Convert to UPPER CASE</button>

                <button type="button" className={`my-2 mx-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={convertLower}>Convert to lower case</button>

                <button type="button" className={`my-2 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={handleCopy}>Copy Text</button>

                <button type="button" className={`my-2 mx-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Summary</h2>
                <ul>
                    <li>{text.split(" ").length} Words.</li>
                    <li>{text.length} Characters.</li>
                    <li>{text.split(" ").length - 1} Spaces.</li>
                    <li>On average, {0.008 * text.split(" ").length} minutes require to read it.</li>
                </ul>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : null}</p>
            </div>
        </div>
    )
}
