import React from "react";
import  ReactDOM  from "react-dom/client";

/*
        <div className="parent">
            <div className="child">
                <h1>hello man</h1>
            </div>
        </div>
 */

        // const heading = React.createElement("div",{id:"parent"},"hello how are you");
        // root.render(heading);
        
        //react element
        const jsxheading = <h1>hello how are you from jsx element</h1>
        const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(jsxheading);

        //javascript element can be accesed in jsx through {} curly braces
        const data=1000; 

        //react functional element
        const HeadingFunction= () => (
            <div className="root1">
                {data}
                {jsxheading}
                <h1>hello world from functional component</h1>
                {TitleFunction()}
                <TitleFunction></TitleFunction>
                <TitleFunction/>
            </div>
        );
        root.render(<HeadingFunction/>)

        // react functional element-2
        const TitleFunction = () => (
            <h2>
                iam from functional element2
            </h2>
        )