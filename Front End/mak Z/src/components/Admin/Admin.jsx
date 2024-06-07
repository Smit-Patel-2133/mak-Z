import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Header from "../Header/Header.jsx";
import { BounceLoader } from "react-spinners";
import './admin.css';
import TemplatePreviewModal from "./TemplatePreviewModal.jsx";

Modal.setAppElement('#root');

const Admin = () => {
    const [users, setUsers] = useState(0);
    const [templateDownloads, setTemplateDownloads] = useState(0);
    const [reportedTemplates, setReportedTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        setError('');
        try {
            // Fetch user count
            const userResponse = await axios.post('http://localhost:5000/api/getUserCount');
            setUsers(userResponse.data.userCount);

            // Fetch template downloads count
            const templateDownloadsResponse = await axios.post('http://localhost:5000/api/getTemplateDownloadsCount');
            setTemplateDownloads(templateDownloadsResponse.data.templateDownloadsCount);

            // Fetch reported templates
            const reportedTemplatesResponse = await axios.post('http://localhost:5000/api/getReportedTemplates');
            setReportedTemplates(reportedTemplatesResponse.data.reportedTemplates);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCheckboxChange = (templateId, isValid) => {
        // Update the reportedTemplates state with the modified validity status for the template
        setReportedTemplates(reportedTemplates.map(template =>
            template.templateid === templateId ? { ...template, isValid: isValid } : template
        ));

        // Send the updated validity status and template ID to the backend
        sendValidityStatus(templateId, isValid);
    };

    const sendValidityStatus = async (templateId, isValid) => {
        try {
            // Send the validity status and template ID to the backend
            const response = await axios.post(
                'http://localhost:5000/api/updateValidityStatus',
                { id: templateId, valid: isValid }
            );
            console.log('Validity status updated:', response.data);

            // If the response is successful, fetch the reported templates again to update the UI
            if (response.status === 200) {
                fetchData();
            }
        } catch (error) {
            console.error('Error updating validity status:', error);
        }
    };

    const handlePreview = async (templateId) => {
        if (templateId) {
            try {
                const res = await axios.post('http://localhost:5000/fetchCodeFromId', { templateId });
                setHtmlContent(res.data.pageBodyContent);
                setModalIsOpen(true);

                await axios.delete('http://localhost:5000/delete/Mak-Z.html');
                console.log('File deleted successfully');
            } catch (error) {
                console.error('Error in admin preview:', error);
            }
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        console.log('close button press')
        setHtmlContent('');
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BounceLoader color={'#123abc'} loading={isLoading} />
            </div>
        );
    }

    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Header />
            <h1 className="mb-4 items-center content-center">Welcome, Admin!</h1>
            <div className='flex items-center justify-center'>
                <div className="text-center mb-4 mr-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{users}</h1>
                    <p>Users</p>
                </div>
                <div className="text-center mb-4 ml-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{templateDownloads}</h1>
                    <p>Template Downloads</p>
                </div>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Template ID</th>
                    <th className="py-2 px-4 border-b">Reported By</th>
                    <th className="py-2 px-4 border-b">Reported To</th>
                    <th className="py-2 px-4 border-b">Description</th>
                    <th className="py-2 px-4 border-b">View</th>
                    <th className="py-2 px-4 border-b">Reported</th>
                </tr>
                </thead>
                <tbody>
                {reportedTemplates.map(template => (
                    <tr key={template.templateid}>
                        <td className="py-2 px-4 border-b">{template.templateid}</td>
                        <td className="py-2 px-4 border-b">{template.email}</td>
                        <td className="py-2 px-4 border-b">{template.reported_to}</td>
                        <td className="py-2 px-4 border-b">{template.description}</td>
                        <td>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"
                                onClick={() => handlePreview(template.templateid)}
                            >
                                Preview
                            </button>
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"
                                onClick={() => handleCheckboxChange(template.templateid, true)} // Pass true for valid
                            >
                                Valid
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-full"
                                onClick={() => handleCheckboxChange(template.templateid, false)} // Pass false for invalid
                            >
                                Invalid
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <TemplatePreviewModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                htmlContent={htmlContent}
            />
        </>
    );
};

export default Admin;
