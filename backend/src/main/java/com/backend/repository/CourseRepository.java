package com.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.bean.CourseDetails;


@Repository
public interface CourseRepository extends MongoRepository<CourseDetails, String> {
	
	List<CourseDetails> findByDepartmentName(String departmentName);
}
