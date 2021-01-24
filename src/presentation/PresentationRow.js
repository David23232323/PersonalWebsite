import { PreviousMap } from 'postcss';
import React from 'react';
import ImageDownload from './ImageDownload.js'
 
function PresentationRow(props) {

  return (
    <div className="clear-both m-3">
      <div>
        <span className="float-left">{props.presentationName}</span>
        <span className="float-right">{props.date}</span>
      </div>
      <hr className="border-black clear-both"></hr>

      <div className="clear-both overflow-auto">
        <div className="w-1/2 float-left overflow-auto">
            <ImageDownload
            filePath={props.presentationPath}
            imagePath={props.previewPath}
            title={props.presentationName}
            >
            </ImageDownload>
        </div>
        <div className="w-1/2 float-right flex text-left">
          <div className="m-auto ml-2.5"><p className="text-left">{props.description}</p></div>
        </div>
      </div>
    </div>

  )
}
 
export default PresentationRow;