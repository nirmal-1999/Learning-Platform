package com.backend.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;


@Data
@Document(collection = "Courses")
@JsonIgnoreProperties(ignoreUnknown = true)
public class CourseDetails {
	
	@Id
	private String id;
	
	@JsonProperty("username")
	private String username;
	
	@JsonProperty("author_name")
	private String authorName;
	
	@JsonProperty("department")
	private String departmentName;
	
	@JsonProperty("course_name")
	private String courseName;
	
	@JsonProperty("image")
	private String courseImage;
	
	@JsonProperty("duration")
	private String duration;
}
