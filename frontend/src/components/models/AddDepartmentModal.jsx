import React, { useState } from 'react'
import axios from 'axios';

function AddDepartmentModal({ isOpen, onClose }) {

    const [newDepartment, setNewDepartment] = useState("");


    const handleAddDepartment = async () => {
        const payload = {
            department: newDepartment
        };
    
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/courses/add/department`, payload);
            alert("Department added successfully!");
            onClose();
        } catch (error) {
            console.error("Error adding Department:", error);
            alert("Failed to add Department.");
            onClose();
        }
    };
    
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-xl w-full max-w-sm shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-lg font-semibold mb-4">Add Department</h2>
                <input
                    type="text"
                    placeholder="Enter Department Name"
                    value={newDepartment}
                    onChange={(e) => setNewDepartment(e.target.value)}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddDepartment}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddDepartmentModal