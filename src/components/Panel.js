import React from "react";
import PropTypes from "prop-types";

const styles = {
    container:{
        fontSize:24,
        color:'red',
    }
}
const Panel = ({title, children}) => (
    <div style={styles.container}>
        {title && <h2>{title}</h2>}
        {children}         
    </div>
    
);

Panel.defaulrProps = {
    title: "",
    children: [],
};

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

    
export default Panel;