import React from 'react';
import './TemplatePreviewModal.css'; // Create a CSS file for custom styles

const TemplatePreviewModal = ({ isOpen, onRequestClose, htmlContent }) => {
    console.log("this is the html content:=", htmlContent);
    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <button className="absolute top-2 right-2 text-xl h-25 w-20 bg-red-950" onClick={onRequestClose}>×
                    </button>

                    <div className="modal">
                        {/* Display the base64 image content */}
                        <div className="modal-content">
                            <img src={`data:image/jpeg;base64,${htmlContent}`} alt="Template Preview" />
                        </div>
                        {/* Additional close button */}
                        <button className="absolute bottom-2 right-2 text-xl" onClick={onRequestClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplatePreviewModal;
