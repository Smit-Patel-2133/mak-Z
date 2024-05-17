import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from "axios";

const ProjectDetailsModal = ({ show, onClose }) => {
    const user = useSelector(state => state.auth);
    const userEmail=user.email;
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [visibility, setVisibility] = useState('public');
    const [showError, setShowError] = useState(false);
    const handleSubmit = async () => {
        if (projectName.trim() === '') {
            setShowError(true);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/createNewProject', {
                templateName: projectName,
                templateType: projectType,
                templateVisibility: visibility,
                email:user.email,
                // Add other data you want to send to the backend
            });

            // Assuming the backend sends back the project ID in the response data
            const projectId = response.data.projectId;

            // Navigate to the edit page with the newly created project ID
            navigate(`/editPage/${projectId}`);
        } catch (error) {
            console.error('Error creating project:', error);
            // Handle error, show a message to the user, etc.
        }
    };

    const handleProjectNameChange = (e) => {
        setProjectName(e.target.value);
        if (e.target.value.trim() !== '') {
            setShowError(false);
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">New Project</h2>
                <div className="mt-4">
                    <label htmlFor="projectName" className="block text-left">
                        Project Name:
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        className={`border rounded-lg p-2 w-full ${showError ? 'border-red-500' : ''}`}
                        value={projectName}
                        onChange={handleProjectNameChange}
                    />
                    {showError && (
                        <p className="text-red-500 text-sm mt-1">Project name is required.</p>
                    )}
                </div>
                <div className="mt-4">
                    <label htmlFor="projectType" className="block text-left">
                        Project Type:
                    </label>
                    <select
                        id="projectType"
                        className="border rounded-lg p-2 w-full"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        <option value="login">Login</option>
                        <option value="home">Home</option>
                        <option value="landing">Landing</option>
                        <option value="signup">Signup</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label htmlFor="visibility" className="block text-left">
                        Project Visibility:
                    </label>
                    <select
                        id="visibility"
                        className="border rounded-lg p-2 w-full"
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-green-600 transition duration-200"
                        disabled={projectName.trim() === ''} // Disable if project name is empty
                    >
                        Create
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProjectDetailsModal