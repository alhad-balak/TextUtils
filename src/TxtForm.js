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
        // if (text == "Enter your text here")
        setText('');
        
    }

    const handleOnchange = (event) => {
        // console.log("On Change.");
        setText(event.target.value);
        // console.log(text.split(" "));
    }

    return (
        <div>
            <div className="mb-3">
                <center>
                    <h1 className='my-3'>{props.heading}</h1>
                </center>
                <textarea className="my-2 form-control" value={text} onChange={handleOnchange} onClick={handleClick} id="exampleFormControlTextarea1" rows="8" />
                <button type="button" className="my-2 btn btn-primary" onClick={convertUpper}>Convert to UPPER CASE</button>
                <button type="button" className="my-2 mx-2 btn btn-primary" onClick={convertLower}>Convert to lower case</button>
            </div>

            <div className="container">
                <h2>Summary</h2>
                <ul>
                    <li>{text.split(" ").length} Words.</li>
                    <li>{text.length} Characters.</li>
                    <li>{text.split(" ").length - 1} Spaces.</li>
                    <li>On average, {0.008 * text.split(" ").length} minutes require to read it.</li>
                </ul>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
