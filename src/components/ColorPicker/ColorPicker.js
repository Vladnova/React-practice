import React from 'react'
import './ColorPicker.css';

const ColorPicker = ({options}) => {    
    return (
        <div>
            <h2>Color Picker</h2>
            <div>
                {options.map(({ label, color }) => (
                    <span
                        key={label}
                        className="ColorPicker__option"
                        style={{backgroundColor:color}}>
                </span>))}
            </div>
        </div>
    )
};

export default ColorPicker;