import { useState } from "react";
import './editPage.css';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faParagraph } from '@fortawesome/free-solid-svg-icons';

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
                                <li>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                            </li>
                            <li className="mainList">
                                <p>Text</p>
                                <li>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faParagraph} />
                                    <p>Paragraph</p>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="edit">

            </div>
            <div className={`style ${styleHover ? '' : 'styleHovered'}`}></div>
        </div>
        </>
    )
}
export default editPage;