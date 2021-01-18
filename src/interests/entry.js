import React from "react"

function Entry(props){
    return(
        <div>
            <span className="float-left font-bold">{props.title}</span>
            <span className="float-right font-bold">{props.date}</span>
            <hr className="border-black clear-both"></hr>
            {props.children}
        </div>
    )
}

export default Entry;