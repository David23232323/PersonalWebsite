import React from "react"

function Entry(props){
    return(
        <div className="">
            <hr className="clear-both m-3.5"></hr>
            <span className="float-left font-bold">{props.title}</span>
            <span className="float-right font-bold">{props.date}</span>
            <hr className="border-black clear-both"></hr>
            {props.children}
        </div>
    )
}

export default Entry;