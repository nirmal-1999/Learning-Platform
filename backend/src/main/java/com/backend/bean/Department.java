package com.backend.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Department")
public class Department {
	
	@Id
	private String id;
	
	private String department;
}
