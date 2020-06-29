import React, { memo } from 'react';
import './index.css';

function Box(props) {
  return (
    <div className='box' style={props.style}>Box</div>
  );
}

export default memo(Box);