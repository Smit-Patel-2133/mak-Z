import React,{ useState, useEffect } from 'react';
import './TemplatePreviewModal.css'; // Create a CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRectangleXmark} from '@fortawesome/free-solid-svg-icons';



const TemplatePreviewModal = ({ isOpen, onRequestClose, htmlContent }) => {

    useEffect(() => {
        let divOfCode=document.getElementsByClassName('modal-content')[0];
        if(divOfCode && htmlContent) divOfCode.innerHTML+=htmlContent;
    }, [isOpen]);

    function closePress(){
        console.log('aaa')
    }

    return (
        <div>
            {isOpen && (
                <>
                <button className="closeButtonPreview" onClick={onRequestClose}><FontAwesomeIcon icon={faRectangleXmark} /></button>
                <div className='modal-content'>
                </div>
                </>
            )}
        </div>
    );
};

export default TemplatePreviewModal;
