import React from 'react';

const Tab = ({ onSelect, selected, disabled = false, children }) => (
  <button
    onClick={disabled ? null : onSelect}
    disabled={disabled}
    className={`tab${selected ? ' active' : ''}`}
  >
    {children}
  </button>
);

export default Tab;
