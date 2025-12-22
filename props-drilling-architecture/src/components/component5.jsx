import React from "react";
import component6 from "./component6";

const component5 = ({ e, f }) => {
    return (
        <div className="card comp-5">
            <div className="card-header"> Component 5 </div>
            <div className="card-content">
                <h4>This is prop f: {f} </h4>
            </div>
            <component6 e={e} />
        </div>
    );
};

export default component5;
