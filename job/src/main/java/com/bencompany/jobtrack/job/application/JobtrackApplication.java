package com.bencompany.jobtrack.job.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.bencompany.jobtrack")
public class JobtrackApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobtrackApplication.class, args);
	}
}
