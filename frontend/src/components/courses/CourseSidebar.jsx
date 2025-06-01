import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";



const CourseSidebar = ({ selectedId, onSelect, content}) => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (title) => {
        setExpandedSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="w-[28%] bg-gray-600 text-white h-screen overflow-y-auto border-r border-gray-700">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Contents</h2>
                {/* <button onClick={onClose}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button> */}
            </div>
            {content.map((section, idx) => (
                <div key={idx}>
                    <hr className="text-gray-400 mb-2"/>
                    <button
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:underline cursor-pointer"
                        onClick={() => toggleSection(section.title)}
                    >
                        <span>{section.title}</span>
                        {expandedSections[section.title] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    <hr className="text-gray-400 mt-2"/>
                    {expandedSections[section.title] && (
                        <div className="pl-4">
                            {section.lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className={`px-4 py-2 text-sm cursor-pointer flex items-start gap-2 hover:bg-gray-800 ${selectedId === lesson.id ? "bg-black" : ""
                                        }`}
                                    onClick={() => onSelect(lesson)}
                                >
                                    <div
                                        className={`mt-1 w-3 h-3 rounded-full border ${selectedId === lesson.id
                                                ? "bg-white border-white"      
                                                : lesson.completed
                                                    ? "bg-gray-400 border-gray-400" 
                                                    : "border-gray-400"             
                                            }`}
                                    ></div>
                                    <div className="flex flex-col">
                                        <span
                                            className={"text-white"}
                                        >
                                            {lesson.title}
                                        </span>
                                        <span className="text-xs text-gray-300">{lesson.duration}</span>
                                    </div>
                                </div>

                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CourseSidebar;
