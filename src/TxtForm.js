import React, { useState } from 'react'



export default function TxtForm(props) {
    const [text, setText] = useState('Enter your text here');
    // setText('This is how we will change the value of "text" variable that declared above');

    const convertUpper = () => {
        // console.log("'Convert to Upper Case' button was clicked. " + text)
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted to UPPER CASE.", "success");
    }
    const convertLower = () => {
        // console.log("'Convert to Upper Case' button was clicked. " + text)
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to lower case.", "success");
    }
    const handleClear = () => {
        // if (text === "Enter your text here")
        setText('');

    }
    const handleCopy = () => {
        var txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied.", "success");
    }
    const handleExtraSpaces = () => {
        let newTxt = text.split(/[ ]+/)
        setText(newTxt.join(" "));
        props.showAlert("Extra Spaces have been removed.", "success");
    }

    const handleOnchange = (event) => {
        // console.log("On Change.");
        setText(event.target.value);
        // console.log(text.split(" "));
    }




    return (
        <div className='my-5'>
            <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className='my-20'>
                    <center >
                        <h1>{props.heading}</h1>
                    </center>
                </div>
                <textarea className="my-2 form-control" value={text} onChange={handleOnchange} style={{ borderColor: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'dark' ? '#08264a75' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" />

                <button disabled={text.length===0} type="button" className={`my-2 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={convertUpper}>Convert to UPPER CASE</button>

                <button  disabled={text.length===0} type="button" className={`my-2 mx-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={convertLower}>Convert to lower case</button>

                <button  disabled={text.length===0} type="button" className={`my-2 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={handleClear}>Clear Text</button>

                <button  disabled={text.length===0} type="button" className={`my-2 mx-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={handleCopy}>Copy Text</button>

                <button  disabled={text.length===0} type="button" className={`my-2 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#08264a75' : '#d3dff2', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Summary</h2>
                <ul>
                    <li>{text.split(/\s+/).filter((elem) => { return elem.length !== 0 }).length} Word(s).</li>
                    <li>{text.length} Character(s).</li>
                    <li>{text.split(" ").length - 1} Space(s).</li>
                    <li>On average, {0.008 * text.split(" ").filter((elem) => { return elem.length !== 0 }).length} minute(s) require to read it.</li>
                </ul>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "[Nothing to preview!]"}</p>
            </div>
        </div >
    )
}
