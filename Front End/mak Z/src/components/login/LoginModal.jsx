import React from 'react';

const LoginModal = ({ show, onClose, onLogin }) => {
    if (!show) {
        return null; // Don't render if not shown
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
                <h2 className="text-2xl font-bold">You are not logged in!</h2>
                <p className="mt-2">Please log in to create a new project.</p>
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={onLogin}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-600 transition duration-200"
                    >
                        Log In
                    </button>
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

export default LoginModal;
