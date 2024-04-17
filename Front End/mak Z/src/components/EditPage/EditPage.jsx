import React, { useState , useRef, useEffect } from "react";
import './editPage.css';
import UserPage from '../UserPage/UserPage';
import UserCss from '../UserCss/UserCss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faParagraph, faHeading, faListOl, faListUl, faE, faS, faD, faI, faF, faSubscript, faSection, faSuperscript, faSquare, faDownload } from '@fortawesome/free-solid-svg-icons';

const editPage = () => {

    const [elementHover, setElementHover] = useState(false);
    const [subElementHover, setSubElementHover] = useState(false);
    const [styleHover, setStyleHover] = useState(true);
    const [dataFromUserPage, setDataFromUserPage] = useState('');
    const userPage = useRef(null);

    function mouseOver(){
        setElementHover(true); 
        setStyleHover(false)
    }
    function mouseLeave(){
        setElementHover(false); 
        setStyleHover(true)
    }
    function mouseOverOnSubElement(){
        setSubElementHover(true)
    }
    function mouseLeaveOnSubElement(){
        setSubElementHover(false)
    }
    
    function download(){
        if (userPage.current) {
            userPage.current.logOuterHTML();
        }
    }

    function sendDataToUserCss(data) {
        setDataFromUserPage(data);
    }

    return(
        <>
        <div className="main">
            <div className="tags">
                <div className="toolBar">
                    <ul>
                        <li className="add" onMouseEnter={() => mouseOver()} onMouseLeave={() => mouseLeave()}>+</li>
                        <li className="download" onClick={download}><FontAwesomeIcon icon={faDownload} /></li>
                    </ul>
                </div>
                <div className={`elements ${elementHover ? 'elementHovered' : ''}`}  onMouseEnter={() => mouseOver()} onMouseLeave={() => mouseLeave()}>
                    <h5>Drag Elements</h5>
                    <div className="list">
                        <ul>
                            <li className="mainList">
                                <p>Text</p>
                                <ul>
                                    <li draggable='true' className={`${subElementHover ? 'subElementHover' : ''}`} onMouseEnter={() => mouseOverOnSubElement()} onMouseLeave={() => mouseLeaveOnSubElement()} onDragStart={(event) => {event.dataTransfer.setData("element", "heading1");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Headings</p>
                                    </li>
                                    <div className={`headings ${subElementHover ? 'subElementHover' : ''}`} onMouseEnter={() => mouseOverOnSubElement()} onMouseLeave={() => mouseLeaveOnSubElement()}>
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
                                        </ul>
                                    </div>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "paragraph");}}>
                                        <FontAwesomeIcon icon={faParagraph} />
                                        <p>paragraph</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "oList");}}>
                                        <FontAwesomeIcon icon={faListOl} />
                                        <p>Ordered<br /> List</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "uList");}}>
                                        <FontAwesomeIcon icon={faListUl} />
                                        <p>Unordered<br /> List</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "em");}}>
                                        <FontAwesomeIcon icon={faE} />
                                        <p>Emphasis</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "strong");}}>
                                        <FontAwesomeIcon icon={faS} />
                                        <p>Strong</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "del");}}>
                                        <FontAwesomeIcon icon={faD} />
                                        <p>Deleted Text</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "ins");}}>
                                        <FontAwesomeIcon icon={faI} />
                                        <p>Inserted Text</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "sub");}}>
                                        <FontAwesomeIcon icon={faSubscript} />
                                        <p>Subscript</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "sup");}}>
                                        <FontAwesomeIcon icon={faSuperscript} />
                                        <p>Superscript</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="mainList">
                                <p>Boxes</p>
                                <ul>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "div");}}>
                                        <FontAwesomeIcon icon={faSquare} />
                                        <p>Divition</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "section");}}>
                                        <FontAwesomeIcon icon={faSection} />
                                        <p>Section</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "header");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Header</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "footer");}}>
                                        <FontAwesomeIcon icon={faF} />
                                        <p>Footer</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <UserPage bodyPageRef={userPage} styleHover={styleHover} className="edit" sendDataToUserCss={sendDataToUserCss}/>
            <UserCss styleHover={styleHover} receivedData={dataFromUserPage} />
        </div>
        </>
    )
}
export default editPage;