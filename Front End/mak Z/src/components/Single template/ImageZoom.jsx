import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ImageZoom = ({ image, userName, onDoubleClick }) => {
    return (
        <div
            className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onDoubleClick={onDoubleClick}
        >
            <div className="relative flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-lg">
                <div className="flex justify-between w-full">
                    <span className="text-xl font-bold">{userName}</span>
                    <button
                        className="text-lg text-gray-600 hover:text-red-600"
                        onClick={onDoubleClick}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <img
                    src={`data:image/png;base64,${image.htmlImg}`}
                    alt={image.name}
                    className="max-w-full max-h-[80vh] object-contain mt-4"
                />
            </div>
        </div>
    );
};

export default ImageZoom;
