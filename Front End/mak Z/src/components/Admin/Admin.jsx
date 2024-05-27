// src/Admin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Header/Header.jsx";
import {BounceLoader} from "react-spinners";

const Admin = () => {
    const [users, setUsers] = useState(0);
    const [templateDownloads, setTemplateDownloads] = useState(0);
    const [reportedTemplates, setReportedTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError('');
            try {
                const response = await axios.post('http://localhost:5000/api/adminData');
                if (response.status === 200) {
                    setUsers(response.data.userCount);
                    setTemplateDownloads(response.data.templateDownloadsCount);
                    setReportedTemplates(response.data.reportedTemplates);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleCheckboxChange = (templateId) => {
        setReportedTemplates(reportedTemplates.map(template =>
            template.templateid === templateId ? { ...template, reported: !template.reported } : template
        ));
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/saveTemplates', { templates: reportedTemplates });
            console.log('Changes saved:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BounceLoader color={'#123abc'} loading={isLoading}/>
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
                        <td className="py-2 px-4 border-b text-center">
                            <input
                                type="checkbox"
                                checked={template.reported}
                                onChange={() => handleCheckboxChange(template.templateid)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                onClick={handleSave}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Save
            </button>
        </>
    );
};

export default Admin;
