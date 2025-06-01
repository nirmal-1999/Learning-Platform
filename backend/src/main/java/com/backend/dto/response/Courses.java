package com.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Courses {
	
	private String courseId;
	
	private String courseName;
	
	private String authorName;
	
	private String courseImage;
	
	private String courseDuration;
}
