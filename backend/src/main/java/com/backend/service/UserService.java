package com.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.backend.bean.UserDetails;
import com.backend.repository.UserRepository;

import lombok.extern.log4j.Log4j2;



@Log4j2
@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public ResponseEntity<UserDetails> saveUserDetails(UserDetails request) {
		
		UserDetails user = userRepository.findByUsername(request.getUsername());
		if(user != null) {
			log.info("User already exits.");
			return ResponseEntity.status(HttpStatus.FOUND).body(user);
		}
		
		request.setRole(request.getRole().toLowerCase());
		userRepository.save(request);
		log.info("User register succesfully");
		return ResponseEntity.ok().body(user);
	}
	
	public ResponseEntity<UserDetails> getUserDetails(String username) {
		
		UserDetails user = userRepository.findByUsername(username);
		if(user == null) {
			log.info("User not found.");
			return ResponseEntity.ok().body(user);
		}
		return ResponseEntity.ok().body(user);
	}
}
