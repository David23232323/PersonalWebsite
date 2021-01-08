import React from "react"
import Collapsible from 'react-collapsible';

 
function Interests(props) {
    var content = [{title: "Astronomy",
                    content: <p>Since reading a short picture book on some basic facts of our galaxy in kindergarten, Astronomy has remained my first and foremost interest.</p>},
                    {title: "Physics", 
                    content: <p>blah blah blah physics</p>},
                    {title: "Human Physcology", 
                    content: <p>human think think think</p>},
                    {title: "Economics", 
                    content: <p>It is a personal tradition to proclaim all taxation is theft before jumping into a long list of taxes that I support, especially a carbon tax. Though what interests me the most in economics are probably markets and how people respond to incentives.</p>            },
                    {title: "Misc", 
                    content: <div>stuff</div>},

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