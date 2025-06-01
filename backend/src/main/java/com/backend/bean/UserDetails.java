package com.backend.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Document(collection = "Users")
public class UserDetails {
	
	@Id
	private String id;
	
	private String username;
	
	private String email;
	
	private String name;
	
	private String role;
	
	@JsonProperty("email_verified")
	private Boolean emailVerified;
}
