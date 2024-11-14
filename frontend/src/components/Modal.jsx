import React, { useEffect } from 'react';

function Modal({ isOpen, closeModal, speed }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Typing Speed</h2>
        <p className="text-gray-700 mb-6">Your typing speed is <span className="font-semibold">{speed}</span> words per minute!</p>
        <button
          onClick={closeModal} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
