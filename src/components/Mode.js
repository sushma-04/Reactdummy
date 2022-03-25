import React, { useState } from 'react';

export default function Mode() {
// useStatesnippids is short form of useState
    const [myStyle, setMyStyle] = useState({
        color: "black",
        background: "white"
    })
    const style = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                background: "white"
            })
        }
        else {
            setMyStyle({
                color: 'white',
                background: "black"
            })
        }
    }

    return (
        <>
            <div className="container" style={myStyle}>
                <button className="btn btn-dark" onClick={style} style={myStyle}> Change Mode
                </button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia corrupti provident amet!</p>
            </div>
        </>
    )
}
