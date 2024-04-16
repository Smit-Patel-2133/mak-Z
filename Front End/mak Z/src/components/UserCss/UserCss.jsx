import React,{useRef, useEffect, useState} from 'react'
import './UserCss.css'


const UserCss = ({ styleHover, receivedData  }) => {
  const fontSize=useRef(null)
  const [fontSizeValue, fontSizeFun] = useState(true);
  const fontWeight=useRef(null)
  const [fontWeightValue, fontWeightFun] = useState(true);
  const fontFamily=useRef(null)
  const [fontFamilyValue, fontFamilyFun] = useState(true);
  const fontStyle=useRef(null)
  const [fontStyleValue, fontStyleFun] = useState(true);
  const textAlign=useRef(null)
  const [textAlignValue, textAlignFun] = useState(true);
  const fontColor=useRef(null)
  const [fontColorValue, fontColorFun] = useState(true);
  const bgColor=useRef(null)
  const [bgColorValue, bgColorFun] = useState(true);
  const width=useRef(null)
  const [widthValue, widthFun] = useState(true);
  const height=useRef(null)
  const [heightValue, heightFun] = useState(true);
  const lineHeight=useRef(null)
  const [lineHeightValue, lineHeightFun] = useState(true);
  const letterSpacing=useRef(null)
  const [letterSpacingValue, letterSpacingFun] = useState(true);
  const wordSpacing=useRef(null)
  const [wordSpacingValue, wordSpacingFun] = useState(true);
  const textDecoration = useRef(null);
  const [textDecorationValue, textDecorationFun] = useState(null);
  const textTransform = useRef(null);
  const [textTransformValue, textTransformFun] = useState(null);

  const [activeElement,setActiveElement] = useState(null);
  const [expandTextTable,setExpandTextTable] = useState(false);
  const [expandBoxStyle,setExpandBoxStyle] = useState(false);

  useEffect(() => {
      if(activeElement) activeElement.classList.add('activeElementClass');
  }, [activeElement]);

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
      const targetFontWeight = computedStyle.getPropertyValue('font-weight');
      fontWeight.current.value = parseInt(targetFontWeight);
      fontWeightFun(receivedData)
      const targetFontFamily = computedStyle.getPropertyValue('font-family');
      fontFamily.current.value = targetFontFamily;
      fontFamilyFun(receivedData)
      const targetFontStyle = computedStyle.getPropertyValue('font-style');
      fontStyle.current.value = targetFontStyle;
      fontStyleFun(receivedData)
      const targetTextAlign = computedStyle.getPropertyValue('text-align');
      textAlign.current.value = targetTextAlign;
      textAlignFun(receivedData)
      const targetFontColor = rgbToHex(computedStyle.getPropertyValue('color'));
      fontColor.current.value = targetFontColor;
      fontColorFun(receivedData)
      const targetBgColor = rgbToHex(computedStyle.getPropertyValue('background-color'));
      // bgColor.current.value = targetBgColor;
      // bgColorFun(receivedData)
      const targetwidth = computedStyle.getPropertyValue('width');
      width.current.value = parseInt(targetwidth);
      widthFun(receivedData)
      const targetheight = computedStyle.getPropertyValue('height');
      height.current.value = parseInt(targetheight);
      heightFun(receivedData)
      const targetLineHeight = computedStyle.getPropertyValue('line-height');
      lineHeight.current.value = parseInt(targetLineHeight);
      lineHeightFun(receivedData)
      const targetLetterSpacing = computedStyle.getPropertyValue('letter-spacing');
      letterSpacing.current.value = parseInt(targetLetterSpacing);
      letterSpacingFun(receivedData)
      const targetWordSpacing = computedStyle.getPropertyValue('word-spacing');
      wordSpacing.current.value = parseInt(targetWordSpacing);
      wordSpacingFun(receivedData)
      const targetTextDecoration = computedStyle.getPropertyValue('text-decoration');
      textDecoration.current.value = targetTextDecoration;
      textDecorationFun(receivedData);
      const targetTextTransform = computedStyle.getPropertyValue('text-transform');
      textTransform.current.value = targetTextTransform;
      textTransformFun(receivedData);

      if(activeElement) activeElement.classList.remove('activeElementClass')
      setActiveElement(receivedData)
    }
  }, [receivedData]);

  function fontSizeOnChange(){
    fontSizeValue.style.fontSize=`${fontSize.current.value}px`
  }
  function fontColorOnChange(){
    fontColorValue.style.color=fontColor.current.value;
  }
  function bgColorOnChange(){
    bgColorValue.style.backgroundColor=bgColor.current.value;
  }
  function widthOnChange(){
    widthValue.style.width=`${width.current.value}px`
  }
  function heightOnChange(){
    heightValue.style.height=`${height.current.value}px`
  }
  function fontWeightOnChange(){
    fontWeightValue.style.fontWeight=fontWeight.current.value;
  }
  function fontFamilyOnChange(){
    fontFamilyValue.style.fontFamily=fontFamily.current.value;
  }
  function fontStyleOnChange(){
    fontStyleValue.style.fontStyle=fontStyle.current.value;
  }
  function textAlignOnChange(){
    textAlignValue.style.textAlign=textAlign.current.value;
  }
  function lineHeightOnChange(){
    lineHeightValue.style.lineHeight=`${lineHeight.current.value}px`
  }
  function letterSpacingOnChange(){
    letterSpacingValue.style.letterSpacing=`${letterSpacing.current.value}px`
  }
  function wordSpacingOnChange(){
    wordSpacingValue.style.wordSpacing=`${wordSpacing.current.value}px`
  }
  function textDecorationOnChange() {
    textDecorationValue.style.textDecoration = textDecoration.current.value;
  }
  function textTransformOnChange() {
    textTransformValue.style.textTransform = textTransform.current.value;
  }
  
  
  function textTableStyle(){
    setExpandTextTable(!expandTextTable)
  }
  function boxStyle(){
    setExpandBoxStyle(!expandBoxStyle)
  }

  return (
    <div className={`style ${styleHover ? '' : 'styleHovered'}`}>
      <p onClick={textTableStyle}>Text Styles</p>
      <div className={`textTable ${expandTextTable ? 'expandTextTable' : ''}`}>
        <table>
          <tr>
            <td><label htmlFor="fontFamily">Font Family: </label></td>
            <td>
              <select ref={fontFamily} name='fontFamily' className='fontFamily' onChange={fontFamilyOnChange}>
                <option value="Arial, sans-serif">--None--</option>
                <option value="Arial, sans-serif" style={{ fontFamily: 'Arial, sans-serif' }}>Arial</option>
                <option value="Helvetica, sans-serif" style={{ fontFamily: 'Helvetica, sans-serif' }}>Helvetica</option>
                <option value="Georgia, serif" style={{ fontFamily: 'Georgia, serif' }}>Georgia</option>
                <option value="Times New Roman, serif" style={{ fontFamily: 'Times New Roman, serif' }}>Times New Roman</option>
                <option value="Courier New, monospace" style={{ fontFamily: 'Courier New, monospace' }}>Courier New</option>
                <option value="Verdana, sans-serif" style={{ fontFamily: 'Verdana, sans-serif' }}>Verdana</option>
                <option value="Impact, sans-serif" style={{ fontFamily: 'Impact, sans-serif' }}>Impact</option>
                <option value="Comic Sans MS, cursive" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Comic Sans MS</option>
                <option value="Trebuchet MS, sans-serif" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>Trebuchet MS</option>
                <option value="Palatino, serif" style={{ fontFamily: 'Palatino, serif' }}>Palatino</option>
                <option value="Garamond, serif" style={{ fontFamily: 'Garamond, serif' }}>Garamond</option>
                <option value="Arial Black, sans-serif" style={{ fontFamily: 'Arial Black, sans-serif' }}>Arial Black</option>
                <option value="Lucida Console, monospace" style={{ fontFamily: 'Lucida Console, monospace' }}>Lucida Console</option>
                <option value="Courier, monospace" style={{ fontFamily: 'Courier, monospace' }}>Courier</option>
                <option value="Lucida Sans Unicode, sans-serif" style={{ fontFamily: 'Lucida Sans Unicode, sans-serif' }}>Lucida Sans Unicode</option>
                <option value="Tahoma, sans-serif" style={{ fontFamily: 'Tahoma, sans-serif' }}>Tahoma</option>
                <option value="Century Gothic, sans-serif" style={{ fontFamily: 'Century Gothic, sans-serif' }}>Century Gothic</option>
                <option value="Bookman, serif" style={{ fontFamily: 'Bookman, serif' }}>Bookman</option>
                <option value="Franklin Gothic Medium, sans-serif" style={{ fontFamily: 'Franklin Gothic Medium, sans-serif' }}>Franklin Gothic Medium</option>
            </select>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="fontSize">Font Size: </label></td>
            <td><input type="number" ref={fontSize} name='fontSize' className='fontSize' onChange={fontSizeOnChange}/><br /></td>
          </tr>
          <tr>
            <td><label htmlFor="fontWeight">Font Weight: </label></td>
            <td><input type="number" ref={fontWeight} name='fontWeight' className='fontWeight' onChange={fontWeightOnChange}/><br /></td>
          </tr>
          <tr>
            <td><label htmlFor="fontStyle">Font Style: </label></td>
            <td>
              <select ref={fontStyle} name='fontStyle' className='fontStyle' onChange={fontStyleOnChange}>
                <option value="normal">--None--</option>
                <option value="normal" style={{ fontStyle: 'normal' }}>Normal</option>
                <option value="italic" style={{ fontStyle: 'italic' }}>Italic</option>
                <option value="oblique" style={{ fontStyle: 'oblique' }}>Oblique</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="fontColor"> Text Color: </label></td>
            <td><input type="color" ref={fontColor} name='fontColor' className='fontColor' onChange={fontColorOnChange}/><br /></td>
          </tr>
          <tr>
            <td><label htmlFor="textAlign">Text Alignment: </label></td>
            <td>
              <select ref={textAlign} name='textAlign' className='textAlign' onChange={textAlignOnChange}>
                <option value="left">--None--</option>
                <option value="left" style={{ textAlign: 'left' }}>Left</option>
                <option value="center" style={{ textAlign: 'center' }}>Center</option>
                <option value="right" style={{ textAlign: 'right' }}>Right</option>
                <option value="justify" style={{ textAlign: 'justify' }}>Justify</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="lineHeight">Line Height: </label></td>
            <td><input type="number" ref={lineHeight} name='lineHeight' className='lineHeight' onChange={lineHeightOnChange}/><br /></td>
          </tr>
          <tr>
            <td><label htmlFor="letterSpacing">Letter Spacing: </label></td>
            <td><input type="number" ref={letterSpacing} name='letterSpacing' className='letterSpacing' onChange={letterSpacingOnChange}/><br /></td>
          </tr>
          <tr>
            <td><label htmlFor="wordSpacing">Word Spacing: </label></td>
            <td><input type="number" ref={wordSpacing} name='wordSpacing' className='wordSpacing' onChange={wordSpacingOnChange}/><br /></td>
          </tr>
          {/* <tr>
            <td><label htmlFor="bgColor"> Background Color: </label></td>
            <td><input type="color" ref={bgColor} name='bgColor' className='bgColor' onChange={bgColorOnChange}/><br /></td>
          </tr> */}
          <tr>
            <td><label htmlFor="textDecoration">Text Decoration: </label></td>
            <td>
              <select ref={textDecoration} name='textDecoration' className='textDecoration' onChange={textDecorationOnChange}>
                <option value="none" style={{ textDecoration: 'none' }}>None</option>
                <option value="underline" style={{ textDecoration: 'underline' }}>Underline</option>
                <option value="overline" style={{ textDecoration: 'overline' }}>Overline</option>
                <option value="line-through" style={{ textDecoration: 'line-through' }}>Line Through</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="textTransform">Text Transform: </label></td>
            <td>
              <select ref={textTransform} name='textTransform' className='textTransform' onChange={textTransformOnChange}>
                <option value="none">--None--</option>
                <option value="none" style={{ textTransform: 'none' }}>None</option>
                <option value="uppercase" style={{ textTransform: 'uppercase' }}>Uppercase</option>
                <option value="lowercase" style={{ textTransform: 'lowercase' }}>Lowercase</option>
                <option value="capitalize" style={{ textTransform: 'capitalize' }}>Capitalize</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
      <p onClick={boxStyle}>Box Style</p>
      <div className={`boxStyle ${expandBoxStyle ? 'expandBoxStyle' : ''}`}>
        <table>
          <tr>
            <td><label htmlFor="width">Width: </label></td>
            <td><input type="number" ref={width} name='width' className='width' onChange={widthOnChange}/><br /></td>
          </tr>
          <tr>
            <td><label htmlFor="height">Height: </label></td>
            <td><input type="number" ref={height} name='height' className='height' onChange={heightOnChange}/><br /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default UserCss