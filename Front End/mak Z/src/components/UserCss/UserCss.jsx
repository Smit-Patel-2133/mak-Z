import React,{useRef, useEffect, useState} from 'react'
import './UserCss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';


const UserCss = ({ styleHover, hardStyleHover, receivedData  }) => {
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
  const borderWidth = useRef(null);
  const [borderWidthValue, borderWidthFun] = useState(null);
  const borderStyle = useRef(null);
  const [borderStyleValue, borderStyleFun] = useState(null);
  const borderColor = useRef(null);
  const [borderColorValue, borderColorFun] = useState(null);
  const borderRadius = useRef(null);
  const [borderRadiusValue, borderRadiusFun] = useState(null);
  const shadowVerticalOffset = useRef(null);
  const [shadowVerticalOffsetValue, shadowVerticalOffsetFun] = useState(null);
  const shadowHorizontalOffset = useRef(null);
  const [shadowHorizontalOffsetValue, shadowHorizontalOffsetFun] = useState(null);
  const shadowBlurRadius = useRef(null);
  const [shadowBlurRadiusValue, shadowBlurRadiusFun] = useState(null);
  const shadowSpreadRadius = useRef(null);
  const [shadowSpreadRadiusValue, shadowSpreadRadiusFun] = useState(null);
  const shadowColor = useRef(null);
  const [shadowColorValue, shadowColorFun] = useState(null);
  const overflowX = useRef(null);
  const [overflowXValue, overflowXFun] = useState(null);
  const overflowY = useRef(null);
  const [overflowYValue, overflowYFun] = useState(null);
  const overflow = useRef(null);
  const [overflowValue, overflowFun] = useState(null);
  const padding = useRef(null);
  const [paddingValue, paddingFun] = useState(null);
  const paddingTop = useRef(null);
  const [paddingTopValue, paddingTopFun] = useState(null);
  const paddingRight = useRef(null);
  const [paddingRightValue, paddingRightFun] = useState(null);
  const paddingBottom = useRef(null);
  const [paddingBottomValue, paddingBottomFun] = useState(null);
  const paddingLeft = useRef(null);
  const [paddingLeftValue, paddingLeftFun] = useState(null);
  const margin = useRef(null);
  const [marginValue, marginFun] = useState(null);
  const marginTop = useRef(null);
  const [marginTopValue, marginTopFun] = useState(null);
  const marginRight = useRef(null);
  const [marginRightValue, marginRightFun] = useState(null);
  const marginBottom = useRef(null);
  const [marginBottomValue, marginBottomFun] = useState(null);
  const marginLeft = useRef(null);
  const [marginLeftValue, marginLeftFun] = useState(null);
  const boxSizing = useRef(null);
  const [boxSizingValue, boxSizingFun] = useState(null);
  const position = useRef(null);
  const [positionValue, positionFun] = useState(null);
  const top = useRef(null);
  const [topValue, topFun] = useState(null);
  const bottom = useRef(null);
  const [bottomValue, bottomFun] = useState(null);
  const right = useRef(null);
  const [rightValue, rightFun] = useState(null);
  const left = useRef(null);
  const [leftValue, leftFun] = useState(null);
  const zIndex = useRef(null);
  const [zIndexValue, zIndexFun] = useState(null);
  const displayStyle = useRef(null);
  const [displayStyleValue, displayStyleFun] = useState(null);
  const flexDirection = useRef(null);
  const [flexDirectionValue, flexDirectionFun] = useState(null);
  const flexWrap = useRef(null);
  const [flexWrapValue, flexWrapFun] = useState(null);
  const justifyContent = useRef(null);
  const [justifyContentValue, justifyContentFun] = useState(null);
  const alignItems = useRef(null);
  const [alignItemsValue, alignItemsFun] = useState(null);
  const alignSelf = useRef(null);
  const [alignSelfValue, alignSelfFun] = useState(null);
  const cursor = useRef(null);
  const [cursorValue, cursorFun] = useState(null);
  const outlineStyle = useRef(null);
  const [outlineStyleValue, outlineStyleFun] = useState(null);
  const outlineColor = useRef(null);
  const [outlineColorValue, outlineColorFun] = useState(null);
  const outlineWidth = useRef(null);
  const [outlineWidthValue, outlineWidthFun] = useState(null);
  const opacity = useRef(null);
  const [opacityValue, opacityFun] = useState(null);
  const visibility = useRef(null);
  const [visibilityValue, visibilityFun] = useState(null);
  const bgImage = useRef(null);
  const [bgImageValue, bgImageFun] = useState(null);
  const bgPositionX = useRef(null);
  const [bgPositionXValue, bgPositionXFun] = useState(null);
  const bgPositionY = useRef(null);
  const [bgPositionYValue, bgPositionYFun] = useState(null);
  const bgRepeat = useRef(null);
  const [bgRepeatValue, bgRepeatFun] = useState(null);
  const bgSizeX = useRef(null);
  const [bgSizeXValue, bgSizeXFun] = useState(null);
  const bgSizeY = useRef(null);
  const [bgSizeYValue, bgSizeYFun] = useState(null);


  const [activeElement,setActiveElement] = useState(null);
  const [expandTextTable,setExpandTextTable] = useState(false);
  const [expandBoxStyle,setExpandBoxStyle] = useState(false);
  const [expandPositioning,setExpandPositioning] = useState(false);
  const [expandfexboxAndGridStyles,setExpandfexboxAndGridStyles] = useState(false);
  const [expandMiscellaneous,setExpandMiscellaneous] = useState(false);
  const [expandBackgroundStyles,setExpandBackgroundStyles] = useState(false);

  useEffect(() => {
      if(activeElement) activeElement.classList.add('activeElementClass');
  }, [activeElement]);

  function rgbToHex(rgb) {
    if(rgb){
      const [r, g, b] = rgb.match(/\d+/g);
      const hex = ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1);
      return `#${hex}`;
    }
  }

  function pxToPr(x){
    return ((x/(600*2))*100)+4;
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
      bgColor.current.value = targetBgColor;
      bgColorFun(receivedData)
      let targetwidth = computedStyle.getPropertyValue('width');
      const widthU=document.querySelector('.widthUnit');
      if(widthU.value=='%') targetwidth=(pxToPr(parseInt(targetwidth)))
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
      const targetBorderWidth = computedStyle.getPropertyValue('border-width');
      borderWidth.current.value = parseInt(targetBorderWidth);
      borderWidthFun(receivedData)
      const targetBorderStyle = computedStyle.getPropertyValue('border-style');
      borderStyle.current.value = targetBorderStyle;
      borderStyleFun(receivedData);
      const targetBorderColor = rgbToHex(computedStyle.getPropertyValue('border-color'));
      borderColor.current.value = targetBorderColor;
      borderColorFun(receivedData);
      const targetBorderRadius = computedStyle.getPropertyValue('border-radius');
      borderRadius.current.value = parseInt(targetBorderRadius);
      borderRadiusFun(receivedData);
      const targetShadowVerticalOffset = computedStyle.getPropertyValue('--box-shadow-offset-x');
      shadowVerticalOffset.current.value = parseInt(targetShadowVerticalOffset);
      shadowVerticalOffsetFun(receivedData);
      const targetShadowHorizontalOffset = computedStyle.getPropertyValue('--box-shadow-offset-y');
      shadowHorizontalOffset.current.value = parseInt(targetShadowHorizontalOffset);
      shadowHorizontalOffsetFun(receivedData);
      const targetShadowBlurRadius = computedStyle.getPropertyValue('--box-shadow-blur-radius');
      shadowBlurRadius.current.value = parseInt(targetShadowBlurRadius);
      shadowBlurRadiusFun(receivedData);
      const targetShadowSpreadRadius = computedStyle.getPropertyValue('--box-shadow-spread-radius');
      shadowSpreadRadius.current.value = parseInt(targetShadowSpreadRadius);
      shadowSpreadRadiusFun(receivedData);
      const targetShadowColor = rgbToHex(computedStyle.getPropertyValue('--box-shadow-color'));
      shadowColor.current.value = targetShadowColor;
      shadowColorFun(receivedData);
      const targetOverflowX = computedStyle.getPropertyValue('overflow-x');
      overflowX.current.value = targetOverflowX;
      overflowXFun(receivedData);
      const targetOverflowY = computedStyle.getPropertyValue('overflow-y');
      overflowY.current.value = targetOverflowY;
      overflowYFun(receivedData);
      const targetOverflow = computedStyle.getPropertyValue('overflow');
      overflow.current.value = targetOverflow;
      overflowFun(receivedData);
      const targetPadding = computedStyle.getPropertyValue('padding');
      padding.current.value = parseInt(targetPadding);
      paddingFun(receivedData);
      const targetPaddingTop = computedStyle.getPropertyValue('padding-top');
      paddingTop.current.value = parseInt(targetPaddingTop);
      paddingTopFun(receivedData);
      const targetPaddingRight = computedStyle.getPropertyValue('padding-right');
      paddingRight.current.value = parseInt(targetPaddingRight);
      paddingRightFun(receivedData);
      const targetPaddingBottom = computedStyle.getPropertyValue('padding-bottom');
      paddingBottom.current.value = parseInt(targetPaddingBottom);
      paddingBottomFun(receivedData);
      const targetPaddingLeft = computedStyle.getPropertyValue('padding-left');
      paddingLeft.current.value = parseInt(targetPaddingLeft);
      paddingLeftFun(receivedData);
      const targetMargin = computedStyle.getPropertyValue('margin');
      margin.current.value = parseInt(targetMargin);
      marginFun(receivedData);
      const targetMarginTop = computedStyle.getPropertyValue('margin-top');
      marginTop.current.value = parseInt(targetMarginTop);
      marginTopFun(receivedData);
      const targetMarginRight = computedStyle.getPropertyValue('margin-right');
      marginRight.current.value = parseInt(targetMarginRight);
      marginRightFun(receivedData);
      const targetMarginBottom = computedStyle.getPropertyValue('margin-bottom');
      marginBottom.current.value = parseInt(targetMarginBottom);
      marginBottomFun(receivedData);
      const targetMarginLeft = computedStyle.getPropertyValue('margin-left');
      marginLeft.current.value = parseInt(targetMarginLeft);
      marginLeftFun(receivedData);
      const targetBoxSizing = computedStyle.getPropertyValue('box-sizing');
      boxSizing.current.value = targetBoxSizing;
      boxSizingFun(receivedData);
      const targetPosition = computedStyle.getPropertyValue('position');
      position.current.value = targetPosition;
      positionFun(receivedData) 
      const targetTop = computedStyle.getPropertyValue('top');
      top.current.value = parseInt(targetTop);
      topFun(receivedData);
      const targetBottom = computedStyle.getPropertyValue('bottom');
      bottom.current.value = parseInt(targetBottom);
      bottomFun(receivedData);
      const targetRight = computedStyle.getPropertyValue('right');
      right.current.value = parseInt(targetRight);
      rightFun(receivedData);
      const targetLeft = computedStyle.getPropertyValue('left');
      left.current.value = parseInt(targetLeft);
      leftFun(receivedData);
      const targetZIndex = computedStyle.getPropertyValue('z-index');
      zIndex.current.value =targetZIndex;
      zIndexFun(receivedData);
      const targetDisplayStyle = computedStyle.getPropertyValue('display');
      displayStyle.current.value = targetDisplayStyle;
      displayStyleFun(receivedData)
      const targetFlexDirection = computedStyle.getPropertyValue('flex-direction');
      flexDirection.current.value = targetFlexDirection;
      flexDirectionFun(receivedData)
      const targetFlexWrap = computedStyle.getPropertyValue('flex-wrap');
      flexWrap.current.value = targetFlexWrap;
      flexWrapFun(receivedData)
      const targetJustifyContent = computedStyle.getPropertyValue('justify-content');
      justifyContent.current.value = targetJustifyContent;
      justifyContentFun(receivedData)
      const targetAlignItems = computedStyle.getPropertyValue('align-items');
      alignItems.current.value = targetAlignItems;
      alignItemsFun(receivedData)
      const targetAlignSelf = computedStyle.getPropertyValue('align-self');
      alignSelf.current.value = targetAlignSelf;
      alignSelfFun(receivedData)
      const targetCursor = computedStyle.getPropertyValue('cursor');
      cursor.current.value = targetCursor;
      cursorFun(receivedData)
      const targetOutlineStyle = computedStyle.getPropertyValue('outline-style');
      outlineStyle.current.value = targetOutlineStyle;
      outlineStyleFun(receivedData)
      const targetOutlineColor = rgbToHex(computedStyle.getPropertyValue('outline-color'));
      outlineColor.current.value = targetOutlineColor;
      outlineColorFun(receivedData)
      const targetOutlineWidth = computedStyle.getPropertyValue('outline-width');
      outlineWidth.current.value = parseInt(targetOutlineWidth);
      outlineWidthFun(receivedData)
      const targetOpacity = computedStyle.getPropertyValue('opacity');
      opacity.current.value = parseFloat(targetOpacity);
      opacityFun(receivedData);
      const targetVisibility = computedStyle.getPropertyValue('visibility');
      visibility.current.value = parseInt(targetVisibility);
      visibilityFun(receivedData)
      bgImageFun(receivedData)
      const targetBgPositionX = computedStyle.getPropertyValue('background-position-x');
      bgPositionX.current.value = parseInt(targetBgPositionX);
      bgPositionXFun(receivedData)
      const targetBgPositionY = computedStyle.getPropertyValue('background-position-y');
      bgPositionY.current.value = parseInt(targetBgPositionY);
      bgPositionYFun(receivedData)
      const targetBgRepeat = computedStyle.getPropertyValue('background-repeat');
      bgRepeat.current.value = targetBgRepeat;
      bgRepeatFun(receivedData)
      const targetBgSizeX = computedStyle.getPropertyValue('background-size').split(' ')[0];
      bgSizeX.current.value = parseInt(targetBgSizeX);
      bgSizeXFun(receivedData)
      const targetBgSizeY = computedStyle.getPropertyValue('background-size').split(' ')[1];
      bgSizeY.current.value = parseInt(targetBgSizeY);
      bgSizeYFun(receivedData)

      if(activeElement) activeElement.classList.remove('activeElementClass')
      setActiveElement(receivedData)
    }
  }, [receivedData]);


  function fontSizeOnChange(){
    fontSizeValue.style.fontSize=`${fontSize.current.value}px`;
  }
  function fontColorOnChange(){
    fontColorValue.style.color=fontColor.current.value;
  }
  function bgColorOnChange(){
    bgColorValue.style.backgroundColor=bgColor.current.value;
  }
  function widthOnChange(){
    const val=document.querySelector('.widthUnit');
    widthValue.style.width=`${width.current.value}${val.value}`
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
  function borderWidthOnChange(){
    borderWidthValue.style.border=`${borderWidth.current.value}px ${borderStyle.current.value} ${borderColor.current.value}`;
  }
  function borderStyleOnChange() {
    borderStyleValue.style.border =`${borderWidth.current.value}px ${borderStyle.current.value} ${borderColor.current.value}`;
  }
  function borderColorOnChange() {
    borderColorValue.style.border = `${borderWidth.current.value}px ${borderStyle.current.value} ${borderColor.current.value}`;
  }
  function borderRadiusOnChange(){
    borderRadiusValue.style.borderRadius=`${borderRadius.current.value}px`
  }
  function shadowHorizontalOffsetOnChange() {
    shadowHorizontalOffsetValue.style.boxShadow = `${shadowHorizontalOffset.current.value}px ${shadowVerticalOffset.current.value}px ${shadowBlurRadius.current.value}px ${shadowSpreadRadius.current.value}px ${shadowColor.current.value}`;
  }
  function shadowVerticalOffsetOnChange() {
    shadowVerticalOffsetValue.style.boxShadow = `${shadowHorizontalOffset.current.value}px ${shadowVerticalOffset.current.value}px ${shadowBlurRadius.current.value}px ${shadowSpreadRadius.current.value}px ${shadowColor.current.value}`;
  }
  function shadowBlurRadiusOnChange() {
    shadowBlurRadiusValue.style.boxShadow = `${shadowHorizontalOffset.current.value}px ${shadowVerticalOffset.current.value}px ${shadowBlurRadius.current.value}px ${shadowSpreadRadius.current.value}px ${shadowColor.current.value}`;
  }
  function shadowSpreadRadiusOnChange() {
    shadowSpreadRadiusValue.style.boxShadow = `${shadowHorizontalOffset.current.value}px ${shadowVerticalOffset.current.value}px ${shadowBlurRadius.current.value}px ${shadowSpreadRadius.current.value}px ${shadowColor.current.value}`;
  }
  function shadowColorOnChange() {
    shadowColorValue.style.boxShadow = `${shadowHorizontalOffset.current.value}px ${shadowVerticalOffset.current.value}px ${shadowBlurRadius.current.value}px ${shadowSpreadRadius.current.value}px ${shadowColor.current.value}`;
  }  
  function overflowXOnChange() {
    overflowXValue.style.overflowX = overflowX.current.value;
  }
  function overflowYOnChange() {
    overflowYValue.style.overflowY = overflowY.current.value;
  }
  function overflowOnChange() {
    overflowValue.style.overflow = overflow.current.value;
  }
  function paddingOnChange(){
    paddingValue.style.padding=`${padding.current.value}px`
  }
  function paddingTopOnChange(){
    paddingTopValue.style.paddingTop=`${paddingTop.current.value}px`
  }
  function paddingRightOnChange(){
    paddingRightValue.style.paddingRight=`${paddingRight.current.value}px`
  }
  function paddingBottomOnChange(){
    paddingBottomValue.style.paddingBottom=`${paddingBottom.current.value}px`
  }
  function paddingLeftOnChange(){
    paddingLeftValue.style.paddingLeft=`${paddingLeft.current.value}px`
  }
  function marginOnChange(){
    marginValue.style.margin=`${margin.current.value}px`
  }
  function marginTopOnChange(){
    marginTopValue.style.marginTop=`${marginTop.current.value}px`
  }
  function marginRightOnChange(){
    marginRightValue.style.marginRight=`${marginRight.current.value}px`
  }
  function marginBottomOnChange(){
    marginBottomValue.style.marginBottom=`${marginBottom.current.value}px`
  }
  function marginLeftOnChange(){
    marginLeftValue.style.marginLeft=`${marginLeft.current.value}px`;
  }
  function boxSizingOnChange(){
    boxSizingValue.style.boxSizing=boxSizing.current.value;
  }
  function positionOnChange(){
    positionValue.style.position=position.current.value;
  }
  function topOnChange(){
    topValue.style.top=`${top.current.value}px`
  }
  function bottomOnChange(){
    bottomValue.style.bottom=`${bottom.current.value}px`
  }
  function rightOnChange(){
    rightValue.style.right=`${right.current.value}px`
  }
  function leftOnChange(){
    leftValue.style.left=`${left.current.value}px`
  }
  function zIndexOnChange(){
    zIndexValue.style.zIndex=zIndex.current.value
  }
  function displayStyleOnChange(){
    displayStyleValue.style.display=displayStyle.current.value;
  }
  function flexDirectionOnChange(){
    flexDirectionValue.style.flexDirection=flexDirection.current.value;
  }
  function flexWrapOnChange(){
    flexWrapValue.style.flexWrap=flexWrap.current.value;
  }
  function justifyContentOnChange(){
    justifyContentValue.style.justifyContent=justifyContent.current.value;
  }
  function alignItemsOnChange(){
    alignItemsValue.style.alignItems=alignItems.current.value;
  }
  function alignSelfOnChange(){
    alignSelfValue.style.alignSelf=alignSelf.current.value;
  }
  function cursorOnChange(){
    cursorValue.style.cursor=cursor.current.value;
  }
  function outlineStyleOnChange(){
    outlineStyleValue.style.outlineStyle=outlineStyle.current.value;
  }
  function outlineColorOnChange(){
    outlineColorValue.style.outlineColor=outlineColor.current.value;
  }
  function outlineWidthOnChange(){
    outlineWidthValue.style.outlineWidth=`${outlineWidth.current.value}px`;
  }
  function opacityOnChange(){
    opacityValue.style.opacity=opacity.current.value
  }
  function visibilityOnChange(){
    visibilityValue.style.visibility=visibility.current.value
  }
  function bgImageOnChange(){
    const reader = new FileReader();

    reader.onload = function(e) {
      bgImageValue.style.backgroundImage = `url('${e.target.result}')`;
      bgPositionXValue.style.backgroundPositionX=`100%`;
      bgPositionYValue.style.backgroundPositionY=`100%`;
    };
    reader.readAsDataURL(bgImage.current.files[0]);
  }
  function bgPositionXOnChange(){
    const val=document.querySelector('.bgPositionXUnit');
    bgPositionXValue.style.backgroundPositionX=`${bgPositionX.current.value}${val.value}`;
  }
  function bgPositionYOnChange(){
    const val=document.querySelector('.bgPositionYUnit');
    bgPositionYValue.style.backgroundPositionY=`${bgPositionY.current.value}${val.value}`;
  }
  function bgRepeatOnChange(){
    bgRepeatValue.style.backgroundRepeat=bgRepeat.current.value
  }
  function bgSizeXOnChange(){
    const valX=document.querySelector('.bgPositionX');
    const valY=document.querySelector('.bgPositionY');
    const bx=bgSizeX.current.value ? `${bgSizeX.current.value}${valX.value}` : 'auto';
    const by=bgSizeY.current.value ? `${bgSizeY.current.value}${valY.value}` : 'auto';
    bgSizeXValue.style.backgroundSize=`${bx} ${by}`
  }
  function bgSizeYOnChange(){
    const valX=document.querySelector('.bgPositionX');
    const valY=document.querySelector('.bgPositionY');
    const bx=bgSizeX.current.value ? `${bgSizeX.current.value}${valX.value}` : 'auto';
    const by=bgSizeY.current.value ? `${bgSizeY.current.value}${valY.value}` : 'auto';
    bgSizeXValue.style.backgroundSize=`${bx} ${by}`
  }
  
  
  function textTableStyle(){
    setExpandTextTable(!expandTextTable)
  }
  function boxStyle(){
    setExpandBoxStyle(!expandBoxStyle)
  }
  function positioning(){
    setExpandPositioning(!expandPositioning)
  }
  function flexboxAndGridStyles(){
    setExpandfexboxAndGridStyles(!expandfexboxAndGridStyles)
  }
  function miscellaneous(){
    setExpandMiscellaneous(!expandMiscellaneous)
  }
  function backgroundStyles(){
    setExpandBackgroundStyles(!expandBackgroundStyles)
  }

  return (
    <div className={`style ${styleHover ? '' : 'styleHovered'} ${hardStyleHover ? '' : 'hardStyleHovered'}`}>
      <div className="styleBlocks" style={{overflow:'hidden'}}>
        <p onClick={textTableStyle}>Text Styles <FontAwesomeIcon icon={faAngleDown} style={{transition:'0.5s ease-in-out',transform:`${expandTextTable ? 'none' : 'rotate(-90deg)'}`}}/></p>
        <div className={`styleTable ${expandTextTable ? 'expandTextTable' : ''}`}>
          <table>
          <tbody>
            <tr>
              <td><label htmlFor="fontFamily">Font Family: </label></td>
              <td>
                <select ref={fontFamily} name='fontFamily' className='fontFamily' onChange={fontFamilyOnChange}>
                  <option value="Arial, sans-serif">None</option>
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
                  <option value="normal">None</option>
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
                  <option value="left">None</option>
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
                  <option value="none">None</option>
                  <option value="none" style={{ textTransform: 'none' }}>None</option>
                  <option value="uppercase" style={{ textTransform: 'uppercase' }}>Uppercase</option>
                  <option value="lowercase" style={{ textTransform: 'lowercase' }}>Lowercase</option>
                  <option value="capitalize" style={{ textTransform: 'capitalize' }}>Capitalize</option>
                </select>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
      <div className="styleBlocks" style={{overflow:'hidden'}}>
        <p onClick={backgroundStyles}>Background Styles <FontAwesomeIcon icon={faAngleDown} style={{transition:'0.5s ease-in-out',transform:`${expandBackgroundStyles ? 'none' : 'rotate(-90deg)'}`}}/></p>
        <div className={`styleTable ${expandBackgroundStyles ? 'expandBackgroundStyles' : ''}`}>
          <table>
          <tbody>
            <tr>
              <td><label htmlFor="bgColor"> Background Color:</label></td>
              <td><input type="color" ref={bgColor} name='bgColor' className='bgColor' onChange={bgColorOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="bgImage"> Background <br /> Image:</label></td>
              <td><input type="file" accept="image/*" ref={bgImage} name='bgImage' className='bgImage' onChange={bgImageOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="bgPositionX"> Background <br /> Position-X:</label></td>
              <td><input type="number" ref={bgPositionX} name='bgPositionX' className='bgPositionX' onChange={bgPositionXOnChange}/><br />
                <select name="bgPositionXUnit" className='bgPositionXUnit'>
                  <option value="%">PR(%)</option>
                  <option value="px">PX</option>
                </select></td>
            </tr>
            <tr>
              <td><label htmlFor="bgPositionY"> Background <br /> Position-Y:</label></td>
              <td><input type="number" ref={bgPositionY} name='bgPositionY' className='bgPositionY' onChange={bgPositionYOnChange}/><br />
                <select name="bgPositionYUnit" className='bgPositionYUnit'>
                  <option value="%">PR(%)</option>
                  <option value="px">PX</option>
                </select></td>
            </tr>
            <tr>
              <td><label htmlFor="bgRepeat">Background <br /> Repeat: </label></td>
              <td>
                <select ref={bgRepeat} name='bgRepeat' className='bgRepeat' onChange={bgRepeatOnChange}>
                  <option value="repeat">Repeat</option>
                  <option value="repeat-x">Repeat Horizontally</option>
                  <option value="repeat-y">Repeat Vertically</option>
                  <option value="no-repeat">No Repeat</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="bgSizeX"> Background <br /> Size-X:</label></td>
              <td><input type="number" ref={bgSizeX} name='bgSizeX' className='bgSizeX' onChange={bgSizeXOnChange}/><br />
                <select name="bgSizeXUnit" className='bgSizeXUnit'>
                  <option value="%">PR(%)</option>
                  <option value="px">PX</option>
                </select></td>
            </tr>
            <tr>
              <td><label htmlFor="bgSizeY"> Background <br /> Size-Y:</label></td>
              <td><input type="number" ref={bgSizeY} name='bgSizeY' className='bgSizeY' onChange={bgSizeYOnChange}/><br />
                <select name="bgSizeYUnit" className='bgSizeYUnit'>
                  <option value="%">PR(%)</option>
                  <option value="px">PX</option>
                </select></td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
      <div className="styleBlocks" style={{overflow:'hidden'}}>
        <p onClick={boxStyle}>Box Style <FontAwesomeIcon icon={faAngleDown} style={{transition:'0.5s ease-in-out',transform:`${expandBoxStyle ? 'none' : 'rotate(-90deg)'}`}}/></p>
        <div className={`styleTable ${expandBoxStyle ? 'expandBoxStyle' : ''}`}>
          <table>
          <tbody>
            <tr>
              <td><label htmlFor="width">Width: </label></td>
              <td><input type="number" ref={width} name='width' className='width' onChange={widthOnChange}/><br />
                  <select name="widthUnit" className='widthUnit'>
                    <option value="%">PR(%)</option>
                    <option value="px">PX</option>
                  </select></td>
            </tr>
            <tr>
              <td><label htmlFor="height">Height: </label></td>
              <td><input type="number" ref={height} name='height' className='height' onChange={heightOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="padding">Padding: </label></td>
              <td><input type="number" ref={padding} name='padding' className='padding' onChange={paddingOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="paddingTop">Padding Top: </label></td>
              <td><input type="number" ref={paddingTop} name='paddingTop' className='paddingTop' onChange={paddingTopOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="paddingRight">Padding Right: </label></td>
              <td><input type="number" ref={paddingRight} name='paddingRight' className='paddingRight' onChange={paddingRightOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="paddingBottom">Padding Bottom: </label></td>
              <td><input type="number" ref={paddingBottom} name='paddingBottom' className='paddingBottom' onChange={paddingBottomOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="paddingLeft">Padding Left: </label></td>
              <td><input type="number" ref={paddingLeft} name='paddingLeft' className='paddingLeft' onChange={paddingLeftOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="margin">Margin: </label></td>
              <td><input type="number" ref={margin} name='margin' className='margin' onChange={marginOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="marginTop">Margin Top: </label></td>
              <td><input type="number" ref={marginTop} name='marginTop' className='marginTop' onChange={marginTopOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="marginRight">Margin Right: </label></td>
              <td><input type="number" ref={marginRight} name='marginRight' className='marginRight' onChange={marginRightOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="marginBottom">Margin Bottom: </label></td>
              <td><input type="number" ref={marginBottom} name='marginBottom' className='marginBottom' onChange={marginBottomOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="marginLeft">Margin Left: </label></td>
              <td><input type="number" ref={marginLeft} name='marginLeft' className='marginLeft' onChange={marginLeftOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="borderWidth">Border Width: </label></td>
              <td><input type="number" ref={borderWidth} name='borderWidth' className='borderWidth' onChange={borderWidthOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="borderStyle">Border Style: </label></td>
              <td>
                <select ref={borderStyle} name='borderStyle' className='borderStyle' onChange={borderStyleOnChange}>
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="borderColor">Border Color: </label></td>
              <td><input type="color" ref={borderColor} name='borderColor' className='borderColor' onChange={borderColorOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="borderRadius">Border Radius: </label></td>
              <td><input type="number" ref={borderRadius} name='borderRadius' className='borderRadius' onChange={borderRadiusOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="shadowHorizontalOffset">Box Shadow <br /> Horizontal Offset:</label></td>
              <td><input type="number" ref={shadowHorizontalOffset} name='shadowHorizontalOffset' className='shadowHorizontalOffset' onChange={shadowHorizontalOffsetOnChange} /><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="shadowVerticalOffset">Box Shadow <br /> Vertical Offset:</label></td>
              <td><input type="number" ref={shadowVerticalOffset} name='shadowVerticalOffset' className='shadowVerticalOffset' onChange={shadowVerticalOffsetOnChange} /><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="shadowBlurRadius">Box Shadow <br /> Blur Radius:</label></td>
              <td><input type="number" ref={shadowBlurRadius} name='shadowBlurRadius' className='shadowBlurRadius' onChange={shadowBlurRadiusOnChange} /><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="shadowSpreadRadius">Box Shadow <br /> Spread Radius:</label></td>
              <td><input type="number" ref={shadowSpreadRadius} name='shadowSpreadRadius' className='shadowSpreadRadius' onChange={shadowSpreadRadiusOnChange} /><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="shadowColor">Box Shadow <br /> Color: </label></td>
              <td><input type="color" ref={shadowColor} name='shadowColor' className='shadowColor' onChange={shadowColorOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="overflow">Overflow: </label></td>
              <td> 
                <select ref={overflow} name='overflow' className='overflow' onChange={overflowOnChange}>
                  <option value="visible">Visible</option>
                  <option value="hidden">Hidden</option>
                  <option value="scroll">Scroll</option>
                  <option value="auto">Auto</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="overflowX">Horizontal <br /> Overflow: </label></td>
              <td> 
                <select ref={overflowX} name='overflowX' className='overflowX' onChange={overflowXOnChange}>
                  <option value="visible">Visible</option>
                  <option value="hidden">Hidden</option>
                  <option value="scroll">Scroll</option>
                  <option value="auto">Auto</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="overflowY">Vertical <br /> Overflow: </label></td>
              <td>
                <select ref={overflowY} name='overflowY' className='overflowY' onChange={overflowYOnChange}>
                  <option value="visible">Visible</option>
                  <option value="hidden">Hidden</option>
                  <option value="scroll">Scroll</option>
                  <option value="auto">Auto</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="boxSizing">Box Sizing: </label></td>
              <td>
                <select ref={boxSizing} name='boxSizing' className='boxSizing' onChange={boxSizingOnChange}>
                  <option value="content-box">Content Box</option>
                  <option value="border-box">Border Box</option>
                </select>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
      <div className="styleBlocks" style={{overflow:'hidden'}}>
        <p onClick={positioning}>Positioning <FontAwesomeIcon icon={faAngleDown} style={{transition:'0.5s ease-in-out',transform:`${expandPositioning ? 'none' : 'rotate(-90deg)'}`}}/></p>
        <div className={`styleTable ${expandPositioning ? 'expandPositioning' : ''}`}>
          <table>
          <tbody>
            <tr>
              <td><label htmlFor="position">Position: </label></td>
              <td>
                <select ref={position} name='position' className='position' onChange={positionOnChange}>
                  <option value="static">Static</option>
                  <option value="relative" style={{ position: 'relative' }}>Relative</option>
                  <option value="absolute" style={{ position: 'absolute' }}>Absolute</option>
                  <option value="fixed" style={{ position: 'fixed' }}>Fixed</option>
                  <option value="sticky" style={{ position: 'sticky' }}>Sticky</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="top">Top: </label></td>
              <td><input type="number" ref={top} name='top' className='top' onChange={topOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="bottom">Bottom: </label></td>
              <td><input type="number" ref={bottom} name='bottom' className='bottom' onChange={bottomOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="right">Right: </label></td>
              <td><input type="number" ref={right} name='right' className='right' onChange={rightOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="left">Left: </label></td>
              <td><input type="number" ref={left} name='left' className='left' onChange={leftOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="zIndex">Z-index: </label></td>
              <td><input type="number" ref={zIndex} name='zIndex' className='zIndex' onChange={zIndexOnChange}/><br /></td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
      <div className="styleBlocks" style={{overflow:'hidden'}}>
        <p onClick={flexboxAndGridStyles}>Flex and Grid <FontAwesomeIcon icon={faAngleDown} style={{transition:'0.5s ease-in-out',transform:`${expandfexboxAndGridStyles ? 'none' : 'rotate(-90deg)'}`}}/></p>
        <div className={`styleTable ${expandfexboxAndGridStyles ? 'expandfexboxAndGridStyles' : ''}`}>
          <table>
          <tbody>
            <tr>
              <td><label htmlFor="displayStyle">Display Style: </label></td>
              <td>
                <select ref={displayStyle} name='displayStyle' className='displayStyle' onChange={displayStyleOnChange}>
                  <option value="block" style={{ display: 'block' }}>Block</option>
                  <option value="inline" style={{ display: 'inline' }}>Inline</option>
                  <option value="inline-block" style={{ display: 'inline-block' }}>Inline-Block</option>
                  <option value="flex" style={{ display: 'flex' }}>Flex</option>
                  <option value="grid" style={{ display: 'grid' }}>Grid</option>
                  <option value="none" style={{ display: 'none' }}>None</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="flexDirection">Flex Direction: </label></td>
              <td>
                <select ref={flexDirection} name='flexDirection' className='flexDirection' onChange={flexDirectionOnChange}>
                  <option value="row">Row</option>
                  <option value="row-reverse">Row Reverse</option>
                  <option value="column">Column</option>
                  <option value="column-reverse">Column Reverse</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="flexWrap">Flex Wrap: </label></td>
              <td>
                <select ref={flexWrap} name='flexWrap' className='flexWrap' onChange={flexWrapOnChange}>
                  <option value="nowrap">No Wrap</option>
                  <option value="wrap">Wrap</option>
                  <option value="wrap-reverse">Wrap Reverse</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="justifyContent">Justify Content: </label></td>
              <td>
                <select ref={justifyContent} name='justifyContent' className='justifyContent' onChange={justifyContentOnChange}>
                  <option value="flex-start">Flex Start</option>
                  <option value="flex-end">Flex End</option>
                  <option value="center">Center</option>
                  <option value="space-between">Space Between</option>
                  <option value="space-around">Space Around</option>
                  <option value="space-evenly">Space Evenly</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="alignItems">Align Items: </label></td>
              <td>
                <select ref={alignItems} name='alignItems' className='alignItems' onChange={alignItemsOnChange}>
                  <option value="flex-start">Flex Start</option>
                  <option value="flex-end">Flex End</option>
                  <option value="center">Center</option>
                  <option value="baseline">Baseline</option>
                  <option value="stretch">Stretch</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="alignSelf">Align Self: </label></td>
              <td>
                <select ref={alignSelf} name='alignSelf' className='alignSelf' onChange={alignSelfOnChange}>
                  <option value="auto">Auto</option>
                  <option value="flex-start">Flex Start</option>
                  <option value="flex-end">Flex End</option>
                  <option value="center">Center</option>
                  <option value="baseline">Baseline</option>
                  <option value="stretch">Stretch</option>
                </select>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
      <div className="styleBlocks" style={{overflow:'hidden'}}>
        <p onClick={miscellaneous}>Miscellaneous <FontAwesomeIcon icon={faAngleDown} style={{transition:'0.5s ease-in-out',transform:`${expandMiscellaneous ? 'none' : 'rotate(-90deg)'}`}}/></p>
        <div className={`styleTable ${expandMiscellaneous ? 'expandMiscellaneous' : ''}`}>
          <table>
          <tbody>
            <tr>
              <td><label htmlFor="cursor">Cursor: </label></td>
              <td>
                <select ref={cursor} name='cursor' className='cursor' onChange={cursorOnChange}>
                  <option value="auto">Auto</option>
                  <option value="default" style={{ cursor: 'default' }}>Default</option>
                  <option value="pointer" style={{ cursor: 'pointer' }}>Pointer</option>
                  <option value="move" style={{ cursor: 'move' }}>Move</option>
                  <option value="text" style={{ cursor: 'text' }}>Text</option>
                  <option value="wait" style={{ cursor: 'wait' }}>Wait</option>
                  <option value="crosshair" style={{ cursor: 'crosshair' }}>Crosshair</option>
                  <option value="not-allowed" style={{ cursor: 'not-allowed' }}>Not Allowed</option>
                  <option value="help" style={{ cursor: 'help' }}>Help</option>
                  <option value="progress" style={{ cursor: 'progress' }}>Progress</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="outlineStyle">Outline Style </label></td>
              <td>
                <select ref={outlineStyle} name='outlineStyle' className='outlineStyle' onChange={outlineStyleOnChange}>
                  <option value="none">None</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="solid">Solid</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="outlineColor">Outline Color </label></td>
              <td>
                <input ref={outlineColor} type='color' name='outlineColor' className='outlineColor' onChange={outlineColorOnChange} />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="outlineWidth">Outline Width </label></td>
              <td>
                <input ref={outlineWidth} type='number' name='outlineWidth' className='outlineWidth' onChange={outlineWidthOnChange} />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="opacity">Opacity: </label></td>
              <td><input type="number" ref={opacity} name='opacity' className='opacity' onChange={opacityOnChange}/><br /></td>
            </tr>
            <tr>
              <td><label htmlFor="visibility">Visibility: </label></td>
              <td>
                <select ref={visibility} name='visibility' className='visibility' onChange={visibilityOnChange}>
                  <option value="visible">Visible</option>
                  <option value="hidden">Hidden</option>
                </select>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserCss