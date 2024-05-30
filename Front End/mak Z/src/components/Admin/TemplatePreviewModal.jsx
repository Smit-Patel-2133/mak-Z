import React from 'react';

const TemplatePreviewModal = ({ isOpen, onRequestClose, htmlContent }) => {
    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <button className="absolute top-2 right-2 text-xl h-25 w-20 bg-red-950" onClick={onRequestClose}>×
                    </button>

                    <div className="modal">
                        {/* Display entire HTML content received from the server */}
                        <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
                        {/* Additional close button */}
                        <button className="absolute bottom-2 right-2 text-xl" onClick={onRequestClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplatePreviewModal;
