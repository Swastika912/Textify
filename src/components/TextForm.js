import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercse was clicked " + text); 
        let newText= text.toUpperCase() ;
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercse was clicked " + text); 
        let newText= text.toLowerCase() ;
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");

    }

    const handleClearClick = ()=>{
        
        let newText= "";
        setText(newText);
        props.showAlert("Text cleared!", "success");

    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)

    }

    const handleCopy = ()=>{
        
        // var text = document.getElementById("myBox")
        // text.select()
        // navigator.clipboard.writeText(text.value) ;
        // document.getSelection().removeAllRanges();

        // only this will work
        navigator.clipboard.writeText(text) ;


        props.showAlert("Copied to clipboard!", "success");


    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ] + /)
        setText(newText.join(" "));
        props.showAlert("Extra spaces handled!", "success");

    }

  

    const [text, setText] = useState('Enter text here');   // text is state variable
    // text = "new text"; // wrong way to change the state correct way is to use setText
    // setText("new text");
    return (
        <>
        <div className='container' style={{ color: props.mode === "dark" ? "white":"black"}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                 backgroundColor: props.mode === "dark" ? "grey":"white",
                 color: props.mode === "dark" ? "white":"black"
                 }} id="myBox" rows="8"></textarea>
                {/* first curly brace becoz u wanna write js and 2nd curly brace is for object */}
            </div>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




        </div>
        <div className="container my-3 " style={{ color: props.mode === "dark" ? "white":"black"}}>
            <h3>Your Text Summary</h3>
            <p> {text.split(" ").filter((element)=>{
                 return element.length !== 0 ;   
            }).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{
                 return element.length !== 0 ;   
            }).length} minutes to read</p>

            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
        </>
    )

}
