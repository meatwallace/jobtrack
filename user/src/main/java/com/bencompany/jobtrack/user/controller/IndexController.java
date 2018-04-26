package com.bencompany.jobtrack.user.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class IndexController {

    @GetMapping("/index")
    Mono<String> test() {
        return Mono.just("Hello world!");
    }

}
