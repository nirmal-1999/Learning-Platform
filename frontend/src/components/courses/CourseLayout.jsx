import { useEffect, useState } from "react";
import CourseSidebar from "./CourseSidebar";
import VideoPlayer from "../videos/VideoPlayer";

const CourseLayout = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);


    const courseContent = [
        {
            title: "Introduction",
            lessons: [
                { id: 1, title: "ChatGPT: The AI game changer", duration: "45s", videoId: "YOUTUBE_VIDEO_ID_1" },
                { id: 2, title: "How ChatGPT works", duration: "1m 45s", videoId: "YOUTUBE_VIDEO_ID_2" },
            ],
        },
        {
            title: "1. Prompt Best Practices",
            lessons: [
                { id: 3, title: "Providing context and using delimiters", duration: "1h 26m 98s", videoId: "YOUTUBE_VIDEO_ID_3" },
                { id: 4, title: "Use detailed instructions", duration: "2m 47s", videoId: "YOUTUBE_VIDEO_ID_4" },
                { id: 5, title: "Challenge: Prompt refactor", duration: "59s", videoId: "YOUTUBE_VIDEO_ID_5" },
                { id: 6, title: "Solution: Prompt refactor", duration: "1m 55s", videoId: "YOUTUBE_VIDEO_ID_6" },
            ],
        },
        {
            title: "2. Learn JavaScript",
            lessons: [
                { id: 7, title: "Providing context and using delimiters", duration: "1h 26m 98s", videoId: "YOUTUBE_VIDEO_ID_7" },
                { id: 8, title: "Use detailed instructions", duration: "2m 47s", videoId: "YOUTUBE_VIDEO_ID_8" },
                { id: 9, title: "Challenge: Prompt refactor", duration: "59s", videoId: "YOUTUBE_VIDEO_ID_9" },
                { id: 10, title: "Solution: Prompt refactor", duration: "1m 55s", videoId: "YOUTUBE_VIDEO_ID_10" },
            ],
        },
        {
            title: "3. DOM in Javascript",
            lessons: [
                { id: 11, title: "Providing context and using delimiters", duration: "1h 26m 98s", videoId: "YOUTUBE_VIDEO_ID_11" },
                { id: 12, title: "Use detailed instructions", duration: "2m 47s", videoId: "YOUTUBE_VIDEO_ID_12" },
                { id: 13, title: "Challenge: Prompt refactor", duration: "59s", videoId: "YOUTUBE_VIDEO_ID_13" },
                { id: 14, title: "Solution: Prompt refactor", duration: "1m 55s", videoId: "YOUTUBE_VIDEO_ID_14" },
            ],
        },
        {
            title: "4. Array in Javascript",
            lessons: [
                { id: 15, title: "Providing context and using delimiters", duration: "1h 26m 98s", videoId: "YOUTUBE_VIDEO_ID_15" },
                { id: 16, title: "Use detailed instructions", duration: "2m 47s", videoId: "YOUTUBE_VIDEO_ID_16" },
                { id: 17, title: "Challenge: Prompt refactor", duration: "59s", videoId: "YOUTUBE_VIDEO_ID_17" },
                { id: 18, title: "Solution: Prompt refactor", duration: "1m 55s", videoId: "YOUTUBE_VIDEO_ID_18" },
            ],
        },
    ];

    useEffect(() => {
        if (!selectedLesson && courseContent.length && courseContent[0].lessons.length) {
            setSelectedLesson(courseContent[0].lessons[0]);
        }
    }, [courseContent, selectedLesson]);

    return (
        <div className="flex">
            <CourseSidebar
                content={courseContent}
                selectedId={selectedLesson?.id}
                onSelect={setSelectedLesson}
            />
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h1 className="text-xl font-bold mb-2 mt-2 ml-2">{selectedLesson?.title}</h1>
                <VideoPlayer videoId={selectedLesson?.videoId} />
            </main>
        </div>
    );
};

export default CourseLayout;
