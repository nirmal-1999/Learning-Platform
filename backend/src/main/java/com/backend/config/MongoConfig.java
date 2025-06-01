package com.backend.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.mongodb.client.MongoClients;

@Configuration 
public class MongoConfig {
	
	
	@Bean
	MongoTemplate mongoTemplate()
	{
		try {
			String mongoUrl = "mongodb+srv://nirmalkkumar1999:MogStKmxhH0POBrU@cluster0.ms4fzcy.mongodb.net";
			String database = "LearningPlatform";
			return new MongoTemplate(MongoClients.create(mongoUrl), database);
		}
		catch(Exception e) {
			throw new RuntimeException("Error creating MongoTemplate: " + e.getMessage());
		}
	}
}
