import React from "react";


const Panel = ({title, children}) => (
    <div>
        {title && <h2>{title}</h2>}
        {children}         
    </div>
    
);
    
export default Panel;