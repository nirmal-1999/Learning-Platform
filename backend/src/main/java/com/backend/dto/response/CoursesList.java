package com.backend.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CoursesList {
	
	private String departmentId;
	
	private String departmentName;
	
	private List<Courses> courses;
}
