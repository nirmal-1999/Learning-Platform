package com.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.bean.Department;


@Repository
public interface DepartmentRepos extends MongoRepository<Department, String> {

}
