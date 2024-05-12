import React, {useEffect, useState} from 'react';

const ReportTemplateModal = ({ show, onClose, templateName }) => {
    const [reportDescription, setReportDescription] = useState('');
    useEffect(() => {

    }, []);

    const handleSubmit = () => {
        // Implement reporting functionality here
        console.log('Reported Template:', templateName);
        console.log('Report Description:', reportDescription);


        onClose(); // Close the modal after submitting the report
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50 ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg w-11/12 md:max-w-md mx-auto shadow-lg z-50 overflow-y-auto">
                <div className="py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <h2 className="text-xl font-semibold">Report Template</h2>
                        <button className="text-black close-btn" onClick={onClose}>&times;</button>
                    </div>
                    <p className="mb-4">You are reporting: {templateName}</p>
                    <textarea
                        className="w-full border rounded-lg p-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300 mb-4"
                        rows="4"
                        value={reportDescription}
                        onChange={(e) => setReportDescription(e.target.value)}
                        placeholder="Please provide a description for why you are reporting this template..."
                    ></textarea>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300" onClick={handleSubmit}>Submit Report</button>
                </div>
            </div>
        </div>
    );
};

export default ReportTemplateModal;
