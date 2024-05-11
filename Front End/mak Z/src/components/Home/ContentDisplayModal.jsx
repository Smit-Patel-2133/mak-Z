import React from 'react';

const ContentDisplayModal = ({ show, onClose, htmlContent, imageSrc }) => {
    if (!show) {
        return null; // Don't render if not shown
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Project Content</h2>
                    <button onClick={onClose} className="text-xl text-gray-600">
                        &times; {/* Close button */}
                    </button>
                </div>

                {imageSrc && (
                    <div className="flex justify-center mb-4">
                        <img src={imageSrc} alt="Project Preview" className="w-1/2 rounded-lg shadow" />
                    </div>
                )}

                {htmlContent && (
                    <div className="border rounded-lg p-4 bg-gray-50 overflow-auto">
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> {/* Injecting HTML content */}
                    </div>
                )}

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentDisplayModal;
