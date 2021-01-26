import React from 'react';
 

function ImageDownload(props) {
  return (
        <div className="contentDownload">
            <a href={props.filePath} target="_blank">
            <div className="contentDownload-overlay" ><a href={props.filePath} target="_blank"></a></div> 

            <img className="contentDownload-image" src={props.imagePath}>
            </img>
            <div className="contentDownload-details fadeIn-top">
                <h3>{props.title}</h3>
                <p>Click to Download</p>
            </div>
            </a>
        </div>
  )
}
 
export default ImageDownload;