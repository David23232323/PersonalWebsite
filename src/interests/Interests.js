import React from "react"
import Collapsible from 'react-collapsible';
import Entry from './entry.js'
import HyperLink from '../general_props/hyperlink'
import * as blueDotQuote from './blueDot.js'

 
function Interests(props) {
    var content = [{title: "Astronomy",
                    content: 
                    <div>
                        <p>Since reading a short picture book on some basic facts of our galaxy in kindergarten, Astronomy has remained my first and foremost interest.</p>
                        <Entry title="mostest closest planet" date="1/17/2021">
                            <div>
                                <HyperLink additionalClassName="float-left"
                                link="https://www.youtube.com/watch?v=SumDHcnCRuU&ab_channel=CGPGrey"
                                text="Source: CGP grey youtube video"
                                ></HyperLink>
                                <p className="clear-both float-left">For every planet in our solar system, mercury is closest to the planet than any other planet for the longest duration</p>
                            </div>
                        </Entry>
                        <Entry title="A Pale Blue Dot" date="1/18/2021">
                            <p>One of my favorite quotes of all time by Carl Sagen</p>
                            <p>{blueDotQuote.blueDotQuote}</p>

                        </Entry>
                    </div>
                    
                    },
                    {title: "Physics", 
                    content: <p>blah blah blah physics</p>},
                    {title: "Human Psychology", 
                    content: <p>human think think think</p>},
                    {title: "Economics", 
                    content: <p>content</p>           },
                    {title: "Misc", 
                    content:                         
                        <Entry title="MIT Missing Semester" date="1/17/2021">
                        <div>
                            <HyperLink additionalClassName="float-left"
                            link="https://missing.csail.mit.edu/"
                            text="Mit Missing Semester Link"
                            ></HyperLink>
                            <p className="clear-both float-left">Some useful stuff I've been looking through for the winter of 2021 cuz quarantine</p>
                        </div>
                        </Entry>},

                ]
  return (

    <div>
        <h1>Interests</h1>
        <div className="m-auto w-8/12">
            {content.map((value, index) => {
                return <Collapsible trigger={`+  ${value.title}  +`}
                triggerWhenOpen={`-  ${value.title}  -`}
                classParentString="text-base"
                openedClassName="text-lg"
                triggerClassName="text-xl font-semibold"
                triggerOpenedClassName="text-xl font-bold"
                contentInnerClassName="text-lg"
                easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
                >
                    {value.content}
                </Collapsible>
            })}
        </div>
    </div>

    
  )
}
 
export default Interests;