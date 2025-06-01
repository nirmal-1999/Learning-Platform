import React, { useEffect, useState } from "react";
import AddDepartmentModal from "./AddDepartmentModal";

const AddCourseModal = ({ isOpen, onClose, onSubmit }) => {
  const username = localStorage.getItem("username");
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    department: "",
    course_name: "",
    image: null,
    duration: "",
  });
  const [showDeptModal, setShowDeptModal] = useState(false);


  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/courses/all/departments/${username}`);
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    if (isOpen) {
      fetchDepartments();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-gray-400/30 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <div className="flex gap-2">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="block w-full border px-3 py-2 rounded"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.department}>
                    {dept.department}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => setShowDeptModal(true)}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Course Name</label>
            <input
              type="text"
              name="course_name"
              value={formData.course_name}
              onChange={handleChange}
              className="mt-1 block w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="block mt-1 w-full cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Duration</label>
            <input
              type="time"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
      {showDeptModal && (
        <AddDepartmentModal
          isOpen={showDeptModal}
				  onClose={() => setShowDeptModal(false)}
        />
      )}

    </div>


  );
};

export default AddCourseModal;