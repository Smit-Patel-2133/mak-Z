import React,{useRef, useEffect, useState} from 'react'
import './UserCss.css'


const UserCss = ({ styleHover, receivedData  }) => {
  const fontSize=useRef(null)
  const [fontSizeValue, fontSizeFun] = useState(true);
  const color=useRef(null)
  const [colorValue, colorFun] = useState(true);

  function rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+/g);
    const hex = ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1);
    return `#${hex}`;
  }

  useEffect(() => {
    if (receivedData) {
      const computedStyle = window.getComputedStyle(receivedData);
      const targetFontSize = computedStyle.getPropertyValue('font-size');
      fontSize.current.value = parseInt(targetFontSize);
      fontSizeFun(receivedData)
      const targetcolor = rgbToHex(computedStyle.getPropertyValue('color'));
      color.current.value = targetcolor;
      colorFun(receivedData)
    }
  }, [receivedData]);

  function fontSizeOnChange(){
    fontSizeValue.style.fontSize=`${fontSize.current.value}px`
  }
  function colorOnChange(){
    colorValue.style.color=`${color.current.value}`
  }

  return (
    <div className={`style ${styleHover ? '' : 'styleHovered'}`}>
       <label htmlFor="fontSize">Font Size: </label>
       <input type="number" ref={fontSize} name='fontSize' className='fontSize' onChange={fontSizeOnChange}/><br />
       <label htmlFor="color"> Font Color: </label>
       <input type="color" ref={color} name='color' className='fontSize' onChange={colorOnChange}/><br />
    </div>
  )
}

export default UserCss