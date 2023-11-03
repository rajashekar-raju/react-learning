// import React from "react";
// import { ReactDOM } from "react";

/*
        <div className="parent">
            <div className="child">
                <h1>hello man</h1>
            </div>
        </div>
 */

        const heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"first"},"iam heading 1"),React.createElement("h2",{id:"second"},"iam heading 2")]));
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);