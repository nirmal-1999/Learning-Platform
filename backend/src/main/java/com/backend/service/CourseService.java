package com.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.backend.bean.CourseDetails;
import com.backend.bean.Department;
import com.backend.dto.response.Courses;
import com.backend.dto.response.CoursesList;
import com.backend.repository.CourseRepository;
import com.backend.repository.DepartmentRepos;

import lombok.extern.log4j.Log4j2;


@Log4j2
@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private DepartmentRepos departmentRepos;
	
	public ResponseEntity<String> addCourse(CourseDetails course) {
		
		courseRepository.save(course);
		log.info("Course Addedd succesfully");
		return ResponseEntity.ok().body("Course Addedd succesfully");
	}
	
	public List<CoursesList> getAllCourses() {
		
		List<CoursesList> allCourses = new ArrayList<CoursesList>();
		
		List<Department> departments = departmentRepos.findAll();
		for(Department department: departments) {
			
			List<CourseDetails> courseDetails = courseRepository.findByDepartmentName(department.getDepartment());
			if(!courseDetails.isEmpty()) {
				
				CoursesList courses = new CoursesList();
				courses.setDepartmentId(department.getId());
				courses.setDepartmentName(department.getDepartment());
				List<Courses> courseLists = new ArrayList<Courses>();
				
				for(CourseDetails courseDetail: courseDetails) {
					Courses course = Courses.builder()
							.courseId(courseDetail.getId()).courseName(courseDetail.getCourseName())
							.authorName(courseDetail.getAuthorName()).courseImage(courseDetail.getCourseImage())
							.courseDuration(courseDetail.getDuration()).build();
					courseLists.add(course);
				}
				courses.setCourses(courseLists);
				allCourses.add(courses);
				
			}
			else {
				log.info("No list of courses found for given department: "+ department.getDepartment());
			}
		}
		
		return allCourses;
	}
	
	public ResponseEntity<List<Department>> getAllDepartment() {
		
		List<Department> departments = departmentRepos.findAll();
		if(departments.isEmpty()) {
			log.info("No department found");
			return ResponseEntity.ok().body(departments);
		}
		
		return ResponseEntity.ok().body(departments);
	}
}
