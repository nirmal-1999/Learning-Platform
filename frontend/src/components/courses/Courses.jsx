import React from 'react'
import TopCourses from './TopCourses'

function Courses() {

  const courses = [
    {
      "id": 1,
      "heading": "Artificial Intelligence",
      "courses": [
        {
          "id": 1,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 2,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 3,
          "title": "Learning Terraform",
          "author": "Josh Samuelson",
          "duration": "2h 7m",
          "image": "/images/terraform.jpg"
        },
        {
          "id": 4,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        },
        {
          "id": 5,
          "title": "RAG Fine-Tuning Techniques for...",
          "author": "Harshit Tyagi",
          "duration": "1h 54m",
          "image": "/images/rag.jpg"
        },
        {
          "id": 6,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 7,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 8,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        }
      ]
    },
    {
      "id": 2,
      "heading": "Data Structure and Algorithm",
      "courses": [
        {
          "id": 1,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 2,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 3,
          "title": "Learning Terraform",
          "author": "Josh Samuelson",
          "duration": "2h 7m",
          "image": "/images/terraform.jpg"
        },
        {
          "id": 4,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        },
        {
          "id": 5,
          "title": "RAG Fine-Tuning Techniques for...",
          "author": "Harshit Tyagi",
          "duration": "1h 54m",
          "image": "/images/rag.jpg"
        },
        {
          "id": 6,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 7,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 8,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        }
      ]
    },
    {
      "id": 3,
      "heading": "Biology Courses",
      "courses": [
        {
          "id": 1,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 2,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 3,
          "title": "Learning Terraform",
          "author": "Josh Samuelson",
          "duration": "2h 7m",
          "image": "/images/terraform.jpg"
        },
        {
          "id": 4,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        },
        {
          "id": 5,
          "title": "RAG Fine-Tuning Techniques for...",
          "author": "Harshit Tyagi",
          "duration": "1h 54m",
          "image": "/images/rag.jpg"
        },
        {
          "id": 6,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 7,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 8,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        }
      ]
    },
    {
      "id": 4,
      "heading": "Data Science Courses",
      "courses": [
        {
          "id": 1,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 2,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 3,
          "title": "Learning Terraform",
          "author": "Josh Samuelson",
          "duration": "2h 7m",
          "image": "/images/terraform.jpg"
        },
        {
          "id": 4,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        },
        {
          "id": 5,
          "title": "RAG Fine-Tuning Techniques for...",
          "author": "Harshit Tyagi",
          "duration": "1h 54m",
          "image": "/images/rag.jpg"
        },
        {
          "id": 6,
          "title": "Using ChatGPT and Generative AI in FinTech",
          "author": "Michael McDonald",
          "duration": "1h 47m",
          "image": "/images/ai-fintech.jpg"
        },
        {
          "id": 7,
          "title": "DevOps Foundations: Continuous Delivery/Continuous...",
          "author": "Ernest Mueller and James Wickett",
          "duration": "1h 54m",
          "image": "/images/devops.jpg"
        },
        {
          "id": 8,
          "title": "Creating a Chat Tool Using OpenAI Models and Pinecone",
          "author": "Moti Lal Kumar",
          "duration": "1h 31m",
          "image": "/images/chat-tool.jpg"
        }
      ]
    }
  ];

  return (
    <div className='flex-grow' style={{ backgroundColor: "rgb(244, 242, 238)" }}>
      {courses.map((course, idx) => (
        <TopCourses key={course.id} title={course.heading} courses={course.courses} />
      ))}
    </div>
  )
}

export default Courses