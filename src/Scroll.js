import React from "react";


const Scroll = (props) =>{
    return (
        <div style = {{overflow : 'scroll', border: '1px solid black', height: '600px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;