import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import './index.css'
const Banner = forwardRef((props = {}, ref)  => {
  const bannerRef = useRef();
  useImperativeHandle(ref, () => ({
    height: bannerRef.current.clientHeight
  }));

  return (
    <div className='banner' ref={bannerRef} >Banner</div>
  );
})

export default Banner;