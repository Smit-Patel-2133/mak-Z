import React, {useState} from "react";
import './editPage.css'

const editPage = (props) => {
    return(
        <>
        <div className="main">
            <div className="tags">
                <div className="toolBar">
                    <ul>
                        <li className="add">+</li>
                    </ul>
                </div>
                <div className="edit"></div>
                <div className="elements">
                    <p>that is element part</p>
                </div>
            </div>
            <div className="style"></div>
        </div>
        </>
    )
}
export default editPage;