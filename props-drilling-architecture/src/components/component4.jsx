import React from "react";
import component5 from "./component5";

const component4 = ({ c, d, e, f }) => {
    return(
        <div className="card comp-4">
            <div className="card-header"> Component 4 </div>
            <div className="card-content">
                <h4> This is prop c: {c} </h4>
                <h4>This is prop d: {d} </h4>
            </div>
            
            <component5 e={e} f={f} />
        </div>
    );
};

export default component4;
