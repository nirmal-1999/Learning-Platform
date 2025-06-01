package com.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.bean.UserDetails;


@Repository
public interface UserRepository extends MongoRepository<UserDetails, String> {
	
	UserDetails findByUsername(String username);
}
