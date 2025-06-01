package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.bean.CourseDetails;
import com.backend.bean.Department;
import com.backend.dto.response.CoursesList;
import com.backend.repository.DepartmentRepos;
import com.backend.service.CourseService;

@RestController
@RequestMapping("/courses")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	private DepartmentRepos departmentRepos;
	
	
	@PostMapping("/add")
	public ResponseEntity<String> addCourse(@RequestBody CourseDetails course) {
		
		return courseService.addCourse(course);
	}
	
	@GetMapping("/all/{username}")
	public ResponseEntity<List<CoursesList>> getAllCourses(@PathVariable String username) {
		List<CoursesList> coursesList = courseService.getAllCourses();
		return ResponseEntity.ok().body(coursesList);
	}
	
	@PostMapping("/add/department")
	public ResponseEntity<String> addDepartment(@RequestBody Department department) {
		
		departmentRepos.save(department);
		return ResponseEntity.ok().body("Department Addedd succesfully");
	}
	
	@GetMapping("/all/departments/{username}")
	public ResponseEntity<List<Department>> getAllDepartment(@PathVariable String username) {
		ResponseEntity<List<Department>> departmentList = courseService.getAllDepartment();
		return departmentList;
	}
}
