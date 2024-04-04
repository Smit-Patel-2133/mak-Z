import React, { useState , useRef, useEffect } from "react";
import './editPage.css';
import UserPage from '../UserPage/UserPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faParagraph, faHeading, faListOl } from '@fortawesome/free-solid-svg-icons';

const editPage = () => {

    const [elementHover, setElementHover] = useState(false);
    const [styleHover, setStyleHover] = useState(true);

    function mouseOver(){
        setElementHover(true); 
        setStyleHover(false)
    }
    function mouseLeave(){
        setElementHover(false); 
        setStyleHover(true)
    }

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
                                <ul>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "heading1");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Heading 1</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "heading2");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Heading 2</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "heading3");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Heading 3</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "heading4");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Heading 4</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "heading5");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Heading 5</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "heading6");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Heading 6</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "paragraph");}}>
                                        <FontAwesomeIcon icon={faParagraph} />
                                        <p>paragraph</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "oList");}}>
                                        <FontAwesomeIcon icon={faListOl} />
                                        <p>Ordered<br /> List</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="mainList">
                                <p>Text</p>
                                <ul>
                                    <li draggable='true'>
                                        <FontAwesomeIcon icon={faParagraph} />
                                        <p>Paragraph</p>
                                    </li>
                                    <li draggable='true'>
                                        <FontAwesomeIcon icon={faParagraph} />
                                        <p>Paragraph</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <UserPage className="edit"/>
            <div className={`style ${styleHover ? '' : 'styleHovered'}`}></div>
        </div>
        </>
    )
}
export default editPage;