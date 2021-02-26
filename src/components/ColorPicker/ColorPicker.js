import React, { Component } from 'react';
import styles from './ColorPicker.module.css';
import classNames from 'classnames/bind';

let classes = classNames.bind(styles);

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setAcriveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index =>
    classes('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.ColorPicker__title}>ColorPicker</h2>
        <p>вибран цвет: {label} </p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setAcriveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
