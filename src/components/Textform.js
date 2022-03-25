import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState('');//default value store in text
    const uppercaseClick = () => {
        // console.log("sucess");
        let newText = text.toUpperCase();
        setText(newText); //new value is store in setText

    }
    const clickonChange = (event) => {
        // console.log("onchange");//it only for checking function is calling or not
        setText(event.target.value);//here event is trget to the value

    }
    const lowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const cleareText = () => {
        let newText = '';
        setText(newText);
    }
    return (
        <>
            <div className="container my-5">
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Text Analyzer</label>
                    <textarea className="form-control" onChange={clickonChange}
                        value={text}
                        id="textbox" rows={6} placeholder="Enter your Text" />
                </div>
                <button className="btn btn-primary mx-2" onClick={uppercaseClick}>convert to uppercase</button>

                <button className="btn btn-primary mx-2" onClick={lowercaseClick}> convert to lowercase</button>

                <button className="btn btn-primary mx-2" onClick={cleareText} >cleare</button>
                <div className="container">
                <h4>Text Summary</h4>
                <p>Total Characters = {text.length}</p>
                <p>Total Words = {text.split(" ").length-1}</p>
                </div>
            </div>
        </>
        
    )
}

