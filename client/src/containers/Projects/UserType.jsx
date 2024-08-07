// src/containers/Projects/Usertype.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from './projects'; // Import projects data

const Usertype = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const openModal = (type) => {
    setUserType(type);
    setIsModalOpen(true);
    setPasscode('');
    setMessage('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage('');
  };

  const handlePasscodeChange = (e) => setPasscode(e.target.value);

  const handleSubmit = () => {
    if (userType === 'client') {
      handleClientPasscode();
    } else if (userType === 'consultant') {
      handleConsultantPasscode();
    }
  };

  const handleClientPasscode = () => {
    const project = projects.find(p => p.passcode === passcode);

    if (project) {
      setMessage('Well done');
      setPasscode('');
      setTimeout(() => {
        navigate(`/project/${project.id}`); // Redirect to the project detail page
      }, 500);
    } else {
      setMessage('Incorrect passcode');
    }
  };

  const handleConsultantPasscode = () => {
    if (passcode === '1234') {
      setMessage('Well done');
      setPasscode('');
      setTimeout(() => {
        navigate('/project/consultant'); // Redirect to the Consultant page
      }, 500);
    } else {
      setMessage('Incorrect passcode');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Select User Type</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => openModal('client')}
          className="bg-blue-500 text-white text-xl py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
        >
          Client
        </button>
        <button
          onClick={() => openModal('consultant')}
          className="bg-green-500 text-white text-xl py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition"
        >
          Consultant
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Enter Passcode</h2>
            <input
              type="password"
              value={passcode}
              onChange={handlePasscodeChange}
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
              placeholder="Passcode"
            />
            {message && (
              <p className={`mb-4 text-lg ${message === 'Well done' ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
            <div className="flex justify-end gap-2">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usertype;
