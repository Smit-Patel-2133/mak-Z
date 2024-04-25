import React, { useState , useRef, useEffect } from "react";
import './editPage.css';
import UserPage from '../UserPage/UserPage';
import UserCss from '../UserCss/UserCss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faParagraph, faHeading, faFloppyDisk, faHouse, faListOl, faListUl, faE, faS, faN, faB, faD, faI, faF, faImage, faVideo, faSubscript, faSection, faSuperscript, faSquare, faDownload, faEye } from '@fortawesome/free-solid-svg-icons';

const editPage = () => {

    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //       const confirmationMessage = "Changes you made may not be saved.";
    //       event.returnValue = confirmationMessage;
    //       return confirmationMessage;
    //     };
    
    //     window.addEventListener("beforeunload", handleBeforeUnload);
    
    //     return () => {
    //       window.removeEventListener("beforeunload", handleBeforeUnload);
    //     };
    // }, []);
    

    const [elementHover, setElementHover] = useState(false);
    const [subElementHover, setSubElementHover] = useState(false);
    const [styleHover, setStyleHover] = useState(true);
    const [eyeClick, setEyeClick] = useState(false);
    const [dataFromUserPage, setDataFromUserPage] = useState('');
    const userPage = useRef(null);
    const templateType = useRef(null);
    const templateName = useRef(null);
    const templateLabel = useRef(null);

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
            userPage.current.logOuterHTML(templateName.current,templateLabel.current,templateType.current,false);
        }
    }

    function saveclicked(){
        if (userPage.current) {
            userPage.current.logOuterHTML(templateName.current,templateLabel.current,templateType.current,true);
        }
    }

    function eyeclicked(){
        if(userPage.current){
            userPage.current.eyeClickUserPage()
        }
        const elements = document.getElementsByClassName('editable');
        if(!eyeClick){
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('editableBorder');
            }
        }else{
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add('editableBorder');
            }
        }
        setEyeClick(!eyeClick)
    }

    function sendDataToUserCss(data) {
        setDataFromUserPage(data);
    }

    return(
        <>
        <div className="mainEditPage">
            <div className="tags">
                <div className="toolBar">
                    <ul style={{float:'left'}}>
                        <li className="add" onMouseEnter={() => mouseOver()} onMouseLeave={() => mouseLeave()}>+</li>
                        <li className='home'><NavLink to="/home"><FontAwesomeIcon icon={faHouse} /></NavLink></li>
                        <li className='save' onClick={saveclicked}><FontAwesomeIcon icon={faFloppyDisk} /></li>
                        <li className="download" onClick={download}><FontAwesomeIcon icon={faDownload} /></li>
                        <li className='eye' onClick={eyeclicked}><FontAwesomeIcon icon={faEye} /></li>
                     </ul>
                     <div className="templateInfo">
                        <input type="text" placeholder="Template Name" ref={templateName}/>/
                        <select name="templateLabel" className="templateLabel" ref={templateLabel}>
                            <option value="home">Home</option>
                            <option value="login">Login</option>
                            <option value="Sign Up">Sign Up</option>
                            <option value="Landing">Landing</option>
                        </select>
                    </div>
                     <div className="templateTypeBlock">
                        <label htmlFor="templateType">Template Type: </label>
                        <select name="templateType" ref={templateType}>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                     </div>
                </div>
                <div className={`elements ${elementHover ? 'elementHovered' : ''}`}  onMouseEnter={() => mouseOver()} onMouseLeave={() => mouseLeave()}>
                    <h5>Drag Elements</h5>
                    <div className="list">
                        <ul>
                            <li className="mainList">
                                <p>Text</p>
                                <ul>
                                    <li draggable='true' className={`heading1Drag ${subElementHover ? 'subElementHover' : ''}`} onMouseEnter={() => mouseOverOnSubElement()} onMouseLeave={() => mouseLeaveOnSubElement()} onDragStart={(event) => {event.dataTransfer.setData("element", "heading1");}}>
                                        <FontAwesomeIcon icon={faHeading} />
                                        <p>Headings</p>
                                    </li>
                                    <div className={`heading ${subElementHover ? 'subElementHover' : ''}`} onMouseEnter={() => mouseOverOnSubElement()} onMouseLeave={() => mouseLeaveOnSubElement()}>
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
                            <li className="mainList">
                                <p>Media</p>
                                <ul>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "img");}}>
                                        <FontAwesomeIcon icon={faImage} />
                                        <p>Pictures</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "video");}}>
                                        <FontAwesomeIcon icon={faVideo} />
                                        <p>Video</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="mainList">
                                <p>Components</p>
                                <ul>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "button");}}>
                                        <FontAwesomeIcon icon={faB} />
                                        <p>Button</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "dropdown");}}>
                                        <FontAwesomeIcon icon={faB} />
                                        <p>Drop Down</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "form");}}>
                                        <FontAwesomeIcon icon={faF} />
                                        <p>Form</p>
                                    </li>
                                    <li draggable='true' onDragStart={(event) => {event.dataTransfer.setData("element", "navbar");}}>
                                        <FontAwesomeIcon icon={faN} />
                                        <p>Navbar</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`eyeBack ${eyeClick ? 'eyeClick' : ''}`} onClick={eyeclicked}>
                <p><FontAwesomeIcon icon={faEye} /></p>
            </div>
            <UserPage bodyPageRef={userPage} styleHover={styleHover} eyeClick={eyeClick} className='edit' sendDataToUserCss={sendDataToUserCss}/>
            <UserCss styleHover={styleHover} receivedData={dataFromUserPage} />
        </div>
        </>
    )
}
export default editPage;