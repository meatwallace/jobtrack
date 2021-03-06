package org.bencompany.jobtrack.gateway.controller;

import org.bencompany.jobtrack.gateway.service.JobService;
import org.bencompany.jobtrack.gateway.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import static reactor.core.publisher.Mono.just;

@RestController
public class GatewayController {

    private UserService userService;

    private JobService jobService;

    public GatewayController(UserService userService, JobService jobService) {
        this.userService = userService;
        this.jobService = jobService;
    }

    @CrossOrigin
    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello world!";
    }

    @CrossOrigin
    @GetMapping("/")
    public Flux<String> index() {
        return userService.getRandomUser().concatWith(just(" should ")).concatWith(jobService.getRandomJob());
    }
}
