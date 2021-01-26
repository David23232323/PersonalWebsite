import React from "react"
import Collapsible from 'react-collapsible';
import Entry from './entry.js'
import HyperLink from '../general_props/hyperlink'
import * as blueDotQuote from './blueDot.js'
import ImageText from '../general_props/ImageText'

 
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
                                <p className="interest-text">For every planet in our solar system, mercury is closest to the planet than any other planet for the longest duration</p>
                            </div>
                        </Entry>
                        <Entry title="A Pale Blue Dot" date="1/18/2021">
                            <p className="interest-text">One of my favorite quotes of all time by Carl Sagen:</p>
                            <div className="clear-both float-left w-4/6">
                                <p className="interest-text">{blueDotQuote.blueDotQuote}</p>
                            </div>
                            <div className="float-right w-2/6">
                                <ImageText
                                title="Pale Blue Dot: Earth"
                                description="Furthest picture of earth"
                                path="images/interests/Pale_Blue_Dot.png"
                                >          
                                </ImageText>
                            </div>
                        </Entry>
                    </div>
                    },
                    {title: "Physics", 
                    content: <p>blah blah blah physics</p>},
                    {title: "Human Psychology", 
                    content: <div>
                        <Entry title="Replication Crisis" date="1/17/2021">
                            <div>
                                <HyperLink additionalClassName="float-left"
                                link="https://en.wikipedia.org/wiki/Replication_crisis#In_psychology"
                                text="Source: Wikipedia"
                                ></HyperLink>
                                <p className="interest-text">This post has to come first in this section. A lot of famous experiments are unreplicable. I think its important to fact check pyschology facts from articles by finding the original studies and see if there are papers critisizing it. An example of a seriously flawed study that I keep seeing referenced is the Stanford Prisoner Experiment.</p>
                            </div>
                        </Entry>
                        <Entry title="Thinking Fast and Slow" date="1/17/2021">
                            <div>
                                <HyperLink additionalClassName="float-left"
                                link="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"
                                text="Wikipedia"
                                ></HyperLink>
                                <p className="interest-text">One of my favorite all time books. Really shows just how bad people are at reasoning.</p>
                            </div>
                        </Entry>
                    </div>},
                    {title: "Economics", 
                    content: <p>content</p> },
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
            <p className="italic">Just some of my more academic interests, I plan on just using this page to document interesting things I've learned</p>
        </div>

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