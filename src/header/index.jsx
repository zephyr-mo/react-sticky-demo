import React, { useState, memo, useRef, useEffect } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from '../banner';
import Box from '../box';
import './index.css';


function Header(props) {
  const ref = useRef(null);
  const [bannerHeight, serBannerHeight] = useState(null);
  useEffect(() => {
    serBannerHeight(ref.current.height);
  }, [ref])

  return (
    <StickyContainer >
      <Banner ref={ref} />
      <Sticky topOffset={bannerHeight}>
        {
          ({style}) => (
            <div style={style}>
              <div className='header'>
                header
              </div>
              <Box />
            </div>
          )
        }
      </Sticky>
      { props.children }
    </StickyContainer>
  )
}

export default memo(Header);