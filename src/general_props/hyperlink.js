import { propTypes } from "pdf-viewer-reactjs";
import React from "react"

function HyperLink(props){
    return(
        <a className={"hover:text-blue-600 underline " + props.additionalClassName} href={props.link} target="_blank">{props.text}</a>

    )
}

export default HyperLink;