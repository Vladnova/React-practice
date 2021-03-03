import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconBtn.module.css';

const IconBtn = ({ children, onClick, ...AllyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onClick}
    {...AllyProps}
  >
    {children}
  </button>
);

IconBtn.defaultProps = {
  onClick: null,
  children: null,
};

IconBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconBtn;
