package com.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.bean.UserDetails;
import com.backend.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/save")
	public ResponseEntity<UserDetails> saveUserDetails(@RequestBody UserDetails request) {
		
		return userService.saveUserDetails(request);
	}
	
	@GetMapping("/get/{username}")
	public ResponseEntity<UserDetails> getUserDetails(@PathVariable String username) {
		
		return userService.getUserDetails(username);
	}
}
