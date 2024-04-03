import React, { useState , useRef, useEffect } from "react";
import './editPage.css';
import UserPage from '../UserPage/UserPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faParagraph } from '@fortawesome/free-solid-svg-icons';

const editPage = () => {

    const [elementHover, setElementHover] = useState(false);
    const [styleHover, setStyleHover] = useState(true);
    var [cName, changeClass] = useState('');

    function mouseOver(){
        setElementHover(true); 
        setStyleHover(false)
    }
    function mouseLeave(){
        setElementHover(false); 
        setStyleHover(true)
    }
    const elementRef = useRef(null);

    const handleDrop = (event) => {
        event.preventDefault();
        console.log('Item dropped!');
    };

    const logOuterHTML = () => {
      if (elementRef.current) {
        console.log(elementRef.current.outerHTML);
      }
    };

    return(
        <>
        <div className="main">
            <div className="tags">
                <div className="toolBar">
                    <ul>
                        <li className="add" onMouseEnter={() => mouseOver()} onMouseLeave={() => mouseLeave()}>+</li>
                    </ul>
                </div>
                <div className={`elements ${elementHover ? 'elementHovered' : ''}`}  onMouseEnter={() => mouseOver()} onMouseLeave={() => mouseLeave()}>
                    <h5>Drag Elements</h5>
                    <div className="list">
                        <ul>
                            <li className="mainList">
                                <p>Text</p>
                                <li draggable='true' className="paragraph">
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li draggable='true'>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li draggable='true'>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li draggable='true'>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                            </li>
                            <li className="mainList">
                                <p>Text</p>
                                <li draggable='true'>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li draggable='true'>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <UserPage className="edit" c={cName} onDrop={handleDrop}/>
            <div className={`style ${styleHover ? '' : 'styleHovered'}`}></div>
        </div>
        </>
    )
}
export default editPage;