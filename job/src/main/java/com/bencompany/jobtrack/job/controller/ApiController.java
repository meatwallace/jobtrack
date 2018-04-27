package com.bencompany.jobtrack.job.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/job/random")
    Mono<String> randomJob() {
        return Mono.just("Clean the dishes");
    }

}
